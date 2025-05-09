import dotenv from 'dotenv';

dotenv.config();

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert';
import fs from 'fs';
import path from 'path';



// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isDevelopment = mode === 'development';

  return {
    plugins: [react(), mkcert()],
    server: {
      https: {
        key: fs.readFileSync(path.resolve(__dirname, 'ssl/key.pem')),
        cert: fs.readFileSync(path.resolve(__dirname, 'ssl/cert.pem')),
      },
      host: true,
      port: process.env.VITE_PORT || 5173,

      proxy: {
        '/graph': {
          target: isDevelopment ? 'http://localhost:3002' : 'https://10.92.0.113/graph', // Use localhost in dev, cloud server in prod
          changeOrigin: true,
          secure: false, // Allow self-signed certs
        },
        '/auth': {
          target: isDevelopment ? 'http://127.0.0.1:3001' : 'https://10.92.0.113/login', // Use localhost in dev, cloud server in prod
          changeOrigin: true,
          secure: false,
        },
      },
    },
    define: {
      VITE_API_URL: JSON.stringify(isDevelopment ? 'http://localhost:3002' : 'https://10.92.0.113/api'),
      VITE_ADMIN_API_URL: JSON.stringify(isDevelopment ? 'http://localhost:3001' : 'https://10.92.0.113/admin'),
      VITE_PORT: JSON.stringify(process.env.VITE_PORT),
    },
  };
});
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import mkcert from 'vite-plugin-mkcert';
import fs from 'fs';
import path from 'path';


dotenv.config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), mkcert(),],
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'ssl/key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, 'ssl/cert.pem')),
    },
    host: true,
    port: process.env.VITE_PORT || 5173,

    proxy: {
      '/graph': {
        target: 'https://10.92.0.113:3002', // your backend
        changeOrigin: true,
        secure: false, // allow self-signed certs
      },
    },
  },
  define: {
    VITE_API_URL: JSON.stringify(process.env.VITE_API_URL),
    VITE_PORT: JSON.stringify(process.env.VITE_PORT),
  }
});
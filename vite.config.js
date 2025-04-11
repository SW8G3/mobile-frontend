import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import mkcert from 'vite-plugin-mkcert';

dotenv.config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), mkcert()],
  server: {
    https: true,
    host: true,
    port: process.env.VITE_PORT || 5173
  },
  define: {
    VITE_API_URL: JSON.stringify(process.env.VITE_API_URL),
    VITE_PORT: JSON.stringify(process.env.VITE_PORT),
  }
});
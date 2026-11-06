import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const allowedHosts = ['coder-line-technology-frontend.onrender.com', '.onrender.com','coderlinetechnology.com'];

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    allowedHosts
  },
  preview: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 4173,
    allowedHosts
  }
});

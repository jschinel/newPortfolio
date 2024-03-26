import 'dotenv/config';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // vite.config.js
  basename: './',
  plugins: [react()],
  root: path.resolve(__dirname, './'),
  
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
 server: {
		allowedHosts: ['a842-2a0c-5a81-e110-6000-2195-b92c-4fb6-e7a3.ngrok-free.app']
	}
})


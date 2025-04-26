import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths';


// https://vite.dev/config/
export default defineConfig({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter"],
        rohesta: ['Rohesta', 'sans-serif'],
        caughe: ['caughe' , 'sans-serif'],
        Greethen: ['Greethen' , 'sans']
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  
})



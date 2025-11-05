// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: 'react',     // Allows JSX without importing React in every file
      include: ['**/*.js', '**/*.jsx'],  // ✅ Enable JSX in .js files too
    }),
  ],
})

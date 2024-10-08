import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    base: "/",
    plugins: [react(), viteTsconfigPaths()],
    define: {
        ...(process.env.NODE_ENV === 'development' ? {global: 'window'} : {})
    },
    server: {
        // this ensures that the browser opens upon server start
        open: true,
        // this sets a default port to 3000
        port: 3000
    }
})

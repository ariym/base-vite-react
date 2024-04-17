import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';


const httpsConfig = (keyPath: string, certPath: string) => ({
  key: fs.readFileSync(keyPath),
  cert: fs.readFileSync(certPath)
})


// https://vitejs.dev/config/
export default ({ mode }) => {

  const env = loadEnv(mode, process.cwd(), '');

  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src")
      },
    },
    server: {
      https: mode === "production" ? httpsConfig(env.VITE_KEY_PATH, env.VITE_CERT_PATH) : null
    }
  });

}
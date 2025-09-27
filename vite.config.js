import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  base: "/Festival-Greetings-App/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        greeting: resolve(__dirname, "greeting.html"),
      },
    },
  },
});

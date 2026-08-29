import path from "path";
import { fileURLToPath } from "url";

// 📌 Определяем путь к текущему файлу
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 📌 Универсальный массив директорий
export const Root = [
    "../server",
].map((relativePath) => path.resolve(__dirname, relativePath));

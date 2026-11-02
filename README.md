Todo List
Простое приложение для управления задачами, разработанное в рамках тестового задания на позицию Junior Frontend Developer.
Возможности
• Добавление новых задач.
• Запрет добавления пустых задач и строк из пробелов.
• Отметка задач как выполненных или активных.
• Удаление задач.
• Фильтрация задач: все, активные, выполненные.
• Сохранение задач в localStorage.
• Сохранение состояния задач после перезагрузки страницы.
• Адаптивный интерфейс.
Технологии
• React
• TypeScript
• Vite
• CSS
• localStorage
Установка и запуск
Для запуска проекта необходимо установить Node.js.
1. Клонировать репозиторий:
git clone <URL-репозитория>
2. Перейти в папку проекта:
cd ZalogHabTest
3. Установить зависимости:
npm install
4. Запустить приложение в режиме разработки:
npm run dev
5. Открыть в браузере адрес, указанный в терминале Vite (обычно http://localhost:5173).
Сборка проекта
Для production-сборки:
npm run build
Для проверки сборки:
npm run preview
Время выполнения
Примерное время выполнения тестового задания: 4–6 часов.
Автор
Тестовое задание — Junior Frontend Developer.

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

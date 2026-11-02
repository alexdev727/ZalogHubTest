# Todo List

Простое приложение для управления задачами, разработанное в рамках тестового задания на позицию **Junior Frontend Developer**.

## Возможности

- Добавление новых задач.
- Валидация ввода: запрет добавления пустых задач и строк из пробелов.
- Отметка задач как выполненных или активных.
- Удаление задач.
- Фильтрация задач: все, активные, выполненные.
- Сохранение задач в `localStorage`.
- Восстановление состояния задач после перезагрузки страницы.
- Адаптивный пользовательский интерфейс.

## Технологии

- React
- TypeScript
- Vite
- CSS
- localStorage

## Структура проекта

```text
ZalogHubTest/
├── public/
├── src/
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Установка и запуск

Для запуска проекта необходим установленный [Node.js](https://nodejs.org/).

1. Клонировать репозиторий:

```bash
git clone https://github.com/alexdev727/ZalogHubTest.git
```

2. Перейти в папку проекта:

```bash
cd ZalogHubTest
```

3. Установить зависимости:

```bash
npm install
```

4. Запустить приложение в режиме разработки:

```bash
npm run dev
```

5. Открыть в браузере адрес, указанный в терминале Vite (обычно `http://localhost:5173`).

## Сборка проекта

Создать production-сборку:

```bash
npm run build
```

Запустить предварительный просмотр production-сборки:

```bash
npm run preview
```

## Время выполнения

Примерное время выполнения задания: 50 минут.

## Автор

Тестовое задание на позицию Junior Frontend Developer.

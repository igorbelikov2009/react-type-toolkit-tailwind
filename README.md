# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# npm install -D tailwindcss postcss autoprefixer - Установите tailwindcss и его одноранговые зависимости через npm, tailwindcss https://tailwindcss.ru/docs/guides/create-react-app/

# npx tailwindcss init -p А затем запустите команду init, чтобы сгенерировать как tailwind.config.js, так и postcss.config.js

# Добавьте пути ко всем вашим файлам шаблонов в файл tailwind.config.js

/** @type {import('tailwindcss').Config} \*/
module.exports = {
content: [
"./src/**/\*.{js,jsx,ts,tsx}",
],
theme: {
extend: {},
},
plugins: [],
}

# Добавьте директивы Tailwind в свой CSS ./src/index.css file.

@tailwind base;
@tailwind components;
@tailwind utilities;

# Включаем расширение Tailwind CSS Autocomplete for Visual Studio Code

# npm install @reduxjs/toolkit react-redux

# npm i react-router-dom@6.3.0

# http://json2ts.com/ здесь автоматически генерируются различные интерфейсы для приложения. Копируем ответе в заголовках сети браузера, вставляем в окно на сайте, типы автоматически генерируются

#   r e a c t - t y p e - t o o l k i t - t a i l w i n d 
 
 

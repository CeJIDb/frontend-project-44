module.exports = {
  testEnvironment: 'node', // Для тестирования кода в Node.js
  verbose: true, // Подробный вывод результатов тестирования
  collectCoverage: true, // Сбор данных о покрытии кода тестами
  coverageDirectory: 'coverage', // Папка для отчета о покрытии
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'], // Поиск тестов
};

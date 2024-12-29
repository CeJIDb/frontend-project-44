# Makefile для управления задачами проекта

# Установка зависимостей (использует npm ci для чистой установки)
install:
	npm ci

# Запуск игры brain-games
brain-games:
	node bin/brain-games.js

# Публикация пакета (только проверка)
publish:
	npm publish --dry-run


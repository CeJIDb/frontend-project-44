# Makefile for managing project tasks

# Install dependencies and create a symlink for executable files
setup: install link

# Install dependencies (uses npm ci for a clean installation)
install:
	npm ci

# Create a symlink for local usage of executable files
link:
	npm link

# Publish the package (performs a dry run and runs the linter first)
publish: lint
	npm publish --dry-run

# Run code checks using ESLint
lint:
	npx eslint .

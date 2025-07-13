# Makefile for Portfolio Website

# Variables
DOCKER_COMPOSE = docker-compose
DOCKER_COMPOSE_FILE = docker-compose.yml
DOCKER_COMPOSE_OVERRIDE = docker-compose.override.yml
DOCKER_COMPOSE_PROD = docker-compose.prod.yml
DOCKER = docker
NPM = npm
NODE = node
NVM = nvm

# Default target
.DEFAULT_GOAL := help

# Help target
.PHONY: help
help: ## Display this help message
	@echo "Available commands:"
	@echo
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\$$//' | sed -e 's/##//' | column -t -s ':'

# Development targets
.PHONY: install
install: ## Install dependencies
	$(NPM) install

.PHONY: dev
up: ## Start the development server
	$(DOCKER_COMPOSE) -f $(DOCKER_COMPOSE_FILE) -f $(DOCKER_COMPOSE_OVERRIDE) up --build

.PHONY: down
down: ## Stop all containers
	$(DOCKER_COMPOSE) -f $(DOCKER_COMPOSE_FILE) -f $(DOCKER_COMPOSE_OVERRIDE) down

.PHONY: logs
logs: ## View container logs
	$(DOCKER_COMPOSE) -f $(DOCKER_COMPOSE_FILE) logs -f

# Build targets
.PHONY: build
build: ## Build the application
	$(NPM) run build

.PHONY: build-docker
docker-build: ## Build the Docker image
	$(DOCKER) build -t portfolio-website .

# Test targets
.PHONY: test
test: ## Run tests
	$(NPM) test

.PHONY: test-watch
test-watch: ## Run tests in watch mode
	$(NPM) test -- --watch

.PHONY: test-coverage
test-coverage: ## Run tests with coverage
	$(NPM) test -- --coverage

# Linting and formatting
.PHONY: lint
lint: ## Run ESLint
	$(NPM) run lint

.PHONY: format
format: ## Format code with Prettier
	$(NPM) run format

.PHONY: check-format
check-format: ## Check code formatting
	$(NPM) run check-format

# Production targets
.PHONY: prod
prod: ## Start the production server
	$(DOCKER_COMPOSE) -f $(DOCKER_COMPOSE_FILE) -f $(DOCKER_COMPOSE_PROD) up -d --build

.PHONY: prod-down
prod-down: ## Stop production containers
	$(DOCKER_COMPOSE) -f $(DOCKER_COMPOSE_FILE) -f $(DOCKER_COMPOSE_PROD) down

.PHONY: prod-logs
prod-logs: ## View production logs
	$(DOCKER_COMPOSE) -f $(DOCKER_COMPOSE_FILE) -f $(DOCKER_COMPOSE_PROD) logs -f

# Cleanup targets
.PHONY: clean
clean: ## Remove node_modules and build artifacts
	rm -rf node_modules .next out coverage

.PHONY: docker-clean
docker-clean: ## Remove all Docker containers, networks, and volumes
	$(DOCKER_COMPOSE) -f $(DOCKER_COMPOSE_FILE) -f $(DOCKER_COMPOSE_OVERRIDE) down -v
	$(DOCKER_COMPOSE) -f $(DOCKER_COMPOSE_FILE) -f $(DOCKER_COMPOSE_PROD) down -v
	$(DOCKER) system prune -f
	$(DOCKER) volume prune -f

# Database targets
.PHONY: db-shell
db-shell: ## Open a MongoDB shell
	$(DOCKER_COMPOSE) exec mongo mongosh -u root -p example portfolio

.PHONY: db-backup
db-backup: ## Create a database backup
	mkdir -p backups
	$(DOCKER) exec -t $$(docker-compose ps -q mongo) mongodump --out /data/db/backup --gzip
	$(DOCKER) cp $$(docker-compose ps -q mongo):/data/db/backup ./backups/$$(date +%Y%m%d%H%M%S)

.PHONY: db-restore
db-restore: ## Restore database from backup
	@if [ -z "$(BACKUP)" ]; then \
		echo "Please specify a backup directory with BACKUP=path/to/backup"; \
		exit 1; \
	fi
	$(DOCKER) cp $(BACKUP) $$(docker-compose ps -q mongo):/data/db/backup
	$(DOCKER_COMPOSE) exec mongo mongorestore --drop --gzip /data/db/backup

# Utility targets
.PHONY: deps-outdated
deps-outdated: ## Check for outdated dependencies
	$(NPM) outdated

.PHONY: deps-update
deps-update: ## Update dependencies
	$(NPM) update

.PHONY: deps-audit
deps-audit: ## Run security audit
	$(NPM) audit

.PHONY: deps-audit-fix
deps-audit-fix: ## Fix security vulnerabilities
	$(NPM) audit fix

.PHONY: nvm-use
nvm-use: ## Use the Node.js version specified in .nvmrc
	$(NVM) use

# Documentation targets
.PHONY: docs
docs: ## Generate documentation
	$(NPM) run docs

.PHONY: serve-docs
serve-docs: ## Serve documentation locally
	$(NPM) run serve-docs

# Release targets
.PHONY: version
version: ## Show the current version
	@echo "Current version: $(shell node -p "require('./package.json').version")"

.PHONY: version-patch
version-patch: ## Bump patch version
	$(NPM) version patch

.PHONY: version-minor
version-minor: ## Bump minor version
	$(NPM) version minor

.PHONY: version-major
version-major: ## Bump major version
	$(NPM) version major

# Development server with debug
.PHONY: debug
debug: ## Start development server with debug
	node --inspect -r ts-node/register -r tsconfig-paths/register ./node_modules/.bin/next dev

# Run migrations
.PHONY: migrate
migrate: ## Run database migrations
	$(NPM) run migrate

# Health check
.PHONY: health
health: ## Check application health
	@echo "Checking application health..."
	@curl -s http://localhost:3000/api/health | jq .

# List Docker containers
.PHONY: ps
ps: ## List running containers
	$(DOCKER_COMPOSE) ps

# Show container stats
.PHONY: stats
stats: ## Show container statistics
	$(DOCKER) stats

# Show disk usage
.PHONY: du
du: ## Show disk usage
	$(DOCKER) system df -v

# Show environment info
.PHONY: info
info: ## Show environment information
	@echo "=== System Information ==="
	@uname -a
	@echo
	@echo "=== Docker Information ==="
	@$(DOCKER) --version
	@$(DOCKER_COMPOSE) --version
	@echo
	@echo "=== Node.js Information ==="
	@$(NODE) --version
	@$(NPM) --version
	@echo
	@echo "=== NVM Information ==="
	@$(NVM) --version
	@echo
	@echo "=== Project Information ==="
	@echo "Name: $(shell node -p "require('./package.json').name")"
	@echo "Version: $(shell node -p "require('./package.json').version")"
	@echo "Description: $(shell node -p "require('./package.json').description")"
	@echo "Node.js: $(shell node -p "require('./package.json').engines.node")"
	@echo "NPM: $(shell node -p "require('./package.json').engines.npm")"

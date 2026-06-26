DOCKER_COMPOSE := $(shell command -v docker-compose 2>/dev/null && echo "docker-compose" || echo "docker compose")
PROJECT_NAME = app

.DEFAULT_GOAL := help
.PHONY: help dev start stop restart reset install lint format build clean logs

help:
	@echo "Project: $(PROJECT_NAME)"
	@echo ""
	@echo "  make dev       - Start dev (rebuild)"
	@echo "  make start     - Start app (fast)"
	@echo "  make stop      - Stop containers"
	@echo "  make restart   - Restart without rebuild"
	@echo "  make reset     - Clean rebuild"
	@echo "  make logs      - Follow container logs"
	@echo "  make install   - Install dependencies"
	@echo "  make lint      - Run ESLint"
	@echo "  make format    - Format code"
	@echo "  make build     - Build app"

dev:
	$(DOCKER_COMPOSE) up --build -d

start:
	$(DOCKER_COMPOSE) up

stop:
	$(DOCKER_COMPOSE) down

reset:
	$(DOCKER_COMPOSE) down -v
	$(DOCKER_COMPOSE) build --no-cache
	$(DOCKER_COMPOSE) up -d

logs:
	$(DOCKER_COMPOSE) logs -f app

install:
	docker exec -it $(PROJECT_NAME) npm install

lint:
	docker exec -it $(PROJECT_NAME) npm run lint

format:
	docker exec -it $(PROJECT_NAME) npm run format

build:
	docker exec -it $(PROJECT_NAME) npm run build

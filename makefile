default: help

install i:
	pnpm install

docs doc:
	pnpm run docs:dev

docs-deploy doc-up:
	pnpm run docs:deploy

dev:
	pnpm run dev

dist:
	pnpm run dist

new n:
	node ./build/bin/new.js $(filter-out $@,$(MAKECMDGOALS))


help:
	@echo
	@echo "    \033[35mmake \033[1m\033[36m命令使用说明 \033[36m方便快捷开发\033[0m"
	@echo
	@echo "    \033[35mmake install | make i \033[0m\t\033[0m\t --- 安装依赖"
	@echo "    \033[35mmake docs | make doc \033[0m\t\033[0m\t --- 文档开发"
	@echo "    \033[35mmake docs-deploy | make doc-up \033[0m\t --- 文档开发"
	@echo "    \033[35mmake dev \033[0m\t\033[0m\t\033[0m\t\033[0m\t --- 组件开发"
	@echo "    \033[35mmake dist \033[0m\t\033[0m\t\033[0m\t\033[0m\t --- 组件打包"
	@echo "    \033[35mmake new <component-name> [中文名] \033[0m\t --- 创建新组件基础文件 例如'make new button 按钮'"
	@echo
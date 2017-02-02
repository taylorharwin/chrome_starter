BABEL_NODE = node_modules/.bin/babel-node --presets es2015,react,stage-0
ISTANBUL = $(BABEL_NODE) node_modules/istanbul/lib/cli
ESLINT = node_modules/.bin/eslint --config '.eslintrc.js' --ignore-pattern '!.eslintrc.js'
MOCHA = node_modules/mocha/bin/_mocha -- --require test/setup.js test/helper.js test/ --recursive --full-trace
NODE = node
NPM_ENV_VARS = npm_config_registry=https://npm.plaid.com
NPM = $(NPM_ENV_VARS) npm
SASS_LINT = node_modules/.bin/sass-lint
WEBPACK = node_modules/.bin/webpack

SRC_PWD					= $(shell pwd)

JS_FILES        = $(shell find src -name '*.js'  | sort)
JSX_FILES       = $(shell find src -name '*.jsx' | sort)
SCSS_LINT_FILES = $(shell find src -name '*.scss' -not -path 'src/components/shared/styles/vendor/*' -not -path 'src/components/shared/styles/base/_icons.scss')
SRC             = $(JS_FILES) $(JSX_FILES)
LINT_FILES      = $(SRC)
TEST_FILES      = $(shell find test -name '*.js' | sort)



.PHONY: build
build:
	@$(WEBPACK)

.PHONY: clean
clean:
	@rm -rf dist coverage

.PHONY: lint
lint:
	@$(ESLINT) -- $(LINT_FILES) .eslintrc.js

.PHONY: lint-fix
lint-fix:
	@$(ESLINT) --fix -- $(LINT_FILES) .eslintrc.js

.PHONY: setup
setup: setup-hooks setup-dependencies

.PHONY: test
test: export NODE_PATH = $(SRC_PWD):src
test:
	@$(ISTANBUL) cover $(MOCHA)

.PHONY: setup-dependencies
setup-dependencies:
	@$(NPM) install

.PHONY: setup-hooks
setup-hooks:
	@chmod oug+x githooks/*
	@cp githooks/* .git/hooks/

.PHONY: watch
watch:
	@$(NPM) run dev

.PHONY: start
start:
	@$(NODE) ./server.js
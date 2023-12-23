install:	install-deps

install-deps:
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

brain-games:
	node bin/brain-games.js

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8
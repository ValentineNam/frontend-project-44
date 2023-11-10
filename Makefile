install:	install-deps

install-deps:
	npm ci

publish:
	npm publish --dry-run
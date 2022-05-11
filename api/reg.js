class TestDomain {
  constructor() {
    this.name = 'TestDomain';
    this.version = '1.0.0';
    this.description = 'TestDomain';
    this.author = 'TestDomain';
    this.license = 'MIT';
    this.dependencies = {
      'test-domain': '^1.0.0',
    };
    this.scripts = {
      start: 'node index.js',
      build: 'tsc',
      test: 'jest',
      lint: 'eslint src',
      'lint:fix': 'eslint src --fix',
      'lint:fix:all': 'eslint src --fix --all',
      'lint:fix:all:ts': 'eslint src/**/*.ts --fix --all',
      'lint:fix:all:ts:tsx': 'eslint src/**/*.tsx --fix --all',
      'lint:fix:all:js': 'eslint src/**/*.js --fix --all',
      'lint:fix:all:js:jsx': 'eslint src/**/*.jsx --fix --all',
      'lint:fix:all:json': 'eslint src/**/*.json --fix --all',
      'lint:fix:all:md': 'eslint src/**/*.md --fix --all',
      'lint:fix:all:yml': 'eslint src/**/*.yml --fix --all',
      'lint:fix:all:yaml': 'eslint src/**/*.yaml --fix --all',
      'lint:fix:all:css': 'eslint src/**/*.css --fix --all',
    }
  }
}
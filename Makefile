install: npm install

start: npx babel-node 'src/bin/brain-games.js' 10

publish: npm publish --dry-run
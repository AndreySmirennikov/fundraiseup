**Setup** 

1. Clone the repository into a folder
2. Go to Project root directory and install Dependency: npm install
3. All the dependencies from package.json would be installed in node_modules folder.

**How to run tests**
1. Go to Project root directory and run terminal
2. Run command in terminal: npx playwright test 
3. Run optins(parallel run, diferent browsers, reports and etc) is configuring in playwright.config.js

**How to get Allure report**
1. Setup allure: npm install -g allure-commandline --save-dev
2. Run tests
3. Run allure report: npx allure serve allure-results

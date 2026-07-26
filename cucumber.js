module.exports = {
  default: {
    // Aponta para as features no novo caminho
    paths: ['e2e/tests/feature/**/*.feature'],
    
    // Carrega os steps e os hooks dentro de e2e/tests
    require: [
      'e2e/tests/steps/**/*.js',
      'e2e/tests/support/**/*.js'
    ],
    format: [
      'progress-bar',
      'html:reports/cucumber-report.html'
    ],
  }
};
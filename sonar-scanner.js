const scanner = require('sonarqube-scanner');
 
scanner(
  {
    serverUrl: 'http://localhost:9000',
    token : "0bd84215f6c32f7c2bb32e8219732a561fccd6d3",
    options: {
      'sonar.projectName': 'Telegram Bot',
      'sonar.projectDescription': 'Description for "Telegram Bot" project...',
      'sonar.sources': 'src',
      'sonar.tests': 'tests'
    }
  },
  () => process.exit()
)
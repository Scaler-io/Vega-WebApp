pipeline {
  agent {
    node {
      label 'nodejs'
    }

  }
  stages {
    stage('npm version') {
      steps {
        sh 'npm -v'
      }
    }

  }
}
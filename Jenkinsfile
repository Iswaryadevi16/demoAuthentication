pipeline {
    agent any

    environment {
        CI = 'true'
    }

    stages {
        stage('Clone Code') {
            steps {
                git url: 'https://github.com/Iswaryadevi16/demoAuthentication.git', branch: 'main', credentialsId: 'github-path'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright install'
                bat 'npx playwright test tests/signup.spec.js'
            }
        }

        stage('Archive Test Reports') {
            steps {
                archiveArtifacts artifacts: 'playwright-report/**/*', allowEmptyArchive: true
                // Only use this if you are exporting JUnit format test results
                // junit 'test-results/**/*.xml'
            }
        }
    }
}

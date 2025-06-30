pipeline {
    agent any

    // tools {
    //     nodejs "NodeJS_18"  // Make sure "NodeJS_18" is configured in Jenkins > Global Tool Configuration
    // }

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
                sh 'npm install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright install'
                sh 'npx playwright test'
            }
        }

        stage('Archive Test Reports') {
            steps {
                archiveArtifacts artifacts: 'test-results/**/*.json', allowEmptyArchive: true
                junit 'test-results/**/*.xml' // Optional if you have JUnit results
            }
        }
    }
}

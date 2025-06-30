pipeline {
    agent any

    // tools {
    //     nodejs "NodeJS_18" // Use name you configured in Jenkins under Global Tool Configuration
    // }

    environment {
        HOME = "${env.WORKSPACE}"
    }

    stages {
        stage('Clone Code') {
            steps {
                git branch: 'main', url: 'https://github.com/your-username/your-repo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright install'  // install browsers
                sh 'npx playwright test'     // run tests gggggg
            }
        }

        stage('Archive Test Reports') {
            steps {
                archiveArtifacts artifacts: '**/playwright-report/**', allowEmptyArchive: true
            }
        }
    }
}

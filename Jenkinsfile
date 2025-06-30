pipeline {
    agent any

    environment {
        HOME = "${env.WORKSPACE}"
    }

    stage('Clone Code') {
    steps {
        git url: 'https://github.com/Iswaryadevi16/demoAuthentication.git', credentialsId: 'github-path', branch: 'main'
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
                archiveArtifacts artifacts: '**/playwright-report/**', allowEmptyArchive: true
            }
        }
    }
}

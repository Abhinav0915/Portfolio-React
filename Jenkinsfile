pipeline {
    agent any

    environment {
        FIREBASE_TOKEN = credentials('FIREBASE_DEPLOY_TOKEN') // Firebase token stored in Jenkins credentials
    }

    stages {
        stage('Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']],
                    userRemoteConfigs: [[
                        url: 'https://github.com/Abhinav0915/Portfolio-React.git',
                        credentialsId: 'GIT_CREDENTIALS'
                    ]]
                ])
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to Firebase') {
            steps {
                sh 'firebase deploy --token "$FIREBASE_TOKEN"'
            }
        }
    }
}


pipeline {
    agent any

    tools {
        nodejs 'Node20' // Ensure this matches the name in Jenkins Global Tool Configuration
    }

    environment {
        FIREBASE_TOKEN = credentials('FIREBASE_DEPLOY_TOKEN')
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
                sh 'npm install' // Installs project dependencies from package.json
            }
        }

        stage('Install Firebase CLI') {
            steps {
                sh 'npm install -g firebase-tools' // Install Firebase CLI globally
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
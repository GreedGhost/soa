pipeline {
    agent any

    stages {
        stage('Clone repository') {
            steps {
                git 'https://github.com/GreedGhost/soa.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    docker.build('frontend', './frontend')
                    docker.build('backend', './backend')
                    docker.build('api', './api')
                }
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                script {
                    // Stop any existing containers
                    sh 'docker-compose down'

                    // Start new containers
                    sh 'docker-compose up -d'
                }
            }
        }
    }
}

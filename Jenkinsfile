#!/usr/bin/env groovy

/*
 * LICENSE_PLACEHOLDER
 */

/**
 * Declaratve Jenkinsfile. The language is Groovy.
 * Contains the definition of a Jenkins Pipeline, is checked into source control
 * and is expected to be the reference.
 * To fully support multibranch builds without issues, we are using docker-compose to setup cots for each build.
 *
 * @author Léo Mieulet
 * @see https://jenkins.io/doc/book/pipeline/jenkinsfile/
 */

pipeline {
    agent { label 'unix-validation' }

    stages {
        stage('Build jekyll image') {
            steps {
	            sh 'docker build --build-arg https_proxy=$HTTP_PROXY --build-arg http_proxy=$HTTP_PROXY \
	                  --build-arg HTTP_PROXY=$HTTP_PROXY --build-arg HTTPS_PROXY=$HTTP_PROXY --build-arg no_proxy=$no_proxy \
	                  -t 172.26.46.158/rs_doc_generator .'
            }
        }
        stage('Generate the doc') {
            steps {
                // Wait for gateway, catalog, access-project, access-instance and front
                sh 'docker run --rm -i 172.26.46.158/rs_doc_generator \
                	-v ${WORKSPACE}/REGARDS-docs:/src/_docs \
                	-v ${WORKSPACE}/doc-static:/src/site \
                	jekyll build'
            }
            post {
                always {
	                sh 'sudo chown -R jenkins:jenkins ${WORKSPACE}/doc-static'
	            }
            }
        }
        stage('Create static website') {
            steps {
            	sh 'cp doc-static nginx/'
                sh 'cd nginx && docker build -t 172.26.46.158/rs_doc .'
                sh 'docker push 172.26.46.158/rs_doc'
            }
        }
    }
}
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
    agent { label 'unix-integration' }

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
                sh 'docker run --rm -i \
                	-v ${WORKSPACE}/nginx/doc-static:/src/_site \
                    -e https_proxy -e http_proxy -e HTTPS_PROXY -e HTTP_PROXY -e no_proxy \
                	172.26.46.158/rs_doc_generator bash -c "bundle && jekyll build"'
            }
            post {
                always {
	                sh 'sudo chown -R jenkins:jenkins nginx/doc-static'
	            }
            }
        }
        stage('Create static website') {
            steps {
                sh 'cd nginx && docker build --build-arg https_proxy=$HTTP_PROXY --build-arg http_proxy=$HTTP_PROXY \
	                  --build-arg HTTP_PROXY=$HTTP_PROXY --build-arg HTTPS_PROXY=$HTTP_PROXY --build-arg no_proxy=$no_proxy \
                      -t 172.26.46.158/rs_doc:'+${env.BRANCHE_NAME}+' .'
                sh 'docker push 172.26.46.158/rs_doc:'+${env.BRANCH_NAME}
            }
        }
    }
}
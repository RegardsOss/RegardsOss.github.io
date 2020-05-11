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
	            sh 'docker-compose build --pull regards-doc-generator'
            }
        }
        stage('Generate the doc') {
            steps {
                sh 'docker run --rm -i \
                	-v ${WORKSPACE}/nginx/doc-static:/src/ \
                	-v ${WORKSPACE}/:/srv/jekyll \
                    -u $(id -u ${USER}):$(id -g ${USER}) \
                	172.26.46.158/regards-doc-generator bash -c "jekyll build -d /src/"'

                sh 'cd nginx/doc-static && \
                    rm  CONTRIBUTING.md \
                        Dockerfile \
                        docker-compose.yml \
                        .gitignore \
                        ISSUE_TEMPLATE.md \
                        Jenkinsfile \
                        LICENSE.md \
                        README.md'
            }
        }
        stage('Create static website') {
            steps {
                sh 'cd nginx && docker build -t 172.26.46.158/rs_doc:$BRANCH_NAME .'
                sh 'docker push 172.26.46.158/rs_doc:$BRANCH_NAME'
            }
        }
    }
}
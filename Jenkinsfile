pipeline {
  agent { label 'builder' }

  tools {
    nodejs 'Node 18'
  }

  environment {
    AWS_REGION               = 'us-west-2'
    S3_BUCKET                = 'exialabs-static-website'
    CF_DISTRIBUTION_ID       = 'E1FD0C8E9U9M05'
    CF_INVALIDATOR_ROLE_ARN  = 'arn:aws:iam::026090529820:role/jenkins-cf-invalidator'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install dependencies') {
      steps {
        sh 'node -v'
        sh 'npm install'
      }
    }

    stage('Build static site') {
      steps {
        sh 'npm run build'
        sh 'ls -R out || (echo "out/ not found" && exit 1)'
      }
    }

    stage('Deploy to S3') {
      when { branch 'master' }
      steps {
        sh '''
          aws s3 sync out/ s3://$S3_BUCKET --delete --region $AWS_REGION
        '''
      }
    }


    stage('Invalidate CloudFront') {
        when { branch 'master' }
        steps {
            sh '''
            # ensure jq exists (uncomment if needed)
            apk add --no-cache jq || apt-get update && apt-get install -y jq || true

            # Assume the prod CloudFront invalidator role
            ASSUME=$(aws sts assume-role \
                --role-arn "$CF_INVALIDATOR_ROLE_ARN" \
                --role-session-name cf-invalidation-session)

            export AWS_ACCESS_KEY_ID=$(echo "$ASSUME" | jq -r .Credentials.AccessKeyId)
            export AWS_SECRET_ACCESS_KEY=$(echo "$ASSUME" | jq -r .Credentials.SecretAccessKey)
            export AWS_SESSION_TOKEN=$(echo "$ASSUME" | jq -r .Credentials.SessionToken)

            aws cloudfront create-invalidation \
                --distribution-id "$CF_DISTRIBUTION_ID" \
                --paths "/*"
            '''
        }
    }
  }

  post {
    failure {
      echo "Build or deploy failed."
    }
  }
}
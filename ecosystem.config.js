require('dotenv').config({ path: '.env' });

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF = 'origin/main',
} = process.env;

module.exports = {
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: 'https://github.com/TorentoFlag/nodejs-mesto-frontend',
      path: DEPLOY_PATH,
      'pre-deploy-local': `scp -v .env ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}`,
      'post-deploy': 'npm i && NODE_OPTIONS--openssl-legacy-provider npm run build',
    },
  },
};

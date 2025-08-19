require('dotenv').config({ path: '.ent.deploy' });

const {
  USER, HOST, PATH, REF = 'origin/main',
} = process.env;

module.exports = {
  deploy: {
    production: {
      user: USER,
      host: HOST,
      ref: REF,
      repo: `https://github.com/TorentoFlag/nodejs-mesto-frontend`,
      path: PATH,
      'pre-deploy-local': `scp -v .env.deploy ${USER}@${HOST}:${PATH}`,
      'post-deploy': 'npm i && NODE_OPTIONS--openssl-legacy-provider npm run build',
    },
  },
};

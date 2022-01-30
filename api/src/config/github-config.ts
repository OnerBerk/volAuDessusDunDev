const githubConfig = {
  githubAuth: {
    clientID: process.env.GITHUB_APP_ID,
    clientSecret: process.env.GITHUB_APP_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK_URL
  }
};
export default githubConfig;

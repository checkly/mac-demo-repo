const config = {
  projectName: 'My First Checkly Project',
  logicalId: 'checkly-project-1',
  repoUrl: 'https://github.com/checkly/mac-demo-repo',
  checks: {
    locations: ['eu-central-1', 'us-west-1'],
    tags: ['mac'],
  }
}


module.exports = config

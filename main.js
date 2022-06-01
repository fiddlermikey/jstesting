const core = require('@actions/core');
const { GitHub, context } = require('@actions/github');

const { owner, repo } = context.repo;
// const semver = require('semver');
const process = require('process');

const octokit = new GitHub(process.env.GITHUB_TOKEN);
const foo = 'bar'
console.log(foo)
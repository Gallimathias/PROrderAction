const core = require('@actions/core');
const github = require('@actions/github');

let token = core.getInput("repo-token", {required: true});
let client = new github.GitHub(token);

client.pulls.list().then(request => {
    request.data
    .forEach(pr => {
        core.info("PR " + pr.id + ": " + pr.state);
    })
});


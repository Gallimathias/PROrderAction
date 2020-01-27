const core = require("@actions/core");
const gitHub = require("@actions/github");

let token = core.getInput("repo-token", { required: true });
let client = new gitHub.GitHub(token);

console.log("Hello World, this is a demo");

client.pulls
  .list({
    owner: gitHub.context.repo.owner,
    repo: gitHub.context.repo.repo
  })
  .then(pull => {
    pull.data.forEach(p => {
      console.log("Id: " + p.id + " State: " + p.state);
      client.issues.addLabels({
        owner: gitHub.context.repo.owner,
        repo: gitHub.context.repo.repo,
        number: p.id,
        labels: ["bug"]
      })
    });
  });

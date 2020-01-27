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
      var obj = {
        owner: gitHub.context.repo.owner,
        repo: gitHub.context.repo.repo,
        issue_number: p.number,
        labels: ["bug"]
      };
      console.log(obj);
      client.issues.addLabels(obj);
    });
  });

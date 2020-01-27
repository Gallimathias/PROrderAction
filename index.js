const core = require("@actions/core");
const gitHub = require("@actions/github");

let token = core.getInput("repo-token", { required: true });
let client = new gitHub.GitHub(token);

console.log("Hello World, this is a demo");

client.pulls
  .list({
    owner: gitHub.context.repo.owner
  })
  .then(pull => {
    pull.data.forEach(p => {
      console.log("State: " + p.state);
    });
  });

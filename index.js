const core = require("@actions/core");
const gitHub = require("@actions/github");

let token = core.getInput("repo-token", { required: true });
let client = new gitHub.GitHub(token);

console.log("Hello World, this is a demo");

let repo = gitHub.context.repo.repo;
let owner = gitHub.context.repo.owner;
client.pulls
  .list({
    owner: owner,
    repo: repo
  })
  .then(pull => {
    pull.data.forEach(p => {
      var obj = {
        owner: owner,
        repo: repo,
        issue_number: p.number,
        labels: ["bug"]
      };
      console.log(p);
      client.pulls.listReviewRequests({
        owner: owner,
        repo: repo,
        pull_number: p.number
      }).then(list => console.log(list.data));
    });
  });
console.log("Bla this is a demo");
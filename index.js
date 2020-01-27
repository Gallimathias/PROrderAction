const core = require('@actions/core');
const gitHub = require('@actions/github');

let token = core.getInput("repo-token", { required: true });
let client = new gitHub.GitHub(token);

console.log("Hello World, this is a demo");

client.pulls.list().then(request => {
  request.data.forEach(pr => {
    try {
      info("PR " + pr.id + ": " + pr.state);
    } catch (error) {
      console.log("An error occured: " + error);
    }
  });
});

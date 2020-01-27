import { getInput, info } from "@actions/core";
import { GitHub } from "@actions/github";

let token = getInput("repo-token", { required: true });
let client = new GitHub(token);

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

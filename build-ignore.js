// eslint-disable-next-line @typescript-eslint/no-var-requires
const { exec } = require('node:child_process');

console.log("Checking if the site needs to build...");

const COMMIT = process.env.COMMIT_REF;
let gitDiff = '';

switch (process.env.PUBLIC_SITE_NAME) {
	case "system":
		console.log("site match found, checking diff for changes");
		gitDiff = `git diff main ${COMMIT} ./packages/system/`;
    break;
  case "landing":
		console.log("landing site match found, checking diff for changes");
		gitDiff = `git diff main ${COMMIT} ./packages/landing-site/`;
    break;
  case "react":
		console.log("react site match found, checking diff for changes");
		gitDiff = `git diff main ${COMMIT} ./packages/site/src/data/react/ ./packages/site/src/components/ ./packages/site/src/layouts/ ./packages/site/src/pages/`;
    break;
  case "nodejs":
		console.log("node site match found, checking diff for changes");
		gitDiff = `git diff main ${COMMIT} ./packages/site/src/data/nodejs/ ./packages/site/src/components/ ./packages/site/src/layouts/ ./packages/site/src/pages/`;
    break;
  case "graphql":
		console.log("graphql site match found, checking diff for changes");
		gitDiff = `git diff main ${COMMIT} ./packages/site/src/data/graphql/ ./packages/site/src/components/ ./packages/site/src/layouts/ ./packages/site/src/pages/`;
    break;
  case "vue":
		console.log("vue site match found, checking diff for changes");
		gitDiff = `git diff main ${COMMIT} ./packages/site/src/data/vue/ ./packages/site/src/components/ ./packages/site/src/layouts/ ./packages/site/src/pages/`;
    break;
  case "solidjs":
		console.log("solid site match found, checking diff for changes");
		gitDiff = `git diff main ${COMMIT} ./packages/site/src/data/solidjs/ ./packages/site/src/components/ ./packages/site/src/layouts/ ./packages/site/src/pages/`;
    break;
  case "angular":
		console.log("angular site match found, checking diff for changes");
		gitDiff = `git diff main ${COMMIT} ./packages/site/src/data/angular/ ./packages/site/src/components/ ./packages/site/src/layouts/ ./packages/site/src/pages/`;
    break;
  case "svelte":
		console.log("svelte site match found, checking diff for changes");
		gitDiff = `git diff main ${COMMIT} ./packages/site/src/data/svelte/ ./packages/site/src/components/ ./packages/site/src/layouts/ ./packages/site/src/pages/`;
    break;
  case "qwik":
		console.log("qwik site match found, checking diff for changes");
		gitDiff = `git diff main ${COMMIT} ./packages/site/src/data/qwik/ ./packages/site/src/components/ ./packages/site/src/layouts/ ./packages/site/src/pages/`;
    break;
	default:
		console.log("no matches, exiting build process");
		return (process.exitCode = 0);
}

exec(gitDiff, (error, stdout) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return error.code;
  }
  console.log(stdout)
});

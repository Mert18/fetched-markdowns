import fs from "fs";
import fetch from "node-fetch"

// https://bitbucket.org/kaesystems/robolaunch/raw/${commit.hash}/docs/documentation.md
/* async function getStaticProps() {
  const commits = await loadCommits();
  commits.map(async(commit) => {
    const response = await fetch(`https://bitbucket.org/kaesystems/robolaunch/raw/${commit.hash}/docs/documentation.md`);
    const data = response.text();
    fs.writeFile(`../mds/${commit.hash}.md`, data, function(err) {
      console.log("Error writing file.", err);
    })
    
  })
  return { props: { commits } };
}
 */

async function getThem(){
   const res = await fetch(
    "https://api.bitbucket.org/2.0/repositories/kaesystems/robolaunch/commits"
  );
  const commits = await res.json();

  commits.values.map(async(commit) => {
    const response = await fetch(`https://bitbucket.org/kaesystems/robolaunch/raw/${commit.hash}/docs/documentation.md`);
    const data = await response.text();
    fs.writeFile(`mds/${commit.hash}.md`, data, {flag: "w+"}, function(err) {
      console.log("Error writing file.", err);
    })
  })
}

getThem();
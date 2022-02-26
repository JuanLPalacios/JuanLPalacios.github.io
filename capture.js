import * as fs from 'fs';
// eslint-disable-next-line import/no-extraneous-dependencies
import fetch from 'node-fetch';
import pinned from './js/pinned.js';
import topics from './js/topics.js';

console.log(JSON.stringify([1, 2, 3]));
const promises = pinned.map(
  (pin) => fetch(`https://api.github.com/repos/${pin}`)
    .then((response) => response.json())
    .then((repo) => {
      repo.technologies = repo.topics.map((topic) => topics[topic] || topic);
      repo['featured-image'] = `https://raw.githubusercontent.com/${repo.full_name}/main/screenshot.png`;
      repo['live-version'] = `https://${repo.owner.login}.github.io/${repo.name}`;
      repo['repo-link'] = repo.html_url;
      repo.id = repo.name;
      repo.name = repo.name.replace(/-/g, ' ');
      return repo;
    }),
);
const repos = await Promise.all(promises);

fs.writeFile('js/snapshot.js', ` const snapshot = ${JSON.stringify(repos)};
export default snapshot;`, (err) => {
  if (err) throw err;
  console.log('File is created successfully.');
});
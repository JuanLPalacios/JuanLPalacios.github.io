import * as fs from 'fs';
import pinned from './js/pinned.js';
import { mapInfo } from './js/utils.js';

const promises = pinned.map(mapInfo);
const repos = await Promise.all(promises);

fs.writeFile('js/snapshot.js', ` const snapshot = ${JSON.stringify(repos)};
export default snapshot;`, (err) => {
  if (err) throw err;
  console.log('File is created successfully.');
});
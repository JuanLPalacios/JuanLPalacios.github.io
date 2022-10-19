// eslint-disable-next-line no-undef
let fetch = globalThis?.fetch;

if (!fetch && process?.versions?.node) {
  // eslint-disable-next-line import/no-extraneous-dependencies
  fetch = (await import('node-fetch')).default;
}

const TOPICS = {
  css: 'CSS',
  css3: 'CSS3',
  typescript: 'TypeScript',
  html: 'HTML',
  javascript: 'JavaScript',
  jest: 'Jest',
  react: 'React',
  apprun: 'AppRun',
  ruby: 'Ruby',
  webpack: 'Webpack',
  'ruby-on-rails': 'Ruby on Rails',
};

export const mapInfo = (pin) => fetch(`https://api.github.com/repos/${pin}`)
  .then((response) => response.json())
  .then((repo) => {
    repo.technologies = repo.topics.map((topic) => TOPICS[topic] || topic);
    repo['featured-image'] = `https://raw.githubusercontent.com/${repo.full_name}/main/screenshot.png`;
    repo['live-version'] = repo.homepage || `https://${repo.owner.login}.github.io/${repo.name}`;
    repo['repo-link'] = repo.html_url;
    repo.id = repo.name;
    repo.name = repo.name.replace(/_/g, ' ');
    return repo;
  });

export default { mapInfo };
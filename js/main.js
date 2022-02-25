import pinned from './pinned.js';

const projectList = [];

function toggleNavigationMenu() {
  const ul = document.querySelector('#nav-menu');
  ul.classList.toggle('mobile-nav-menu');
}

function updateProjects() {
  const works = document.getElementById('works-list');
  works.innerHTML = projectList.map((project) => {
    if (project.technologies.then) project.technologies.then(() => { updateProjects(); });
    return `<article class="card work">
      <div class="background">
          <img src="${project['featured-image']}" alt="">
      </div>
      <div class="content">
          <h2>${project.name}</h2>
          ${project.description ? project.description.split('\n').map((x) => `<p>${x}</p>`).join('') : '<p></p>'}
          <ul>${project.technologies.then ? '' : project.technologies.map((x) => `<li>${x}</li>`).join('')}</ul>
      </div>
      <a href="#${project.id}" class="btn live">See Project</a>
    </article>`;
  }).join('');
}

function manipulatePopup(project) {
  document.getElementById('details').classList.add('active');
  document.querySelector('.modal h1').innerHTML = project.name;
  document.querySelector('.modal > img').src = project['featured-image'];
  document.querySelector('.modal .details-heder ul').innerHTML = project.technologies.map((x) => `<li>${x}</li>`).join('');
  document.querySelector('.modal .content .text').innerHTML = project.description.split('\n').map((x) => `<p>${x}</p>`).join('');
  document.querySelector('.modal .actions .btn:nth-child(1)').href = project['live-version'];
  document.querySelector('.modal .actions .btn:nth-child(2)').href = project['repo-link'];
}

function navigate(hash) {
  const result = projectList.filter((x) => hash === (`#${x.id}`))[0];
  if (result)manipulatePopup(result);
  else document.getElementById('details').classList.remove('active');
}

async function load(pins) {
  let ready = false;
  window.addEventListener('load', () => {
    ready = true;
    updateProjects();
    // Support For Hash Navigation
    navigate(window.location.hash);
    window.addEventListener('popstate', () => {
      navigate(window.location.hash);
    });

    document.querySelector('#menu-btn').addEventListener('click', () => {
      toggleNavigationMenu();
    });

    document.querySelector('#nav-menu').addEventListener('click', () => {
      toggleNavigationMenu();
    });

    const form = document.getElementById('comment');

    form.addEventListener('submit', (event) => {
      if (form.email.value !== form.email.value.toLowerCase()) {
        document.getElementById('error-message').innerText = 'The email Should be on lower case';
        event.preventDefault();
      } else document.getElementById('error-message').innerText = '';
    });
  });
  const promises = pins.map(
    (pin) => fetch(`https://api.github.com/repos/${pin}`)
      .then((response) => response.json())
      .then((repo) => {
        repo.technologies = fetch(repo.languages_url)
          .then((response) => response.json())
          .then((langs) => {
            repo.technologies = Object.keys(langs);
            updateProjects();
          });
        repo['featured-image'] = `https://raw.githubusercontent.com/${repo.full_name}/main/screenshot.png`;
        repo['live-version'] = `https://${repo.owner.login}.github.io/${repo.name}`;
        repo['repo-link'] = repo.html_url;
        repo.id = repo.name;
        repo.name = repo.name.replace(/-/g, ' ');
        return repo;
      }),
  );
  const repos = await Promise.all(promises);
  projectList.push(...repos.sort((a, b) => a.stargazers_count - b.stargazers_count));
  const idMap = {};

  for (let i = 0; i < projectList.length; i += 1) {
    const project = projectList[i];
    if (
      document.getElementById(project.id)
      || (projectList.filter((x) => project.id === x.id).length > 1)) {
      idMap[project.id] = (idMap[project.id] + 1) || 1;
      project.id += idMap[project.id];
    }
  }
  if (ready) updateProjects();
}

load(pinned);
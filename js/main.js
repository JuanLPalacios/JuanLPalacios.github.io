import pinned from './pinned.js';
import snapshot from './snapshot.js';
import { mapInfo } from './utils.js';

const LAST_UPDATE_TIMESTAMP_KEY = 'last-update';
const PROJECT_LIST = 'projects';

let projectList = snapshot;

function toggleNavigationMenu() {
  const ul = document.querySelector('#nav-menu');
  ul.classList.toggle('mobile-nav-menu');
}

function updateProjects() {
  const works = document.getElementById('works-list');
  works.innerHTML = projectList.map((project) => `<article class="card work">
      <div class="background">
          <img src="${project['featured-image']}" alt="">
      </div>
      <div class="content">
          <h2>${project.name}</h2>
          ${project.description ? project.description.split('\n').map((x) => `<p>${x}</p>`).join('') : '<p></p>'}
          <ul>${project.technologies.map((x) => `<li>${x}</li>`).join('')}</ul>
      </div>
      <a href="#${project.id}" class="btn live">See Project</a>
    </article>`).join('');
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
  if (localStorage.getItem(LAST_UPDATE_TIMESTAMP_KEY)
  && ((new Date(localStorage.getItem(LAST_UPDATE_TIMESTAMP_KEY)) - Date.now()) < 0)) {
    const promises = pins.map(mapInfo);
    const repos = await Promise.all(promises);
    projectList = repos;
    localStorage.setItem(PROJECT_LIST, JSON.stringify(projectList));
    localStorage.setItem(LAST_UPDATE_TIMESTAMP_KEY,
      new Date(new Date().setHours(new Date().getHours() + 6)).toISOString());
  } else {
    projectList = JSON.parse(localStorage.getItem(PROJECT_LIST)) || projectList;
  }
  projectList.sort((a, b) => a.stargazers_count - b.stargazers_count);
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
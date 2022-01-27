function toggleNavigationMenu() {
  const ul = document.querySelector('#nav-menu');
  ul.classList.toggle('mobile-nav-menu');
}

const projectList = [
  {
    name: 'Keeping track of hundreds  of components website',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when',
    'featured-image': 'imgs/Img%20Placeholder.jpg',
    technologies: [
      'html',
      'Bootstrap',
      'Ruby on rails',
    ],
    id: 'keeping-track-of-hundreds-of-components-website',
    'live-version': 'https://juanlpalacios.github.io/',
    'repo-link': 'https://github.com/JuanLPalacios/',
  },
  {
    name: 'Keeping track of hundreds  of components website',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when',
    'featured-image': 'imgs/Img%20Placeholder.jpg',
    technologies: [
      'html',
      'Bootstrap',
      'Ruby on rails',
    ],
    id: 'keeping-track-of-hundreds-of-components-website',
    'live-version': 'https://juanlpalacios.github.io/',
    'repo-link': 'https://github.com/JuanLPalacios/',
  },
  {
    name: 'Keeping track of hundreds  of components website',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when',
    'featured-image': 'imgs/Img%20Placeholder.jpg',
    technologies: [
      'html',
      'Bootstrap',
      'Ruby on rails',
    ],
    id: 'keeping-track-of-hundreds-of-components-website',
    'live-version': 'https://juanlpalacios.github.io/',
    'repo-link': 'https://github.com/JuanLPalacios/',
  },
  {
    name: 'Keeping track of hundreds  of components website',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when',
    'featured-image': 'imgs/Img%20Placeholder.jpg',
    technologies: [
      'html',
      'Bootstrap',
      'Ruby on rails',
    ],
    id: 'keeping-track-of-hundreds-of-components-website',
    'live-version': 'https://juanlpalacios.github.io/',
    'repo-link': 'https://github.com/JuanLPalacios/',
  },
  {
    name: 'Keeping track of hundreds  of components website',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when',
    'featured-image': 'imgs/Img%20Placeholder.jpg',
    technologies: [
      'html',
      'Bootstrap',
      'Ruby on rails',
    ],
    id: 'keeping-track-of-hundreds-of-components-website',
    'live-version': 'https://juanlpalacios.github.io/',
    'repo-link': 'https://github.com/JuanLPalacios/',
  },
  {
    name: 'Keeping track of hundreds  of components website',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when',
    'featured-image': 'imgs/Img%20Placeholder.jpg',
    technologies: [
      'html',
      'Bootstrap',
      'Ruby on rails',
    ],
    id: 'keeping-track-of-hundreds-of-components-website',
    'live-version': 'https://juanlpalacios.github.io/',
    'repo-link': 'https://github.com/JuanLPalacios/',
  },
  {
    name: 'Keeping track of hundreds  of components website',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when',
    'featured-image': 'imgs/Img%20Placeholder.jpg',
    technologies: [
      'html',
      'Bootstrap',
      'Ruby on rails',
    ],
    id: 'keeping-track-of-hundreds-of-components-website',
    'live-version': 'https://juanlpalacios.github.io/',
    'repo-link': 'https://github.com/JuanLPalacios/',
  },
];

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

window.addEventListener('load', () => {
  // Support For Hash Navigation
  const works = document.getElementById('works-list');
  works.innerHTML = projectList.map((project) => `<article class="card work">
  <div class="background">
      <img src="${project['featured-image']}" alt="">
  </div>
  <div class="content">
      <h2>${project.name}</h2>
      ${project.description.split('\n').map((x) => `<p>${x}</p>`).join('')}
      <ul>${project.technologies.map((x) => `<li>${x}</li>`).join('')}</ul>
  </div>
  <a href="#${project.id}" class="btn live">See Project</a>
  </article>`).join('');

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
});
function toggleNavigationMenu() {
  const ul = document.querySelector('#nav-menu');
  ul.classList.toggle('mobile-nav-menu');
}

const projectList = [
  {
    name: 'Keeping track of hundreds  of components website',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
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
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
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
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
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
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
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
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
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
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
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
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
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
]

function manipulatePopup(project) {
  document.querySelector(".modal h1").innerHTML = project.name;
  document.querySelector(".modal > img").src = project['featured-imagee'];
  //document.querySelector(".modal .details-heder ul").innerHTML = ;
  document.querySelector(".modal .content .text") = project.description;
  document.querySelector(".modal .actions .btn:nth-child(1)").href = project['live-version'];
  document.querySelector(".modal .actions .btn:nth-child(2)").href = project['repo-link'];
}

window.addEventListener('load', () => {
  /* // Support For Hash Navigation
  let $hash = window.location.hash;
  const observer = new MutationObserver(() => {
    if ($hash !== window.location.hash) {
      $hash = window.location.hash;
      console.log(window.location.hash);
      // if(hash=="")
    }
  });
  observer.observe(document, { subtree: true, childList: true }); */

  document.querySelector('#menu-btn').addEventListener('click', () => {
    toggleNavigationMenu();
  });

  document.querySelector('#nav-menu').addEventListener('click', () => {
    toggleNavigationMenu();
  });
});
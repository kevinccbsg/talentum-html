// selectores?¿?¿?¿?

const navbar = document.querySelector('.navbar');

// navbar.classList.remove('navbar');

// navbar.innerHTML = 'navbar';

const data = [
  {
    name: 'Attack on Titan Season 3 Part 2',
    image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx104578-LaZYFkmhinfB.jpg',
  },
  {
    name: 'Steins;Gate',
    image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx9253-7pdcVzQSkKxT.jpg',
  },
  {
    name: 'FLCL',
    image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx227-kxQ3PDHrrqp5.jpg',
  },
  {
    name: 'THE END OF EVANGELION',
    image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx32-i4ijZI4MuPiV.jpg',
  },
  {
    name: 'K-ON!!',
    image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx7791-kkyTqv0HI7D7.png',
  },
  {
    name: 'Demon Slayer: Kimetsu no Yaiba',
    image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101922-PEn1CTc93blC.jpg',
  },
  {
    name: 'The Slayers Next',
    image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx535-xCRCSK8YG89S.png',
  },
  {
    name: 'Death Note',
    image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1535-lawCwhzhi96X.jpg',
  },
]

const shows = document.querySelector('#shows');

const templateAnime = (anime) => {
  return `
    <article class="show-item">
      <figure>
        <div class="img-container">
          <img
            src="${anime.image}"
            alt="${anime.name}"
            title="${anime.name}"
          >
        </div>
        <figcaption>${anime.name}</figcaption>
      </figure>
    </article>
  `;
};

const renderList = (animeList) => {
  let content = '';
  if (animeList === undefined) {
    shows.innerHTML = '<h4>No hay shows</h4>';
  } else {
    for (let index = 0; index < animeList.length; index++) {
      const anime = animeList[index];
      const htmlAnime = templateAnime(anime);
      content = content + htmlAnime;
    }
    shows.innerHTML = content;
  }
};

// renderList(data);
// console.log(shows);


// Eventos?
const searchInput = document.querySelector('#search');

const listener = () => {
  console.log('click');
};

// addEventListener ??
searchInput.addEventListener('click', listener);

const form = document.querySelector('#form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(event.target.search.value);
  if (event.target.search.validity.valid === false) {
    form.classList.add('error');
  } else {
    // TODO: filter data by name
    form.classList.remove('error');
    renderList(data);
  }
});


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import {FILM_DETAILS_MOCK} from './mocks/films.ts';
import {GENRES_MOCK} from './mocks/genres.ts';
import {REVIEWS_DATA} from './mocks/reviews.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      films={FILM_DETAILS_MOCK}
      genresFilm={GENRES_MOCK}
      reviewsFilm={REVIEWS_DATA}

    />
  </React.StrictMode>
);

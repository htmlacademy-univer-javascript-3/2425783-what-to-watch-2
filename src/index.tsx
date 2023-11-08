import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app.tsx';
import {FILM_DETAILS_MOCK} from './mocks/films.ts';
import {REVIEWS_DATA} from './mocks/reviews.ts';
import {store} from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        films={FILM_DETAILS_MOCK}
        reviewsFilm={REVIEWS_DATA}
      />
    </Provider>
  </React.StrictMode>
);

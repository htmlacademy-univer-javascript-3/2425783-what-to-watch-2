import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, getFilmsGenre} from './action.ts';
import {FILM_DETAILS_MOCK} from '../mocks/films.ts';

const initialState = {
  genre: 'All genres',
  films: FILM_DETAILS_MOCK
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const {genre} = action.payload;
      state.genre = genre;
    })
    .addCase(getFilmsGenre, (state, action) => {
      const {genre} = action.payload;
      state.films = FILM_DETAILS_MOCK.filter((film) => genre === 'All genres' ? genre : film.genre === genre);
    });
});

export {reducer};

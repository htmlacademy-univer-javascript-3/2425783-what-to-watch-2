import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, getFilmsGenre, isLoadFilms, loadFilmPromo, loadFilms} from './action.ts';
import {FilmPreview, FilmPromo} from '../types';

type InitialState = {
  genre: string;
  films: FilmPreview[];
  sortedFilmsByGenre: FilmPreview[];
  filmPromo: Partial<FilmPromo>;
  isLoadFilms: boolean;
}

const initialState: InitialState = {
  genre: 'All genres',
  films: [],
  sortedFilmsByGenre: [],
  filmPromo: {},
  isLoadFilms: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const {genre} = action.payload;
      state.genre = genre;
    })
    .addCase(getFilmsGenre, (state, action) => {
      const {genre} = action.payload;
      state.sortedFilmsByGenre = state.films.filter((film) => genre === 'All genres' ? film : film.genre === genre);
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.sortedFilmsByGenre = action.payload;
    })
    .addCase(loadFilmPromo, (state, action) => {
      state.filmPromo = action.payload;
    })
    .addCase(isLoadFilms, (state, action) => {
      state.isLoadFilms = action.payload;
    });
});

export {reducer};

import {createReducer} from '@reduxjs/toolkit';
import {
  changeGenre, getCommentsFilmById, getFavoriteFilms, getFilmById,
  getFilmsGenre,
  isLoadFilms,
  getFilmPromo,
  getFilms,
  requireAuthorization, setError, setFavoriteFilms, setUserData, getSimilarFilmById
} from './action.ts';
import {FilmDetails, FilmPreview, FilmPromo, ReviewFilm} from '../types';
import {AuthorizationStatus} from '../enums/routes.ts';
import {User} from '../types';

type InitialState = {
  genre: string;
  films: FilmPreview[];
  sortedFilmsByGenre: FilmPreview[];
  filmPromo: FilmPromo | null;
  isLoadFilms: boolean;
  authorizationStatus: AuthorizationStatus;
  favoriteFilms: FilmDetails[];
  isFavoriteFilms: FilmDetails[];
  userData: Partial<User>;
  error: string | null;
  filmById: FilmDetails | null;
  commentsFilmById: ReviewFilm[];
  similarFilmById: FilmPreview[];
}

const initialState: InitialState = {
  genre: 'All genres',
  films: [],
  sortedFilmsByGenre: [],
  filmPromo: null,
  isLoadFilms: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  favoriteFilms: [],
  isFavoriteFilms: [],
  userData: {},
  error: null,
  filmById: null,
  commentsFilmById: [],
  similarFilmById: [],
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
    .addCase(getFilms, (state, action) => {
      state.films = action.payload;
      state.sortedFilmsByGenre = action.payload;
    })
    .addCase(getFilmPromo, (state, action) => {
      state.filmPromo = action.payload;
    })
    .addCase(isLoadFilms, (state, action) => {
      state.isLoadFilms = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(getFavoriteFilms, (state, action) => {
      state.favoriteFilms = action.payload;
    })
    .addCase(setFavoriteFilms, (state, action) => {
      state.isFavoriteFilms = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(getFilmById, (state, action) => {
      state.filmById = action.payload;
    })
    .addCase(getCommentsFilmById, (state, action) => {
      state.commentsFilmById = action.payload;
    })
    .addCase(getSimilarFilmById, (state, action) => {
      state.similarFilmById = action.payload;
    });
});

export {reducer};

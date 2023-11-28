import {createAction} from '@reduxjs/toolkit';
import {FilmDetails, FilmPreview, FilmPromo, ReviewFilm} from '../types';
import {AppRoutes, AuthorizationStatus} from '../enums/routes.ts';
import {User} from '../types';

export const changeGenre = createAction<{genre: string}>('genre/changeGenre');
export const getFilmsGenre = createAction<{genre: string}>('films/getFilmsGenre');

/* Получение списка фильмов */
export const getFilms = createAction<FilmPreview[]>('films/getFilms');

/* Получение промо фильма */
export const getFilmPromo = createAction<FilmPromo>('films/getFilmPromo');

/* спинер */
export const isLoadFilms = createAction<boolean>('films/isLoadFilms');

/* Получение фильма по Id */
export const getFilmById = createAction<FilmDetails>('film/getFilmById');

/* Получение комментариев к фильму */
export const getCommentsFilmById = createAction<ReviewFilm[]>('film/getCommentsById');

/* Получение комментариев к фильму */
export const getSimilarFilmById = createAction<FilmPreview[]>('film/getSimilarFilmById');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const getFavoriteFilms = createAction<FilmDetails[]>('films/getFavoriteFilms');

export const setFavoriteFilms = createAction<FilmDetails[]>('films/setFavoriteFilms');

export const setUserData = createAction<User>('user/setUserData');

export const redirectToRoute = createAction<AppRoutes>('main/redirectToRoute');

export const setError = createAction<string | null>('films/setError');

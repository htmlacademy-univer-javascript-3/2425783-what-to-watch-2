import {createAction} from '@reduxjs/toolkit';
import {FilmPreview, FilmPromo} from '../types';

export const changeGenre = createAction<{genre: string}>('genre/changeGenre');
export const getFilmsGenre = createAction<{genre: string}>('films/getFilmsGenre');

export const loadFilms = createAction<FilmPreview[]>('films/loadFilms');

export const loadFilmPromo = createAction<FilmPromo>('films/loadFilmPromo');

export const isLoadFilms = createAction<boolean>('films/isLoadFilms');

import {createAction} from '@reduxjs/toolkit';

export const changeGenre = createAction<{genre: string}>('genre/changeGenre');
export const getFilmsGenre = createAction<{genre: string}>('films/getFilmsGenre');

import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {FilmPreview, FilmPromo} from '../types';
import {APIRoute} from '../enums/routes.ts';
import {isLoadFilms, loadFilmPromo, loadFilms} from '../store/action.ts';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<FilmPreview[]>(APIRoute.Films);
    dispatch(loadFilms(data));
    dispatch(isLoadFilms(true));
  },
);

export const fetchFilmPromo = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilmPromo',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<FilmPromo>(APIRoute.FilmPromo);
    dispatch(loadFilmPromo(data));
  },
);


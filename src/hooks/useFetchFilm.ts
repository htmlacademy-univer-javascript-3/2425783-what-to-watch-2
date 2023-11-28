import {useNavigate} from 'react-router-dom';
import {useAppDispatch} from './store.ts';
import {useEffect} from 'react';
import {fetchFilmById, fetchSimilarFilmById} from '../services/api/api-actions.ts';
import {AppRoutes} from '../enums/routes.ts';

export function useFetchFilm(id: string) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchSimilarFilmById(id));
    dispatch(fetchFilmById(id))
      .then((res) => {
        if(res.meta.requestStatus === 'rejected') {
          navigate(`/${AppRoutes.NotFound}`);
        }
      });
  }, [id, navigate, dispatch]);
}

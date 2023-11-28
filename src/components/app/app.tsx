import {Route, Routes} from 'react-router-dom';
import MainPage from '../../pages/main/main';
import SignIn from '../../pages/sign-in/sign-in.tsx';
import NotFound from '../../pages/not-found/not-found.tsx';
import {AppRoutes} from '../../enums/routes.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import LoadingSpinner from '../loading-spinner/loading-spinner.tsx';
import PrivateRoutes from '../private-routes/private-routes.tsx';
import MyList from '../../pages/my-list/my-list.tsx';
import HistoryRoute from '../history-route/history-route.tsx';
import browserHistory from '../../browser-history.ts';
import MoviePage from '../../pages/movie-page/movie-page.tsx';

import {useEffect} from 'react';
import {checkAuthAction, fetchFilmPromo, fetchFilmsAction} from '../../services/api/api-actions.ts';

export default function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkAuthAction());
    dispatch(fetchFilmsAction());
    dispatch(fetchFilmPromo());
  }, [dispatch]);

  const isLoadFilms = useAppSelector((state) => state.isLoadFilms);

  if(!isLoadFilms) {
    return (<LoadingSpinner/>);
  }

  return (
    <HistoryRoute history={browserHistory}>
      <Routes>
        <Route path={AppRoutes.Main} element={<MainPage/>} />
        <Route path={AppRoutes.SignIn} element={<SignIn />} />
        <Route path={AppRoutes.MyList}
          element={
            <PrivateRoutes>
              <MyList/>
            </PrivateRoutes>
          }
        />
        <Route path={AppRoutes.Film} element={<MoviePage />} />
        {/*<Route path={AppRoutes.AddReview} element={<AddReview filmsData={films}/>}/>*/}
        {/*<Route path={AppRoutes.Player} element={<Player filmsData={films}/>} />*/}
        <Route path={AppRoutes.NotFound} element={<NotFound />} />
      </Routes>
    </HistoryRoute>
  );
}

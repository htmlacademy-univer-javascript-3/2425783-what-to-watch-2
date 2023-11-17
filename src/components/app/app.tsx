import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from '../../pages/main/main';
import SignIn from '../../pages/sign-in/sign-in.tsx';
import NotFound from '../../pages/not-found/not-found.tsx';
import {AppRoutes} from '../../enums/routes.ts';
import {useAppSelector} from '../../hooks';
import LoadingSpinner from '../loading-spinner/loading-spinner.tsx';

// interface AppProps {
//   films: FilmInfo[];
//   reviewsFilm: ReviewFilm[];
// }


export default function App() {
  const isLoadFilms = useAppSelector((state) => state.isLoadFilms);

  if(!isLoadFilms) {
    return (<LoadingSpinner/>);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Main} element={<MainPage/>} />
        <Route path={AppRoutes.SignIn} element={<SignIn />} />
        {/*<Route path={AppRoutes.MyList}*/}
        {/*  element={*/}
        {/*    <PrivateRoutes>*/}
        {/*      <MyList filmsData={films}/>*/}
        {/*    </PrivateRoutes>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route path={AppRoutes.Film} element={<MoviePage filmsData={films} reviewsFilm={reviewsFilm}/>} />*/}
        {/*<Route path={AppRoutes.AddReview} element={<AddReview filmsData={films}/>}/>*/}
        {/*<Route path={AppRoutes.Player} element={<Player filmsData={films}/>} />*/}
        <Route path={AppRoutes.NotFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

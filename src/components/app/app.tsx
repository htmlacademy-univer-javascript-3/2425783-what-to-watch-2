import MainPage from '../../pages/main/main';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoutes} from '../../enums/routes.tsx';
import {FilmInfo, GenresFilm} from '../../types/films.tsx';
import SignIn from '../../pages/sign-in/sign-in.tsx';
import MyList from '../../pages/my-list/my-list.tsx';
import AddReview from '../../pages/add-review/add-review.tsx';
import Player from '../../pages/player/player.tsx';
import NotFound from '../../pages/not-found/not-found.tsx';
import PrivateRoutes from '../private-routes/private-routes.tsx';
import MoviePage from '../../pages/movie-page/movie-page.tsx';

interface AppProps {
  films: FilmInfo[];
  genresFilm: GenresFilm[];
}


export default function App({films, genresFilm}: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.main}
          element={
            <MainPage
              films={films}
              genresFilm={genresFilm}
            />
          }
        >
          <Route path={AppRoutes.genre} element={
            <MainPage
              films={films}
              genresFilm={genresFilm}
            />
          }
          />
        </Route>
        <Route path={AppRoutes.signIn} element={<SignIn />} />
        <Route path={AppRoutes.myList}
          element={
            <PrivateRoutes>
              <MyList filmsData={films}/>
            </PrivateRoutes>
          }
        />
        <Route path={AppRoutes.film} element={<MoviePage filmsData={films}/>} />
        <Route path={AppRoutes.addReview} element={<AddReview filmsData={films}/>}/>
        <Route path={AppRoutes.player} element={<Player filmsData={films}/>} />
        <Route path={AppRoutes.notFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

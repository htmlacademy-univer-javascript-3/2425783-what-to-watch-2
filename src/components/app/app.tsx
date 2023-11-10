import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from '../../pages/main/main';
import {FilmInfo, GenresFilm, ReviewFilm} from '../../types/films.tsx';
import SignIn from '../../pages/sign-in/sign-in.tsx';
import MyList from '../../pages/my-list/my-list.tsx';
import AddReview from '../../pages/add-review/add-review.tsx';
import Player from '../../pages/player/player.tsx';
import NotFound from '../../pages/not-found/not-found.tsx';
import PrivateRoutes from '../private-routes/private-routes.tsx';
import MoviePage from '../../pages/movie-page/movie-page.tsx';
import {AppRoutes} from '../../enums/routes.ts';

interface AppProps {
  films: FilmInfo[];
  genresFilm: GenresFilm[];
  reviewsFilm: ReviewFilm[];
}


export default function App({films, genresFilm, reviewsFilm}: AppProps) {
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
        <Route path={AppRoutes.film} element={<MoviePage filmsData={films} reviewsFilm={reviewsFilm}/>} />
        <Route path={AppRoutes.addReview} element={<AddReview filmsData={films}/>}/>
        <Route path={AppRoutes.player} element={<Player filmsData={films}/>} />
        <Route path={AppRoutes.notFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

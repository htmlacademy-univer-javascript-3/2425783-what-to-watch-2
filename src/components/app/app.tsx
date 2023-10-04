import MainPage from '../../pages/main/main';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoutes} from '../../enums/routes.tsx';
import {FilmsInfo} from '../../types/films.tsx';
import SignIn from '../../pages/sign-in/sign-in.tsx';
import MyList from '../../pages/my-list/my-list.tsx';
import Card from '../card/card.tsx';
import AddReview from '../../pages/add-review/add-review.tsx';
import Player from '../../pages/player/player.tsx';
import NotFound from '../../pages/not-found/not-found.tsx';
import PrivateRoutes from '../private-routes/private-routes.tsx';


export default function App(props: FilmsInfo) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.main} element={<MainPage {...props} />} />
        <Route path={AppRoutes.signIn} element={<SignIn />} />
        <Route path={AppRoutes.myList}
          element={
            <PrivateRoutes>
              <MyList />
            </PrivateRoutes>
          }
        />
        <Route path={AppRoutes.film} element={<Card />} />
        <Route path={AppRoutes.addReview} element={<AddReview />} />
        <Route path={AppRoutes.player} element={<Player />} />
        <Route path={AppRoutes.notFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

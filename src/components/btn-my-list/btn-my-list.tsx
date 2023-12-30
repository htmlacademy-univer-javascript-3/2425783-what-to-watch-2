import {AppRoutes, AuthorizationStatus} from '../../enums/routes.ts';
import {fetchSetFavoriteFilms} from '../../services/api/api-actions.ts';
import {redirectToRoute} from '../../store/action.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';

type BtnMyListProps = {
  filmId: string;
  isFavorite: boolean;
  amountFilms: number;
}

export default function BtnMyList({filmId, isFavorite, amountFilms}:BtnMyListProps) {

  const
    dispatch = useAppDispatch(),
    authorizationStatus = useAppSelector((state) => state.USER.authorizationStatus);

  const handleBtnFavFilm = () => {
    if(authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchSetFavoriteFilms({filmId: filmId, status: isFavorite}));
    } else {
      dispatch(redirectToRoute(AppRoutes.SignIn));
    }
  };

  return(
    <button className="btn btn--list film-card__button" onClick={handleBtnFavFilm}>
      {
        isFavorite ? (
          <svg
            viewBox="0 0 18 14"
            width="18"
            height="14"
          >
            <use xlinkHref="#in-list"></use>
          </svg>
        ) : (
          <svg viewBox="0 0 19 20" width={19} height={20}>
            <use xlinkHref="#add" />
          </svg>
        )
      }
      <span>My list</span>
      <span className="film-card__count">{amountFilms}</span>
    </button>
  );
}

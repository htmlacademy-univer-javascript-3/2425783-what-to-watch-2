import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import GenresList from '../../components/genres-list/genres-list.tsx';
import FilmList from '../../components/film-list/film-list.tsx';
import {AppRoutes} from '../../enums/routes.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeGenre, getFilmsGenre} from '../../store/action.ts';
import ShowMoreBtn from '../../components/show-more-btn/show-more-btn.tsx';
import {FILM_DETAILS_MOCK} from '../../mocks/films.ts';

const MAX_CARD_FILM = 8;

export default function MainPage(): React.JSX.Element {
  const [filmsCount, setFilmsCount] = useState(MAX_CARD_FILM);

  const dispatch = useAppDispatch();
  const films = useAppSelector((state) => state.films);
  const genreName = useAppSelector((state) => state.genre);
  const [firstFilm] = films;

  const handleGenreClick = (genre: string) => {
    dispatch(changeGenre({genre}));
    dispatch(getFilmsGenre({genre}));
    setFilmsCount(MAX_CARD_FILM);
  };

  const handleBtnFilmsClick = () => {
    if(filmsCount < films.length) {
      setFilmsCount((prevState) => prevState + MAX_CARD_FILM);
    }
  };

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src={firstFilm.backgroundImage}
            alt={firstFilm.title}
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header/>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={firstFilm.posterImage}
                alt={firstFilm.title}
                width={218}
                height={327}
              />
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{firstFilm.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{firstFilm.genre}</span>
                <span className="film-card__year">{firstFilm.year}</span>
              </p>
              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <Link to={AppRoutes.MyList} className="btn btn--list film-card__button">
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList genresFilm={FILM_DETAILS_MOCK} activeGenre={genreName} clickHandler={handleGenreClick}/>
          <FilmList filmsData={films} maxCards={filmsCount}/>
          {
            filmsCount < films.length && (
              <ShowMoreBtn clickHandler={handleBtnFilmsClick}/>
            )
          }
        </section>
        <Footer></Footer>
      </div>
    </>
  );
}

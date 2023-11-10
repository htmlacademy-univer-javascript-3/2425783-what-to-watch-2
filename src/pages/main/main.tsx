import React, {useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {FilmInfo, GenresFilm} from '../../types/films';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import GenresList from '../../components/genres-list/genres-list.tsx';
import FilmList from '../../components/film-list/film-list.tsx';
import {AppRoutes} from '../../enums/routes.ts';

interface MainProps {
  films: FilmInfo[];
  genresFilm: GenresFilm[];
}

export default function MainPage({films, genresFilm}: MainProps): React.JSX.Element {
  const paramsGenre = useParams();
  const [firstFilm] = films;
  const [filmPreview, setFilmPreview] = useState(firstFilm);

  const handleFilmCardClick = (film: FilmInfo) => {
    setFilmPreview(film);
  };

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src={filmPreview.backgroundImage}
            alt={filmPreview.title}
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header/>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={filmPreview.posterImage}
                alt={filmPreview.title}
                width={218}
                height={327}
              />
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{filmPreview.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmPreview.genre}</span>
                <span className="film-card__year">{filmPreview.year}</span>
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
                <Link to={AppRoutes.myList} className="btn btn--list film-card__button">
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
          <GenresList genresFilm={genresFilm}/>
          <FilmList data={films} genre={paramsGenre.genre} clickHandler={handleFilmCardClick}/>
          <div className="catalog__more">
            <button className="catalog__button" type="button">
              Show more
            </button>
          </div>
        </section>
        <Footer></Footer>
      </div>
    </>
  );
}

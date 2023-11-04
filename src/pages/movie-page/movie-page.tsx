import React from 'react';
import {Link, useParams} from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import {FilmInfo, ReviewFilm} from '../../types/films.tsx';
import NotFound from '../not-found/not-found.tsx';
import FilmList from '../../components/film-list/film-list.tsx';
import {AppRoutes, FilmsRoutes} from '../../enums/routes.ts';
import MoviePageDetails from './movie-page-details/movie-page-details.tsx';
import MoviePageOverview from './movie-page-overview/movie-page-overview.tsx';
import MoviePageReviews from './movie-page-reviews/movie-page-reviews.tsx';

type FilmProps = {
  filmsData: FilmInfo[];
  reviewsFilm: ReviewFilm[];
}

export default function MoviePage({filmsData, reviewsFilm}: FilmProps): React.JSX.Element {

  const paramsFilm = useParams();
  const film = filmsData.find((item) => item.id === paramsFilm.id);

  const renderTabs = (tabName: string | undefined): JSX.Element => {
    switch(tabName) {
      case FilmsRoutes.overview:
        return <MoviePageOverview film={film}/> ;
      case FilmsRoutes.details:
        return <MoviePageDetails film={film}/>;
      case FilmsRoutes.reviews:
        return <MoviePageReviews reviewsFilm={reviewsFilm}/>;
      default:
        return <MoviePageOverview film={film}/>;
    }
  };

  return film ? (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img
              src={film.previewImage}
              alt={film.title}
            />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <Header/>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.year}</span>
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
                <button
                  className="btn btn--list film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <Link to={AppRoutes.addReview.replace(':id', film.id) } className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={film.posterImage}
                alt={film.title}
                width={218}
                height={327}
              />
            </div>
            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className={`film-nav__item ${paramsFilm.info === FilmsRoutes.overview ? 'film-nav__item--active' : ''}`}>
                    <Link to={AppRoutes.film.replace(':id', film.id).replace(':info', FilmsRoutes.overview)} className="film-nav__link">Overview</Link>
                  </li>
                  <li className={`film-nav__item ${paramsFilm.info === FilmsRoutes.details ? 'film-nav__item--active' : ''}`}>
                    <Link to={AppRoutes.film.replace(':id', film.id).replace(':info', FilmsRoutes.details)} className="film-nav__link">Details</Link>
                  </li>
                  <li className={`film-nav__item ${paramsFilm.info === FilmsRoutes.reviews ? 'film-nav__item--active' : ''}`}>
                    <Link to={AppRoutes.film.replace(':id', film.id).replace(':info', FilmsRoutes.reviews)} className="film-nav__link">Reviews</Link>
                  </li>
                </ul>
              </nav>
              {renderTabs(paramsFilm.info)}
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmList data={filmsData} genre={film.genre} maxCards={4}/>
        </section>
        <Footer></Footer>
      </div>
    </>
  ) : <NotFound/>;
}

import React from 'react';
import NotFound from '../../not-found/not-found.tsx';
import {FilmInfo} from '../../../types/films.ts';

type OverviewProps = {
  film?: FilmInfo;
}

export default function MoviePageOverview({film}: OverviewProps): React.JSX.Element {

  return film ? (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{film.scoreCount} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>
          {film.description}
        </p>
        <p className="film-card__director">
          <strong>Director:&nbsp;</strong>
          <span className="film-card__text">{film.director}</span>
        </p>
        <p className="film-card__starring">
          <strong>
            Starring:&nbsp;
          </strong>
          <span className="film-card__text">{film.starring.join(', ')}</span>
        </p>
      </div>
    </>
  ) : <NotFound/>;
}

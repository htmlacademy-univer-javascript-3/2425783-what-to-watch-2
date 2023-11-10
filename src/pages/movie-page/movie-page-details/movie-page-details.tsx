import React from 'react';
import NotFound from '../../not-found/not-found.tsx';
import {FilmInfo} from '../../../types/films.tsx';

type DetailsProps = {
  film?: FilmInfo;
}


export default function MoviePageDetails({film}: DetailsProps): React.JSX.Element {
  return film ? (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">
               Director:&nbsp;
          </strong>
          <span className="film-card__details-value">
            {film.director}
          </span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">
               Starring
          </strong>
          <span className="film-card__details-value">
            {
              film.starring.map((item) => (
                <>
                  <span key={film.id}>{item}</span>
                  <br></br>
                </>
              ))
            }
          </span>
        </p>
      </div>
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">
               Run Time
          </strong>
          <span className="film-card__details-value">{`${Math.trunc(film.runTime / 60)}:${film.runTime % 60}`}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{film.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">
               Released
          </strong>
          <span className="film-card__details-value">{film.year}</span>
        </p>
      </div>
    </div>
  ) : <NotFound/>;
}

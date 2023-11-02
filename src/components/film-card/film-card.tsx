import React from 'react';
import {Link} from 'react-router-dom';
import {FilmInfo} from '../../types/films.tsx';
import {AppRoutes} from '../../enums/routes.tsx';

type FilmCardProps = {
  film: FilmInfo;
  clickHandler: (item: FilmInfo) => void;
  mouseOverHandler: (item: FilmInfo) => void;
}

export default function FilmCard({film, clickHandler, mouseOverHandler}: FilmCardProps): React.JSX.Element {
  return (
    <article
      key={film.id}
      onClick={() => clickHandler(film)}
      onMouseOver={() => mouseOverHandler(film)}
      className="small-film-card catalog__films-card"
    >
      <div className="small-film-card__image">
        <img src={film.previewImage} alt={film.title}/>
      </div>
      <h3 className="small-film-card__title">
        <Link to={AppRoutes.film.replace(':id', film.id)} className="small-film-card__link">{film.title}</Link>
      </h3>
    </article>
  );
}

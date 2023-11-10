import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {FilmInfo} from '../../types/films.tsx';
import VideoPlayer from '../video-player/video-player.tsx';
import {AppRoutes} from '../../enums/routes.ts';

type FilmCardProps = {
  film: FilmInfo;
  clickHandler: (item: FilmInfo) => void;
}

export default function FilmCard({film, clickHandler}: FilmCardProps): React.JSX.Element {
  const [video, setVideo] = useState(false);
  const [isArticleHover, setArticleHover] = useState(false);

  const mouseOverHandler = () => {
    setArticleHover(true);
  };

  const mouseOutHandler = () => {
    setArticleHover(false);
    setVideo(false);
  };

  useEffect(() => {
    const hoverTimout =
      isArticleHover
        ? setTimeout(() => {
          setVideo(true);
        }, 1000)
        : '';

    return () => {
      clearTimeout(hoverTimout);
    };
  }, [isArticleHover]);

  return (
    <article
      key={film.id}
      onClick={() => clickHandler(film)}
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
      className="small-film-card catalog__films-card"
    >
      <div className="small-film-card__image">
        {
          video ? (<VideoPlayer videoLink={film.videoLink} posterImage={film.posterImage}></VideoPlayer>) : (<img src={film.previewImage} alt={film.title}/>)
        }
      </div>
      {
        !video && (
          <h3 className="small-film-card__title">
            <Link to={AppRoutes.film.replace(':id', film.id)} className="small-film-card__link">{film.title}</Link>
          </h3>
        )
      }
    </article>
  );
}

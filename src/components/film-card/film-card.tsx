import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {FilmInfo} from '../../types/films.ts';
import VideoPlayer from '../video-player/video-player.tsx';
import {AppRoutes, FilmsRoutes} from '../../enums/routes.ts';

type FilmCardProps = {
  film: FilmInfo;
}

export default function FilmCard({film}: FilmCardProps): React.JSX.Element {
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
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
      className="small-film-card catalog__films-card"
    >
      <div className="small-film-card__image">
        {
          video ? (<VideoPlayer videoLink={film.videoLink} posterImage={film.posterImage}/>) : (<img src={film.previewImage} alt={film.title}/>)
        }
      </div>
      {
        !video && (
          <h3 className="small-film-card__title">
            <Link to={AppRoutes.Film.replace(':id', film.id).replace(':info', FilmsRoutes.Overview)} className="small-film-card__link">{film.title}</Link>
          </h3>
        )
      }
    </article>
  );
}

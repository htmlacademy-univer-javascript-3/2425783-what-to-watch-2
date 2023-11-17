import {FilmPreview} from '../../types';
import FilmCard from '../film-card/film-card.tsx';
import React, {useMemo} from 'react';
import {getMoreLikeFilms} from '../../services/utils.ts';

type FilmListProps = {
  filmsData: FilmPreview[];
  genre?: string;
  maxCards: number;
}

const MemoizedFilmCard = React.memo(({ film }: { film: FilmPreview }) => (
  <FilmCard
    key={film.id}
    film={film}
  />
));

export default function FilmList({filmsData, genre, maxCards}:FilmListProps) {

  return(
    <div className="catalog__films-list">
      {useMemo(() => getMoreLikeFilms(filmsData, genre, maxCards), [filmsData, genre, maxCards])
        .map((film) => (
          <MemoizedFilmCard key={film.id} film={film}/>
        ))}
    </div>
  );
}

MemoizedFilmCard.displayName = 'MemoizedFilmCard';

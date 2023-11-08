import {FilmInfo} from '../../types/films.ts';
import FilmCard from '../film-card/film-card.tsx';

interface FilmListProps {
  data: FilmInfo[];
  clickHandler?: (item: FilmInfo) => void;
  maxCards?: number;
}

export default function FilmList({data, clickHandler, maxCards}:FilmListProps) {
  return(
    <div className="catalog__films-list">
      {data
        .filter((item, index) => maxCards ? index < maxCards : item)
        .map((film) => (
          <FilmCard
            key={film.id}
            film={film}
            clickHandler={() => clickHandler ? clickHandler(film) : ''}
          />
        ))}

    </div>
  );
}

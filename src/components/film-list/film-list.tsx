import {FilmInfo} from '../../types/films.ts';
import FilmCard from '../film-card/film-card.tsx';

interface FilmListProps {
  data: FilmInfo[];
  genre?: string;
  clickHandler?: (item: FilmInfo) => void;
  maxCards?: number;
}

export default function FilmList({data, genre, clickHandler, maxCards}:FilmListProps) {
  return(
    <div className="catalog__films-list">
      {data
        .filter((film) => genre ? film.genre.toLowerCase() === genre?.toLowerCase() : film)
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

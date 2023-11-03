import {FilmInfo} from '../../types/films.tsx';
import FilmCard from '../film-card/film-card.tsx';

interface FilmListProps {
  data: FilmInfo[];
  genre?: string;
  clickHandler?: (item: FilmInfo) => void;
}

export default function FilmList({data, genre, clickHandler}:FilmListProps) {
  return(
    <div className="catalog__films-list">
      {data
        .filter((film) => genre ? film.genre.toLowerCase() === genre?.toLowerCase() : film)
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

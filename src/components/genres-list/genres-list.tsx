import {Link} from 'react-router-dom';
import {FilmInfo} from '../../types';
import {useMemo} from 'react';
import {computeUniqueGenres, getActiveClass} from '../../services/utils.ts';

type GenresProps = {
  genresFilm: FilmInfo[];
  activeGenre: string;
  clickHandler: (genre: string) => void;
}

const
  ALL_GENRES = 'All genres',
  GENRE_ACTIVE_CLASS = 'catalog__genres-item--active';

export default function GenresList({genresFilm, activeGenre, clickHandler}: GenresProps) {

  return(
    <ul className="catalog__genres-list">
      {useMemo(() => computeUniqueGenres(genresFilm, ALL_GENRES), [genresFilm])
        .map((genre) => (
          <li
            key={genre}
            className={`catalog__genres-item ${getActiveClass(activeGenre, genre, GENRE_ACTIVE_CLASS)}`}
            onClick={() => clickHandler(genre)}
          >
            <Link to="#" className="catalog__genres-link">{genre}</Link>
          </li>
        ))}
    </ul>
  );
}

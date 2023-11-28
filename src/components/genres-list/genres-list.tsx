import {Link} from 'react-router-dom';
import {FilmPreview} from '../../types';
import {computeUniqueGenres, getActiveClass} from '../../services/utils.ts';
import {ALL_GENRES, GENRE_ACTIVE_CLASS} from '../../const';

type GenresProps = {
  genresFilm: FilmPreview[];
  activeGenre: string;
  clickHandler: (genre: string) => void;
}

export default function GenresList({genresFilm, activeGenre, clickHandler}: GenresProps) {
  return(
    <ul className="catalog__genres-list">
      {computeUniqueGenres(genresFilm, ALL_GENRES)
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

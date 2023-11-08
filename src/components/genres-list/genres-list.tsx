import {Link} from 'react-router-dom';
import {GenresFilm} from '../../types';

type GenresProps = {
  genresFilm: GenresFilm[];
  activeGenre: string;
  clickHandler: (genre: string) => void;
}

export default function GenresList({genresFilm, activeGenre, clickHandler}: GenresProps) {

  return(
    <ul className="catalog__genres-list">
      {genresFilm.map((genre) => (
        <li
          key={genre.id}
          className={`catalog__genres-item ${activeGenre === genre.name ? 'catalog__genres-item--active' : ''}`}
          onClick={() => clickHandler(genre.name)}
        >
          <Link to="#" className="catalog__genres-link">{genre.name}</Link>
        </li>
      ))}
    </ul>
  );
}

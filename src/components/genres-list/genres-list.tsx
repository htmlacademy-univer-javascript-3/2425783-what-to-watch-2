import {Link, useParams} from 'react-router-dom';
import {GenresFilm} from '../../types/films.tsx';
import {AppRoutes} from '../../enums/routes.tsx';

type GenresProps = {
  genresFilm: GenresFilm[];
}

export default function GenresList({genresFilm}: GenresProps) {
  const paramsGenre = useParams();
  return(
    <ul className="catalog__genres-list">
      {genresFilm.map((genre) => (
        <li key={genre.id} className={`catalog__genres-item${paramsGenre.genre === genre.slug ? ' catalog__genres-item--active' : ''}`}>
          <Link to={AppRoutes.main + (genre.slug !== 'all' ? genre.slug : '')} className="catalog__genres-link">{genre.name}</Link>
        </li>
      ))}
    </ul>
  );
}

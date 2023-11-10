import {Link, useParams} from 'react-router-dom';
import {GenresFilm} from '../../types/films.tsx';
import {AppRoutes} from '../../enums/routes.ts';

type GenresProps = {
  genresFilm: GenresFilm[];
}

export default function GenresList({genresFilm}: GenresProps) {
  const paramsGenre = useParams();
  const isGenreActive = (genre: string | undefined, genreFilm: GenresFilm): string => {
    if (!genre && genresFilm.indexOf(genreFilm) === 0) {
      return 'catalog__genres-item--active';
    }
    return genre === genreFilm.slug ? 'catalog__genres-item--active' : '';
  };

  return(
    <ul className="catalog__genres-list">
      {genresFilm.map((genre) => (
        <li key={genre.id} className={`catalog__genres-item ${isGenreActive(paramsGenre.genre, genre)}`}>
          <Link to={AppRoutes.main + (genre.slug !== 'all' ? genre.slug : '')} className="catalog__genres-link">{genre.name}</Link>
        </li>
      ))}
    </ul>
  );
}

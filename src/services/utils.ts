import {FilmInfo} from '../types';
import {RatingFilm} from '../enums/routes.ts';

export function computeUniqueGenres(films: FilmInfo[], ALL_GENRES: string) {
  return [ALL_GENRES, ...new Set(films.map((film) => film.genre))];
}

export function getRatingByFilm(rating: number) {
  switch (true) {
    case rating >= 0 && rating < 3:
      return RatingFilm.Bad;
    case rating >= 3 && rating < 5:
      return RatingFilm.Normal;
    case rating >= 5 && rating < 8:
      return RatingFilm.Good;
    case rating >= 8 && rating < 10:
      return RatingFilm.VeryGood;
    default:
      return RatingFilm.Awesome;
  }
}

export function getMoreLikeFilms(films: FilmInfo[], genre?: string, maxCards: number = films.length) {
  return films
    .filter((film) => genre ? film.genre.toLowerCase() === genre.toLowerCase() : film)
    .slice(0, maxCards);
}

export function formatFilmDuration(runTime: number) {
  return `${Math.trunc(runTime / 60)}:${runTime % 60}`;
}

export function getActiveClass(activeStr: string | undefined, prevStr: string, addClass: string) {
  return activeStr === prevStr ? addClass : '';
}

import React from 'react';
import {ReviewFilm} from '../../../types/films.ts';
import ReviewsFilm from '../../../components/reviews-film/reviews-film.tsx';

type ReviewsProps = {
  reviewsFilm: ReviewFilm[];
}

export default function MoviePageReviews({reviewsFilm}: ReviewsProps): React.JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        <ReviewsFilm reviewsFilm={reviewsFilm.slice(0, 3)}></ReviewsFilm>
      </div>
      <div className="film-card__reviews-col">
        <ReviewsFilm reviewsFilm={reviewsFilm.slice(3, 6)}></ReviewsFilm>
      </div>
    </div>
  );
}

import {ReviewFilm} from '../../types';

type ReviewsProps = {
  reviewsFilm: ReviewFilm[];
}

export default function ReviewsFilm({reviewsFilm}: ReviewsProps) {
  return(
    <>
      {
        reviewsFilm.map((reviews) => (
          <div className="review" key={reviews.id}>
            <blockquote className="review__quote">
              <p className="review__text">{reviews.comment}
              </p>
              <footer className="review__details">
                <cite className="review__author">{reviews.user}</cite>
                <time className="review__date" dateTime="2016-12-20">{reviews.date}</time>
              </footer>
            </blockquote>
            <div className="review__rating">{reviews.rating}</div>
          </div>
        )
        )
      }
    </>
  );
}

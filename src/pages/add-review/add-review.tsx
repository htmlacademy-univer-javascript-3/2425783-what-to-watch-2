import React, {useState} from 'react';
import Logo from '../../components/header/logo/logo';
import Breadcrumbs from '../../components/header/breadcrumbs/breadcrumbs';
import UserBlock from '../../components/header/user-block/user-block';
import {FilmDetails} from '../../types';
import {AppRoutes, FilmsRoutes} from '../../enums/routes.ts';
import {REVIEW_TEXT_MAX_LENGTH, REVIEW_TEXT_MIN_LENGTH} from '../../const';

type AddReviewProps = {
  filmData: FilmDetails;
}

type FormData = {
  name: string;
  value: string;
}

export default function AddReview({filmData}: AddReviewProps): React.JSX.Element {

  const [formData, setFormData] = useState({
    'rating': '',
    'reviewText': '',
  });

  const onChangeHandler = ({name, value}: FormData) => {
    setFormData({...formData, [name]: value});
  };

  const isSubmitDisabled = () => formData.rating === '' || formData.reviewText.length < REVIEW_TEXT_MIN_LENGTH || formData.reviewText.length > REVIEW_TEXT_MAX_LENGTH;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img
            src={filmData.backgroundImage}
            alt={filmData.name}
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo/>
          <Breadcrumbs id={filmData.id} title={filmData.name} />
          <UserBlock/>
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img
            src={filmData.posterImage}
            alt={`${filmData.name} poster`}
            width={218}
            height={327}
          />
        </div>
      </div>
      <div className="add-review">
        <form action={AppRoutes.Film.replace(':id', filmData.id).replace(':info', FilmsRoutes.Overview)} className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              {
                Array.from({length: 10}, (_, index) => 10 - index)
                  .map((star) => (
                    <React.Fragment key={star}>
                      <input
                        className="rating__input"
                        id={`star-${star}`}
                        type="radio"
                        name="rating"
                        value={star}
                        onChange={(event) => onChangeHandler(event.target)}
                      />
                      <label className="rating__label" htmlFor={`star-${star}`}>
                        Rating {star}
                      </label>
                    </React.Fragment>
                  ))
              }
            </div>
          </div>
          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="reviewText"
              id="reviewText"
              placeholder="Review text"
              defaultValue={''}
              onChange={(event) => onChangeHandler(event.target)}
            />
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit" disabled={isSubmitDisabled()}>
                  Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import Logo from '../../components/header/logo/logo';
import Breadcrumbs from '../../components/header/breadcrumbs/breadcrumbs';
import UserBlock from '../../components/header/user-block/user-block';
import {FilmInfo} from '../../types';
import NotFound from '../not-found/not-found.tsx';
import {AppRoutes, FilmsRoutes} from '../../enums/routes.ts';

type AddReviewProps = {
  filmsData: FilmInfo[];
}

type FormData = {
  name: string;
  value: string;
}

export default function AddReview({filmsData}: AddReviewProps): React.JSX.Element {

  const paramsFilm = useParams();
  const film = filmsData.find((item) => item.id === paramsFilm.id);

  const [formData, setFormData] = useState({
    'rating': '',
    'reviewText': '',
  });

  const onChangeHandler = ({name, value}: FormData) => {
    setFormData({...formData, [name]: value});
  };

  const isSubmitDisabled = () => formData.rating === '' || formData.reviewText.length < 50 || formData.reviewText.length > 400;

  return film ? (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img
            src={film.backgroundImage}
            alt={film.title}
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo/>
          <Breadcrumbs id={film.id} title={film.title} />
          <UserBlock/>
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img
            src={film.posterImage}
            alt={`${film.title} poster`}
            width={218}
            height={327}
          />
        </div>
      </div>
      <div className="add-review">
        <form action={AppRoutes.Film.replace(':id', film.id).replace(':info', FilmsRoutes.Overview)} className="add-review__form">
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
  ) : <NotFound/>;
}

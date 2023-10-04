import React from 'react';
import {Link} from 'react-router-dom';
import Footer from '../../components/footer/footer.tsx';


export default function NotFound(): React.JSX.Element {
  return (
    <div className="user-page" style={{justifyContent: 'space-between'}}>
      <header className="page-header user-page__head">
        <div className="logo">
          <a href={'/'} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>
      </header>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'}}>
        <h1 className="catalog__title">Error 404. Page not found</h1>
        <Link to={'/'} className="user-block__link">Back to home page</Link>
      </div>
      <Footer></Footer>
    </div>
  );
}

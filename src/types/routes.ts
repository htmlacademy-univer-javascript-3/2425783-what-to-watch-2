import {ReactElement} from 'react';

export interface PrivateRoute {
  isAuth?: boolean;
  children: ReactElement;
}

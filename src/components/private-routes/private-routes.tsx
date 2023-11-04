import { ReactElement } from 'react';
import {Navigate} from 'react-router-dom';
import {PrivateRoute} from '../../types/routes.tsx';
import {AppRoutes} from '../../enums/routes.ts';

export default function PrivateRoutes({isAuth = true, children}: PrivateRoute): ReactElement {
  return(
    isAuth ? children : <Navigate to={AppRoutes.signIn}/>
  );
}

import {PrivateRoute} from '../../types/routes.tsx';
import {Navigate} from 'react-router-dom';
import { ReactElement } from 'react';
import {AppRoutes} from '../../enums/routes.tsx';

export default function PrivateRoutes({isAuth = true, children}: PrivateRoute): ReactElement {
  return(
    isAuth ? children : <Navigate to={AppRoutes.signIn}/>
  );
}

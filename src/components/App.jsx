import { lazy } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';
// import Home from '../pages/Home/Home';
// import Tweets from '../pages/Tweets/Tweets';
// import { Loader } from './Loader/Loader';
// import { AppBar } from './AppBar/AppBar';
// import { PrivateRoute } from './Route/PrivateRoute';
// import { RestrictedRoute } from './Route/RestrictedRoute';
// import { refreshUser } from 'redux/auth/operations';
// import { selectIsRefreshing } from 'redux/auth/selectors';

const Home = lazy(() => import('../pages/Home/Home'));
// const Register = lazy(() => import('../pages/Register/Register'));
// const Login = lazy(() => import('../pages/LogIn/LogIn'));
const Tweets = lazy(() => import('../pages/Tweets/Tweets'));

export const App = () => {
  // const dispatch = useDispatch();
  // const isRefreshing = useSelector(selectIsRefreshing);

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  return (
    <Layout>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
        </Route>
      </Routes>
    </Layout>
  );
};

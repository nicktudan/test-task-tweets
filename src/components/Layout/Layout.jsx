import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { AppBar } from '../AppBar/AppBar';
import { Loader } from '../Loader/Loader';

import {Container} from './Layout.styled'

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

import { Suspense } from 'react';
import { RootWrapper } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import Currency from 'components/Currency/Currency';

const Layout = () => {
  return (
    <RootWrapper>
      <Suspense fallback={null}>
        <Currency />
        <Outlet />
      </Suspense>
    </RootWrapper>
  );
};

export default Layout;

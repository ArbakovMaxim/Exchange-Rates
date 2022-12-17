import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from 'layout/Layout';
import Converter from 'pages/Converter/Converter';
const PageNotFound = lazy(() => import('./pages/PageNotFound/PageNotFound'));

export const App = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Converter />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />;
      </Routes>
    </Suspense>
  );
};

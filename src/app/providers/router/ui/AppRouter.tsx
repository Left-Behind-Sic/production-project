import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from '@/shared/config/routeConfig/routeConfig';
import { PageLoader } from '@/widgets/PageLoader/PageLoader';
import RequireAuth from '@/app/providers/router/ui/RequireAuth';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    const element = <>{route.element}</>;

    return (
      <Route
        key={route.path}
        element={
          route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element
        }
        path={route.path}
      />
    );
  }, []);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(renderWithWrapper)}
        {/* {routes.map(({ element, path }) => ( */}
        {/*  <Route */}
        {/*    key={path} */}
        {/*    element={<div className='page-wrapper'>{element}</div>} */}
        {/*    path={path} */}
        {/*  /> */}
        {/* ))} */}
      </Routes>
    </Suspense>
  );
};

export default memo(AppRouter);

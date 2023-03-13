import React, { memo, Suspense, useCallback, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import RequireAuth from 'app/providers/router/ui/RequireAuth';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = <div className='page-wrapper'>{route.element}</div>;

    return (
      <Route
        key={route.path}
        element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
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

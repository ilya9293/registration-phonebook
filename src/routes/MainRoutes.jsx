import PropTypes from 'prop-types';
import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../redux/auth/authSelectors';
const HomePage = lazy(() => import('../pages/HomePage' /* webpackChunkName: "Home___page" */));
const Registration = lazy(() =>
  import('../pages/Registration' /* webpackChunkName: "Registration___page" */),
);
const Authorization = lazy(() =>
  import('../pages/Authorization' /* webpackChunkName: "Authorization___page" */),
);
const Contacts = lazy(() => import('../pages/Contacts' /* webpackChunkName: "Contacts___page" */));

const MainRoutes = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Public */}
        <Route path="/" element={<HomePage />} />
        {/* Authorized */}
        <Route
          path="/contacts"
          element={isLoggedIn ? <Contacts /> : <Navigate replace to="/login" />}
        />
        {/* Unauthorized */}
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Authorization />} />
      </Routes>
    </Suspense>
  );
};

Routes.propTypes = {};

export default MainRoutes;

import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Breadcrumb } from './components';
import { Todolist } from './list/list';
import { Productlist } from './product/productlist';
import { rootPath } from './routes';

/**
 * These are root pages
 */
const Home = ({ location }) => {
  return (
    <div>
      <h1 className="py-3">Home</h1>
      <Breadcrumb locationPath={location.pathname} />
      <Todolist />
    </div>
  );
};

const About = ({ location }) => {
  const onMatchedRoutes = (matchedRoutes) => {
    return [
      {
        route: {
          path: `${rootPath}/`,
          breadcrumbName: 'Home'
        }
      },
      ...matchedRoutes
    ];
  };

  return (
    <div>
        <h1 className="py-3">About</h1>
        <Breadcrumb
          locationPath={location.pathname}
          onMatchedRoutes={onMatchedRoutes}
        />
    </div>
  )
}

const Products = ({ location }) => {
  const onMatchedRoutes = (matchedRoutes) => {
    return [
      {
        route: {
          path: `${rootPath}/`,
          breadcrumbName: 'Home'
        }
      },
      ...matchedRoutes
    ];
  };

  return (
    <div>
      <h1 className="py-3">Products</h1>
      <Breadcrumb
        locationPath={location.pathname}
        onMatchedRoutes={onMatchedRoutes}
      />
      <Productlist />
    </div>
  );
};

const Electronics = ({ route, location }) => {
  const onMatchedRoutes = (matchedRoutes) => {
    return [
      {
        route: {
          path: `${rootPath}/`,
          breadcrumbName: 'Home'
        }
      },
      ...matchedRoutes
    ];
  };

  return (
    <div>
      <h1 className="py-3">Electronics</h1>

      <Breadcrumb
        locationPath={location.pathname}
        onMatchedRoutes={onMatchedRoutes}
      />

      {renderRoutes(route.routes)}
    </div>
  );
};

/**
 * These are pages nested in Electronics
 */
const Mobile = () => {
  return <h3>Mobile Phone</h3>;
};

const Desktop = () => {
  return <h3>Desktop PC</h3>;
};

const Laptop = () => {
  return <h3>Laptop</h3>;
};

export { Home, About, Products, Electronics, Mobile, Desktop, Laptop };

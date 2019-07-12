import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Breadcrumb } from './components';
import { Todolist } from './list/list';
import { Slideshow } from './slideshow/index';
import { Productlist } from './product/productlist';
import { AboutContent } from './about/about';
import { rootPath } from './routes';

/**
 * These are root pages
 */
const Home = ({ location }) => {
  return (
    <div>
      <h1 className="py-3">Home</h1>
      <Breadcrumb locationPath={location.pathname} />
      <Slideshow />
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
    <div className="fade">
        <h1 className="py-3">About</h1>
        <Breadcrumb
          locationPath={location.pathname}
          onMatchedRoutes={onMatchedRoutes}
        />
        <AboutContent />
    </div>
  )
}

const Todo = ({ location }) => {
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
    <div className="fade">
        <h1 className="py-3">TodoList</h1>
        <Breadcrumb
          locationPath={location.pathname}
          onMatchedRoutes={onMatchedRoutes}
        />
        <Todolist />
    </div>
  )
}

const Products = ({ route, location }) => {
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
    <div className="fade">
      <h1 className="py-3">Products</h1>
      <Breadcrumb
        locationPath={location.pathname}
        onMatchedRoutes={onMatchedRoutes}
      />
      {renderRoutes(route.routes)}
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
    <div className="fade">
      <h1 className="py-3">Electronics</h1>

      <Breadcrumb
        locationPath={location.pathname}
        onMatchedRoutes={onMatchedRoutes}
      />
      {renderRoutes(route.routes)}
    </div>
  );
};

const Item = ({ route, location }) => {
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
    <div className="fade">
      <h1 className="py-3">Item</h1>

      <Breadcrumb
        locationPath={location.pathname}
        onMatchedRoutes={onMatchedRoutes}
      />
      {location.pathname}
    </div>
  );
};

/**
 * These are pages nested in Electronics
 */
const Mobile = ({ route, location }) => {
  return <h3>Mobile Phone</h3>;
};

const Desktop = () => {
  return <h3>Desktop PC</h3>;
};

const Laptop = () => {
  return <h3>Laptop</h3>;
};

export { Home, Slideshow, About, AboutContent, Todo, Products, Item, Electronics, Mobile, Desktop, Laptop };

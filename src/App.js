import { Route, Router, Routes } from 'react-router-dom';

import DefaultLayout from './Layout/DefaultLayout';
import { privateRoutes, publicRoutes } from './routes';
import AdminLayout from './Layout/AdminLayout';
import routerConfig from './config/routes';
import AdHome from './pages/Admin/pages/AdHome';

function App() {
  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <DefaultLayout>
                  <Page />
                </DefaultLayout>
              }
            />
          );
        })}

        {privateRoutes.map((route, index) => {
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <AdminLayout>
                  <Page />
                </AdminLayout>
              }
            />
          );
        })}
      </Routes>
      {/* <Routes>
        {privateRoutes.map((route, index) => {
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Page />} />;
        })}
      </Routes> */}
    </div>
  );
}

export default App;

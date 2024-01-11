import { Route, Routes } from 'react-router-dom';

import DefaultLayout from './Layout/DefaultLayout';
import { privateRoutes, publicRoutes } from './routes';
import AdminLayout from './Layout/AdminLayout';
import { createContext } from 'react';
import { message } from 'antd';

export const Context = createContext();
function App() {
  const [messageApi, contextHolder] = message.useMessage();
  return (
    <div className="App">
      <Context.Provider value={{ messageApi }}>
        {contextHolder}
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
      </Context.Provider>
    </div>
  );
}

export default App;

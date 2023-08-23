import { Route, Routes } from 'react-router-dom';

import { publicRoutes } from './routes';
import DefaultLayout from './Layout/DefaultLayout';
import Footer from './Layout/components/Footer';

function App() {
  return (
    <div className="App">
      <DefaultLayout />

      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Page />} />;
        })}
      </Routes>
      <Footer />
      <div style={{ height: '2000px' }}></div>
    </div>
  );
}

export default App;

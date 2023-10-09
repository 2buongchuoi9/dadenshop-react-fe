import Header from '~/Layout/components/Header';
import Footer from '~/Layout/components/Footer';
// import { memo } from 'react';
import Sticky from '../components/Sticky';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import service from '~/services';
import { infosAction } from '~/app/slice/infoSlice';

function DefaultLayout({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    const fechApi = async () => {
      const a = await service.info.getInfo();
      dispatch(infosAction.get(a.data));
    };
    fechApi();
  }, []);

  return (
    <>
      <Header />
      {<main style={{ minHeight: '208px' }}>{children}</main>}
      <Sticky />
      <Footer />
    </>
  );
}
export default React.memo(DefaultLayout);

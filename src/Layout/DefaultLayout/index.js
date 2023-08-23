import Header from '~/Layout/components/Header';
import Footer from '~/Layout/components/Footer';

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
}
export default DefaultLayout;

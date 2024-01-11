import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';

import { GrFormPrevious } from 'react-icons/gr';

import service from '~/services';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import classNames from 'classnames/bind';
import style from './scss/ProductDetail.module.scss';

const cl = classNames.bind(style);

const settings = {
  dots: true,
  dotsClass: cl('cccc'),
  infinite: true,
  speed: 500,
  // autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function BtnNext({ className, style, onClick }) {
  return (
    <button
      className={cl(className, 'next')}
      style={{
        ...style,
        position: 'absolute',
        top: '50%',
        right: '0',
        display: 'none',
        background: 'red',
        zIndex: 9,
      }}
      onClick={onClick}
    />
  );
}
function BtnPrev({ className, style, onClick }) {
  return (
    <button
      className={cl(className, 'next')}
      style={{
        ...style,
        position: 'absolute',
        top: '50%',
        left: '0',
        display: 'none',
        background: 'red',
        zIndex: 9,
        borderRadius: '0 100px 100px 0',
        height: '60px',
        width: '30px',
      }}
      onClick={onClick}
    />
  );
}

function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState('');
  const [nav, setNav] = useState(null);
  const [showArrows, setShowArrows] = useState(false);

  console.log('id', id);

  useEffect(() => {
    const fechAPI = async () => {
      const a = await service.product.getProductById(id);
      console.log('p', a.data);
      setProduct(a.data);
    };
    fechAPI();
  }, [id]);

  // useEffect(() => {
  //   document.querySelector('.slick-active').style.border = '1px solid orange';
  // }, []);

  return (
    <>
      <div
      // style={{ height: '1000px' }}
      >
        <div className="container">
          <h1>hello</h1>
          <div
            className={cl('a')}
            //  onMouseOver={() => setShowArrows(true)} onMouseOut={() => setShowArrows(false)}
          >
            <Slider
              {...settings}
              ref={(s) => setNav(s)}
              asNavFor={nav}
              nextArrow={<BtnNext />}
              prevArrow={<BtnPrev />}
              // arrows={showArrows}
              className={cl('sl')}
              // appendDots={(dots) => <ul className="ccccc">{dots}</ul>}
              // customPaging={(i) => {
              //   return (
              //     <div style={{ marginRight: '5px', marginTop: '5px' }}>
              //       <img className={cl('img-thumnei')} src={product?.images[i]} width={40} height={40} alt="cc" />
              //     </div>
              //   );
              // }}
            >
              {product?.images &&
                product.images.map((v) => (
                  <div key={v}>
                    <img src={v} width={200} height={200} alt="cc" />
                  </div>
                ))}
            </Slider>
            <Slider asNavFor={nav} dots={false} ref={(s) => setNav(s)} slidesToShow={product?.images?.length}>
              {product?.images &&
                product.images.map((v) => (
                  <div key={v}>
                    <img src={v} width={40} height={40} alt="cc" />
                  </div>
                ))}
            </Slider>
          </div>
          <div style={{ height: '50px' }}></div>
        </div>
      </div>
    </>
  );
}
export default ProductDetail;

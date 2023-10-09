import classNames from 'classnames/bind';

import style from './SliderImage.module.scss';
import { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// const images = [
//   'http://localhost:8081/images/bg/bg1.png',
//   'http://localhost:8081/images/bg/bg2.png',
//   'http://localhost:8081/images/bg/bg3.png',
//   'http://localhost:8081/images/bg/bg4.png',
// ];

const cl = classNames.bind(style);

function SlideShow({ children, time }) {
  const images = useSelector((state) => state.info.slide);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(next, time);
    // console.log(currentSlide);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const next = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const prev = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleDotsClick = (i) => {
    setCurrentIndex(i);
    console.log(i);
  };

  return (
    <div className={cl('slider')}>
      <div className="container">{children}</div>
      <div className={cl('list')} style={{ left: `-${currentIndex * 100}%`, zIndex: '-11' }}>
        {images.map((v, i) => (
          <div className={cl('item')} key={i}>
            <img src={v} alt={v} width={document.body.clientWidth} />
          </div>
        ))}
      </div>
      <div className={cl('buttons')}>
        <button onClick={prev}>{'<'}</button>
        <button onClick={next}>{'>'}</button>
      </div>
      <ul className={cl('dots')}>
        {images.map((v, i) => (
          <li key={i} className={cl({ active: i === currentIndex })} onClick={() => handleDotsClick(i)}></li>
        ))}
      </ul>
    </div>
  );
}
export default memo(SlideShow);

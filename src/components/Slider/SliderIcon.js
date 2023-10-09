import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import classNames from 'classnames/bind';

import style from './SliderIcon.module.scss';
import { Link } from 'react-router-dom';
import { memo } from 'react';

const cl = classNames.bind(style);

function SliderIcon({ time = 3000, itemInRow = 10, items, className }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: itemInRow,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: itemInRow,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <Carousel responsive={responsive} autoPlay autoPlaySpeed={time} infinite className={cl({ [className]: className })}>
      {items.map((v, i) => (
        <Link key={i} to="/cc" className={cl('items')}>
          <span className={cl('icon')}>{v.icon}</span>
          <span>{v.name}</span>
        </Link>
      ))}
    </Carousel>
  );
}
export default memo(SliderIcon);

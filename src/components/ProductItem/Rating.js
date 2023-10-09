import { useState, useEffect, memo } from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import classNames from 'classnames/bind';
import style from './Ratting.module.scss';

const cl = classNames.bind(style);

function Rating({ index = 1, readOnly = false }) {
  const [currentIndex, setCurrentIndex] = useState(index);
  const [hover, setHover] = useState(undefined);

  const handleClick = (val) => {
    !readOnly && setCurrentIndex(val);
  };
  const handleMouseEnter = (val) => {
    !readOnly && setHover(val);
  };
  const handeleMouseLeave = () => {
    !readOnly && setHover(undefined);
  };

  useEffect(() => {
    setCurrentIndex(index);
  }, [index]);

  return (
    <ul className={cl('rating')}>
      {[...Array(5)].map((v, i) => {
        i += 1;
        return (
          <li
            key={i}
            className={cl('li', { on: i <= currentIndex || i <= hover })}
            onClick={() => handleClick(i)}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={() => handeleMouseLeave()}
          >
            {i <= currentIndex || i <= hover ? (
              <AiFillStar className={cl('icon')} />
            ) : (
              <AiOutlineStar className={cl('icon')} />
            )}
          </li>
        );
      })}
    </ul>
  );
}
export default memo(Rating);

import Tippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';
import { TiDelete } from 'react-icons/ti';
import { BiLoaderCircle, BiSearch } from 'react-icons/bi';

// import { Wrapper as WrapperPopper } from '~/components/Popper';
import style from './Search.module.scss';
// import Tippy from '@tippyjs/react/headless';
import Button from '~/components/Button';
// import { WrapperPopper } from '~/components/Popper';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '~/hooks';
import { searchProduct } from '~/services/productsService';
import { ProductItemSearch } from '~/components/ProductItem';
import WrapperPopper from '~/components/Popper/WrapperPopper';

const cl = classNames.bind(style);

function Search() {
  const [valueSearch, setValueSearch] = useState('');
  const [resultSearch, setResultSearch] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();

  const vl = useDebounce(valueSearch, 500);

  useEffect(() => {
    if (!vl.trim()) {
      setResultSearch([]);
      return;
    }

    const fecthAPI = async () => {
      setLoading(true);
      const a = await searchProduct(vl);
      setResultSearch(a);
      setLoading(false);
    };
    fecthAPI();
  }, [vl]);

  const handleChange = (e) => {
    const ttt = e.target.value;
    !ttt.startsWith(' ') && setValueSearch(ttt);
  };

  const handleClear = () => {
    setValueSearch('');
    setResultSearch([]);
    inputRef.current.focus();
  };

  return (
    <Tippy
      interactive
      visible={show && resultSearch.length > 0}
      placement="bottom"
      render={() => (
        <div className={cl('search-result')} tabIndex="-1">
          <WrapperPopper>
            <h4 className={cl('search-title')}>Product</h4>
            {resultSearch && resultSearch.map((result) => <ProductItemSearch key={result.id} data={result} />)}
          </WrapperPopper>
        </div>
      )}
      onClickOutside={() => setShow(false)}
    >
      <div className={cl('search')}>
        <button className={cl('search-btn')}>
          <BiSearch className={cl('icon')} />
        </button>
        <input
          ref={inputRef}
          type="text"
          value={valueSearch}
          spellCheck="false"
          placeholder="Bạn cần tìm gì?"
          onChange={handleChange}
          onFocus={() => setShow(true)}
        />
        {!loading && valueSearch && <TiDelete className={cl('icon', 'clear')} onClick={handleClear} />}
        {loading && <BiLoaderCircle className={cl('loading', 'icon')} />}
      </div>
    </Tippy>
  );
}
export default Search;

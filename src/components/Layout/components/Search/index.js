import classNames from 'classnames/bind';
import { useEffect, useState, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResults, setShowResults] = useState(true)
  const [loading, setLodaing] = useState(false)
  const inputRef = useRef();
  useEffect(() => {
    if(!searchValue) {
      return;
    }
    setLodaing(true)
   fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
   .then(response=>response.json())
   .then((res)=>{
     setSearchResult(res.data)
     setLodaing(false)
   })
   .catch((err)=> {
     setLodaing(false)
   })
  }, [searchValue]);

  const handleClear = ()=> {
    setSearchValue('');
    inputRef.current.focus();
  }

  const handleHideResults = ()=> {
    setShowResults(false)
  }

  return (
    <HeadlessTippy
      interactive="true"
      visible={showResults && (searchResult.length > 0) && searchValue!=''}
      placement="bottom"
      onClickOutside={handleHideResults}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <div className={cx('list-accounts-title')}>Accounts</div>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result}/>
            ))}
          </PopperWrapper>
        </div>
      )}
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          spellCheck={false}
          placeholder="Search accounts and vidieos"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          onFocus={e=>  {setShowResults(true)}}
          value={searchValue}
        ></input>
        {!!searchValue&& !loading &&<button
          onClick={handleClear}
          className={cx('clear')}
        >
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>}
        {loading&&<FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon>}
        <button className={cx('search-btn')}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;

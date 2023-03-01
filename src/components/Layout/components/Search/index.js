import classNames from 'classnames/bind';
import { useEffect, useState, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import * as searchServices from '~/apiServices/searchService';
import useDebounce from '~/hooks/useDebounce';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResults, setShowResults] = useState(true);
  const [loading, setLodaing] = useState(false);
  const inputRef = useRef();
  const debounce = useDebounce(searchValue, 500);
  useEffect(() => {
    if (!debounce) {
      setSearchResult([]);
      return;
    }
    
    const fetchApi = async() => {
      setLodaing(true);
      const result = await searchServices.search(debounce)
      if(result){
      setSearchResult(result);}
      setLodaing(false);
    }
    fetchApi()
  }, [debounce]);

  

  const handleClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  const handleHideResults = () => {
    setShowResults(false);
  };

  const handleChange = (e) => {
    const inputValue = e.target.value
    if(!inputValue.startsWith(' ')){
      setSearchValue(inputValue);
    }
  }

  return (
    <HeadlessTippy
      interactive="true"
      visible={showResults && searchResult.length > 0 && searchValue != ''}
      placement="bottom"
      onClickOutside={handleHideResults}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <div className={cx('list-accounts-title')}>Accounts</div>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
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
          onChange={handleChange}
          onFocus={(e) => {
            setShowResults(true);
          }}
          value={searchValue}
        ></input>
        {!!searchValue && !loading && (
          <button onClick={handleClear} className={cx('clear')}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {!!searchValue && loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon>}
        <button onMouseDown={e=> {e.preventDefault()}} className={cx('search-btn')}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;

import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faEarthAsia, faEllipsisVertical, faKeyboard, faMagnifyingGlass, faPlus, faSignIn } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import images from '~/acssets/images';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
    title: 'english'
  }, 
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
    title: 'Feedback and help',
    to: '/feedback'
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
    title: 'Keyboard shortcuts'

  }
]
function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {}, 3000);
  }, [searchResult]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo.default} alt="tiktok"></img>
        <Tippy
          interactive="true"
          visible={searchResult.length > 0}
          placement="bottom"
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <div className={cx('list-accounts-title')}>Accounts</div>
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Search accounts and vidieos"></input>
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon>
            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx('actions')}>
          <Button secondary to="/upload">
            <FontAwesomeIcon className={cx('plus-icon')} icon={faPlus} />
            Upload
          </Button>
          <Button
            onClick={() => {
              alert('clicked');
            }}
            primary
            className={cx('custom-btn')}
          >
            Log in
          </Button>
          <Menu items={MENU_ITEMS}>
            <span>
              <FontAwesomeIcon className={cx('menu-icon')} icon={faEllipsisVertical}></FontAwesomeIcon>
            </span>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Header;

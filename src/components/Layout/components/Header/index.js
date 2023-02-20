import classNames from 'classnames/bind';
import { Children, useEffect, useState } from 'react';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'tippy.js/dist/tippy.css';
import { faCamera, faCameraAlt, faCameraRetro, faCircleXmark, faCoins, faGear, faRightFromBracket, faSpinner, faUser, faVideo } from '@fortawesome/free-solid-svg-icons';
import {
  faCircleQuestion,
  faCloudUpload,
  faEarthAsia,
  faEllipsisVertical,
  faKeyboard,
  faMagnifyingGlass,
  faMessage,
  faPlus,
  faSignIn,
} from '@fortawesome/free-solid-svg-icons';

import images from '~/acssets/images';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { faViadeo } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
    title: 'english',
    children: [
      {
        type: 'languages',
        icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
        title: 'English',
        code: 'en',
      },
      {
        type: 'languages',
        icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
        title: 'Vietnamese',
        code: 'vi',
      },
    ],
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
    title: 'Keyboard shortcuts',
  },
];

const USER_MENU = [
  {
    icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
    title: 'View profile',
    to: '/profile',
  },
  {
    icon: <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>,
    title: 'Get Coins',
    to: '/coins',
  },
  {
    icon: <FontAwesomeIcon icon={faVideo}></FontAwesomeIcon>,
    title: 'LIVE Studio',
    to: '/live',
  },
  {
    icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
    title: 'Setting',
    to: '/setting',
  },
  ...MENU_ITEMS,
  {
    icon: <FontAwesomeIcon icon={faRightFromBracket}></FontAwesomeIcon>,
    title: 'Log out',
    saparate: true,
  },
];
function Header() {
  const currentUser = 'user1';
  const [searchResult, setSearchResult] = useState([]);
  const handleMenuChange = (item) => {
    switch (item.type) {
      case 'languages':
        console.log(`change language: ${item.title}`);
      default:
    }
  };
  useEffect(() => {
    setTimeout(() => {}, 3000);
  }, [searchResult]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo.default} alt="tiktok"></img>
        </div>
        <HeadlessTippy
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
        </HeadlessTippy>
        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <div className={cx('current-user')}>
                <Tippy content="Upload Vidieo" placement="bottom">
                  <button className={cx('action-btn')}>
                    <FontAwesomeIcon icon={faCloudUpload} />
                  </button>
                </Tippy>
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faMessage} />
                </button>
              </div>
            </>
          ) : (
            <>
              <Button secondary to="/upload" className={cx('upload-btn')}>
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
            </>
          )}
          <Menu items={currentUser ? USER_MENU : MENU_ITEMS} onChange={handleMenuChange}>
            <span>
              {currentUser ? (
                <img
                  className={cx('user-avatar')}
                  src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                ></img>
              ) : (
                <FontAwesomeIcon className={cx('menu-icon')} icon={faEllipsisVertical}></FontAwesomeIcon>
              )}
            </span>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Header;

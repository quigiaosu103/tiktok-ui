import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'tippy.js/dist/tippy.css';
import {
  faCoins,
  faGear,
  faRightFromBracket,
  faVideo,
  faCircleQuestion,
  faEarthAsia,
  faEllipsisVertical,
  faKeyboard,
  faPlus,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import config from '~/config/route';
import { Link } from 'react-router-dom';
import images from '~/acssets/images';
import styles from './Header.module.scss';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Images';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
    title: 'english',
    children: {
      title: 'Languages',
      data: [
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
    }
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
    title: 'Feedback and help',
    to: config.feedback,
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
    to: config.profile,
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

  const handleMenuChange = (item) => {
    switch (item.type) {
      case 'languages':
        console.log(`change language: ${item.title}`);
        break;
      default:
    }
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={config.home} className={cx('logo')}>
          <img src={images.logo.default} alt="tiktok"></img>
        </Link>
        <Search />
        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <div className={cx('current-user')}>
                <Tippy content="Upload Vidieo" placement="bottom">
                  <button className={cx('action-btn')}>
                    <UploadIcon />
                  </button>
                </Tippy>
                <Tippy content="Message" placement="bottom">
                  <button className={cx('action-btn')}>
                    <MessageIcon />
                  </button>
                </Tippy>

                <Tippy content="Inbox" placement="bottom">
                  <button className={cx('action-btn')}>
                    <InboxIcon />
                  </button>
                </Tippy>
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
                <Image
                  className={cx('user-avatar')}
                  src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                ></Image>
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

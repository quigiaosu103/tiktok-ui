import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import images from '~/acssets/images';

const cx = classNames.bind(styles);
function AccountItem() {
  return <div className={cx('wrapper')}>
      <img className={cx('avatar')} src='https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png'/>
      <div className={cx('info')}>
        <p className={cx('name')}>
            <span>fullstack.edu</span>
            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
        </p>
        <p className={cx('username')}>Fullstack</p>
      </div>
  </div>;
}

export default AccountItem;

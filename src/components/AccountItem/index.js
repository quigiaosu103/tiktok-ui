import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
  return <div className={cx('wrapper')}>
      <img className={cx('avatar')} src='https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/da85c35556182249ba493ff06307180f.jpeg?x-expires=1675310400&x-signature=AUq6oYllaAKavuCV52DKW4mrsk8%3D'/>
      <div className={cx('info')}>
        <p className={cx('name')}>
            <span>hansara.offical</span>
            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
        </p>
        <p className={cx('username')}>hansara</p>
      </div>
  </div>;
}

export default AccountItem;

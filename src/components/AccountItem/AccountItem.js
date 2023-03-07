import PropTypes from 'prop-types';
import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Images';

const cx = classNames.bind(styles);
function AccountItem({data}) {
  return <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
      <Image className={cx('avatar')} src={data.avatar}/>
      <div className={cx('info')}>
        <p className={cx('name')}>
            <span>{data.nickname}</span>
            {data.tick&&<FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>}
        </p>
        <p className={cx('username')}>{data.full_name}</p>
      </div>
  </Link>;
}

AccountItem.propTypes = {
  data: PropTypes.object
}

export default AccountItem;

import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import { render } from '@testing-library/react';


const cx = classNames.bind(styles);

function Menu({ children, items=[] }) {

    const renderItems = ()=>  {
        return items.map((item, index)=> (<MenuItem data={item} key={index}></MenuItem>)) 
    }
  return (
    <Tippy
      delay={[0,700]}

      interactive="true"
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('content')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-wrapper')}>
              {renderItems()}
          </PopperWrapper>
            
        </div>
      )}
    >
      <span>{children}</span>
    </Tippy>
  );
}

export default Menu;

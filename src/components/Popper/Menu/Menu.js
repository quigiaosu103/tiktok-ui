import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);
const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick=false, onChange = defaultFn }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          data={item}
          key={index}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...history, item.children ]);
            } else {
              onChange(item);
            }
          }}
        ></MenuItem>
      );
    });
  };

  const handleBack = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  }
  const handleResetHistory = ()=>{
    setHistory(prev => prev.slice(0,1))
  }
  
  return (
    <Tippy
    offset={[12, 10]}
      delay={[0, 700]}
      hideOnClick={hideOnClick}
      interactive="true"
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('content')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-wrapper')}>
            {history.length > 1 && (
              <Header
                title={current.title}
                onBack={handleBack}
              />
            )}
            <div className={cx('body-popper')}>{renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
      onHide={handleResetHistory}
    >
      <span>{children}</span>
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.func,
  onChange: PropTypes.func,
}
export default Menu;

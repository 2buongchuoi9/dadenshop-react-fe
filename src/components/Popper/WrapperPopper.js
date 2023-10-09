import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cl = classNames.bind(styles);

function WrapperPopper({ children, className }) {
  return <div className={cl('wrapper', className)}>{children}</div>;
}

WrapperPopper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default WrapperPopper;

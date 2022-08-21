import PropTypes from 'prop-types';
const Link = ({ title }) => {
  return <div>{title}</div>;
};

export default Link;
Link.propTypes = {
  title: PropTypes.string
};
Link.defaultProps = {
  title: 'url'
};

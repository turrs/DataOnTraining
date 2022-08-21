import PropTypes from 'prop-types';
import { Switch } from 'antd';
const Toggle = ({ label, style, dataTestId }) => {
  return (
    <div data-testid={dataTestId}>
      {label && <p className="label">{label}</p>}
      <Switch style={style} />
    </div>
  );
};

export default Toggle;

Toggle.propTypes = {
  label: PropTypes.string.isRequired,
  style: PropTypes.string,
  dataTestId: PropTypes.string
};

Toggle.defaultProps = {
  label: 'Label'
};

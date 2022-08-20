import { Button } from 'antd';
import PropTypes from 'prop-types';
const ButtonIcon = ({ textButton, style, icon, onClick, type, dataTestId }) => {
  return (
    <Button data-testid={dataTestId} icon={icon} style={style} type={type} onClick={onClick}>
      {textButton}
    </Button>
  );
};

export default ButtonIcon;

ButtonIcon.propTypes = {
  textButton: PropTypes.string.isRequired,
  style: PropTypes.object,
  icon: PropTypes.object,
  onClick: PropTypes.object,
  type: PropTypes.string,
  dataTestId: PropTypes.string
};

ButtonIcon.defaultProps = {
  textButton: 'Submit'
};

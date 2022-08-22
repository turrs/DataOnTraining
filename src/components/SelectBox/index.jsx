import { Select } from 'antd';
import PropTypes from 'prop-types';
import './index.css';
const SelectBox = ({ type, style, onChange, value, defaultValue, dataTestId }) => {
  //   const { Option } = Select;
  const label = {
    event: 'Event Type',
    status: 'Status'
  };

  return (
    <div>
      <p className="label">{type === 'status' ? label.status : label.event}</p>
      <div>
        <Select
          onChange={onChange}
          optionFilterProp="children"
          style={style}
          value={value}
          defaultValue={defaultValue}
          placeholder={type === 'status' ? `Select ${label.status}` : `Select ${label.event}`}
          data-testid={dataTestId}>
          {type === 'status' ? (
            <>
              <Select.Option value="true">
                <p>Finish</p>
              </Select.Option>
              <Select.Option value="false">
                <p>OnGoing</p>
              </Select.Option>
            </>
          ) : (
            <>
              <Select.Option name="online" value="true">
                <p>Online</p>
              </Select.Option>
              <Select.Option name="offline" value="false">
                <p>Offline</p>
              </Select.Option>
            </>
          )}
        </Select>
      </div>
    </div>
  );
};

export default SelectBox;
SelectBox.propTypes = {
  type: PropTypes.string.isRequired,
  style: PropTypes.object,
  onChange: PropTypes.func,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  dataTestId: PropTypes.string
};

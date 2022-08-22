import { UploadOutlined } from '@ant-design/icons';
import { Form, Input, Button, Radio, Select, DatePicker, Upload, Row, Col } from 'antd';
const { RangePicker } = DatePicker;
const { Option, OptGroup } = Select;
const FormTrainingEvent = () => {
  const rangeConfig = {
    rules: [
      {
        type: 'array',
        required: true,
        message: 'Please select time!'
      }
    ]
  };
  return (
    <div className="bg-card rounded-[10px] p-5 m-5">
      <Form
        labelCol={{
          span: 7
        }}
        wrapperCol={{
          span: 13
        }}
        layout="horizontal">
        <Form.Item
          name="isOnlineClass"
          label="Event Type:"
          rules={[
            {
              required: true
            }
          ]}>
          <Select placeholder="Select Event Type" optionFilterProp="children" allowClear>
            <OptGroup label="Type">
              <Option value={true}>Online Class</Option>
              <Option value={false}>Offline Class</Option>
            </OptGroup>
          </Select>
        </Form.Item>
        <Form.Item
          name="eventName"
          label="Event Name"
          rules={[
            {
              required: true
            }
          ]}>
          <Input placeholder="Input Event Name" />
        </Form.Item>

        <Form.Item
          name="event-thumbnail"
          label="Event Thumbnail"
          valuePropName="fileList"
          extra="Recommended image resolution is 500x300 (5:3 aspect ratio, max. 2MB, jpg/jpeg)"
          rules={[
            {
              required: true
            }
          ]}>
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          name="date"
          label="Date"
          {...rangeConfig}
          rules={[
            {
              required: true
            }
          ]}>
          <RangePicker />
        </Form.Item>
        <Form.Item
          name="status"
          label="Status"
          rules={[
            {
              required: true,
              message: 'Please pick an item!'
            }
          ]}>
          <Radio.Group>
            <Radio.Button value={true}>Open for Registration</Radio.Button>
            <Radio.Button value={false}>Closed Registration</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="trainer"
          label="Trainer Name"
          rules={[
            {
              required: true
            }
          ]}>
          <Input placeholder="Input Trainer Name" />
        </Form.Item>

        <Form.Item label="Location based Latitude and Longitude">
          <Form.Item
            name="latitude"
            rules={[
              {
                required: true
              }
            ]}>
            <Input name="latitude" placeholder="latitude" />
          </Form.Item>
          <Form.Item
            name="longitude"
            rules={[
              {
                required: true
              }
            ]}>
            <Input placeholder="longitude" />
          </Form.Item>
        </Form.Item>

        <Form.Item
          name="additionalInfo"
          label="Infromation"
          rules={[
            {
              required: true
            }
          ]}>
          <Input placeholder="Input Information Event" />
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormTrainingEvent;

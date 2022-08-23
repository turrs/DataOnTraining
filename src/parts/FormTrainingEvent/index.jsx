import { UploadOutlined } from '@ant-design/icons';
import { Form, Input, Button, Radio, Select, DatePicker, Upload, Row, Col } from 'antd';
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TransferData } from '../../Components';
import { AppContext } from '../../Context';
import moment from 'moment';
import PropTypes from 'prop-types';
const { RangePicker } = DatePicker;
const { Option, OptGroup } = Select;
const FormTrainingEvent = ({ dataEdit, params }) => {
  const [form] = Form.useForm();
  const { CreateDataTraining } = useContext(AppContext);
  const [componentSize, setComponentSize] = useState('default');
  const [data, setData] = useState({
    eventName: '',
    startDate: '',
    endDate: '',
    image: '',
    trainer: '',
    location: '',
    ratings: '',
    isOnlineClass: '',
    additionalInfo: '',
    isComplete: '',
    date: ''
  });
  form.setFieldsValue({
    eventName: data.eventName,
    date: [moment(data.startDate), moment(data.endDate)],
    image: data.image,
    isOnlineClass: data.isOnlineClass,
    location: data.location,
    trainer: data.trainer,
    ratings: data.ratings,
    additionalInfo: data.additionalInfo
  });

  useEffect(() => {
    if (params) {
      setData(dataEdit);
    }
  }, [dataEdit]);
  const navigate = useNavigate();

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const rangeConfig = {
    rules: [
      {
        type: 'array',
        required: true,
        message: 'Please select time!'
      }
    ]
  };
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }

    return e?.fileList;
  };
  const onFinish = (values) => {
    try {
      const starDate = values.date[0].format('YYYY-MM-DD');
      const endDate = values.date[1].format('YYYY-MM-DD');
      const data = {
        eventName: values.eventName,
        isOnlineClass: values.isOnlineClass,
        startDate: starDate,
        // eslint-disable-next-line object-shorthand
        endDate: endDate,
        location: { lat: values.latitude, long: values.longitude },
        isComplete: values.status,
        trainer: values.trainer,
        additionalInfo: values.additionalInfo
      };
      CreateDataTraining(data);
      form.resetFields();
      navigate('/dashboard');
    } catch (err) {
      alert(err);
      console.log('ni erorrr', err);
    }
  };
  return (
    <div className="bg-card rounded-[10px] p-5 m-5">
      <Form
        onFinish={onFinish}
        labelCol={{
          span: 7
        }}
        wrapperCol={{
          span: 13
        }}
        initialValues={{
          size: componentSize
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        form={params ? form : form.resetFields()}
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
          getValueFromEvent={normFile}
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
        <Form.Item name="employe" label="Employe">
          <div className="max-w-[500px]">
            <TransferData />
          </div>
        </Form.Item>

        <div className="grow-1">
          <Row>
            <Col
              span={24}
              style={{
                textAlign: 'right',
                padding: 20,
                borderTop: '1px #dddddd solid'
              }}>
              <Button type="primary" htmlType="submit" style={{ borderRadius: 5, width: 100 }}>
                Submit
              </Button>
            </Col>
          </Row>
        </div>
      </Form>
    </div>
  );
};

export default FormTrainingEvent;

FormTrainingEvent.propTypes = {
  dataEdit: PropTypes.object,
  params: PropTypes.string
};

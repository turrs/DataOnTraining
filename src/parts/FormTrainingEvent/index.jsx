import { UploadOutlined } from '@ant-design/icons';
import { Form, Input, Button, Radio, Select, DatePicker, Upload, Row, Col } from 'antd';
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TransferData } from '../../Components';
import { AppContext } from '../../Context';
import moment from 'moment';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
const { RangePicker } = DatePicker;
const { Option, OptGroup } = Select;
const FormTrainingEvent = ({ dataEdit, path, params, id }) => {
  const { t } = useTranslation(['content']);
  const [form] = Form.useForm();
  const { CreateDataTraining, EditDataTraining } = useContext(AppContext);
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
        message: t('trainingCreateEditDetail.messageDate')
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
  const onUpdate = (values, path, params, id) => {
    console.log(values);
    try {
      const starDate = values.date[0].format('YYYY-MM-DD');
      const endDate = values.date[1].format('YYYY-MM-DD');
      const dataEdit = {
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
      console.log(123321, dataEdit);
      EditDataTraining(dataEdit, path, params, id);
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
        onFinish={params ? (values) => onUpdate(values, path, params, id) : onFinish}
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
          label={t('trainingCreateEditDetail.eventType.label')}
          rules={[
            {
              required: true
            }
          ]}>
          <Select
            placeholder={t('trainingCreateEditDetail.eventType.placeholder')}
            optionFilterProp="children"
            allowClear>
            <OptGroup label="Type">
              <Option value={true}>{t('trainingCreateEditDetail.eventType.option1')}</Option>
              <Option value={false}>{t('trainingCreateEditDetail.eventType.option2')}</Option>
            </OptGroup>
          </Select>
        </Form.Item>
        <Form.Item
          name="eventName"
          label={t('trainingCreateEditDetail.eventName.label')}
          rules={[
            {
              required: true
            }
          ]}>
          <Input placeholder="Input Event Name" />
        </Form.Item>

        <Form.Item
          name="event-thumbnail"
          label={t('trainingCreateEditDetail.eventThumbnail.label')}
          valuePropName="fileList"
          getValueFromEvent={normFile}
          extra={t('trainingCreateEditDetail.eventThumbnail.extra')}
          rules={[
            {
              required: true
            }
          ]}>
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>
              {t('trainingCreateEditDetail.eventThumbnail.button')}
            </Button>
          </Upload>
        </Form.Item>
        <Form.Item
          name="date"
          label={t('trainingCreateEditDetail.date')}
          {...rangeConfig}
          rules={[
            {
              required: true
            }
          ]}>
          <RangePicker
            showTime={{
              format: 'HH:mm'
            }}
          />
        </Form.Item>
        <Form.Item
          name="status"
          label={t('trainingCreateEditDetail.status.label')}
          rules={[
            {
              required: true,
              message: t('trainingCreateEditDetail.status.message')
            }
          ]}>
          <Radio.Group>
            <Radio.Button value={true}> {t('trainingCreateEditDetail.status.radio1')}</Radio.Button>
            <Radio.Button value={false}>{t('trainingCreateEditDetail.status.radio2')}</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="trainer"
          label={t('trainingCreateEditDetail.trainer.label')}
          rules={[
            {
              required: true
            }
          ]}>
          <Input placeholder={t('trainingCreateEditDetail.trainer.placeholder')} />
        </Form.Item>

        <Form.Item label={t('trainingCreateEditDetail.location')}>
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
          label={t('trainingCreateEditDetail.information.label')}
          rules={[
            {
              required: true
            }
          ]}>
          <Input placeholder={t('trainingCreateEditDetail.information.placeholder')} />
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
                {t('trainingCreateEditDetail.button.submit')}
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
  params: PropTypes.string,
  id: PropTypes.string,
  path: PropTypes.string
};

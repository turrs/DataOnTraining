import { useState, useEffect } from 'react';
import { Rate, Image, Card, Col, Row, Button, Space, Typography, Modal } from 'antd';
import { EnvironmentOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import { Axios } from '../../Utils';
import { useTranslation } from 'react-i18next';

const { Text } = Typography;

const MyTrainingCard = ({ item, id }) => {
  const { t } = useTranslation(['content']);
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  // convert rate to range 1-5 not 0-100
  const [rate, setRate] = useState(item.ratings / 20);

  const openLocation = () => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${item.location.lat},${item.location.lng}`,
      '_blank'
    );
  };

  const showDetail = () => {
    navigate(`/mytraining/${item.id}`, { state: item });
  };

  const showModal = () => {
    setVisible(true);
  };
  const onChangeRatings = (value) => {
    setRate(value);
  };

  const handleOk = async () => {
    item.ratings = rate;
    const updateRatings = {
      ...item,
      ratings: item.ratings
    };

    const response = await Axios.put(`/users/1/trainings/${id}`, updateRatings);

    if (response.status === 200) {
      console.log('Ratings Updated Successfully');
    }

    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      // action update rate
      setRate(item.ratings);
      // convert rate to range 0 - 100 not 1-5 before update
      setConfirmLoading(false);
    }, 2000);
  };

  // rate will update on modal if value ratings update on db
  useEffect(() => {
    setRate(item.ratings);
  }, [item.ratings]);

  const handleCancel = () => {
    setRate(item.ratings);
    setVisible(false);
  };

  return (
    <Card
      key={id}
      style={{
        maxWidth: 400,
        borderRadius: 10,
        margin: '0px auto'
      }}
      bodyStyle={{ padding: '0' }}
      hoverable>
      <Row className="row-top">
        <Col>
          <Image
            alt="example"
            src={item.thumbnail}
            width={100}
            height={140}
            style={{
              borderRadius: '10px 0px 0px 0px',
              backgroundRepeat: 'no-repeat',
              objectFit: 'cover'
            }}
          />
        </Col>
        <Col onClick={showDetail} className="row-top-detail">
          <Space direction="vertical" size={3} style={{ display: 'flex' }}>
            <Text style={{ fontSize: '11px' }}>
              <EnvironmentOutlined /> {item.trainer}
            </Text>
            <Text style={{ fontSize: '16px' }} strong>
              {item.eventName}
            </Text>
            <Text type="secondary">{item.startDate}</Text>
            <Text type="secondary" style={{ fontSize: '11px' }}>
              <UserOutlined /> {item.trainer}
            </Text>
          </Space>
        </Col>
      </Row>
      <Row className="row-bottom" justify="space-between">
        <Col>
          {item.isComplete ? (
            <p className="row-bottom-detail"> {t('mytrainingCard.isComplete.part1')}</p>
          ) : (
            <p className="row-bottom-detail">{t('mytrainingCard.isComplete.part2')}</p>
          )}
        </Col>
        <Col>
          {item.isComplete ? (
            <Button type="primary" size="small" style={{ fontSize: 12 }} onClick={showModal}>
              {t('mytrainingCard.button.part1')}
            </Button>
          ) : (
            <Button
              type="primary"
              size="small"
              style={{ fontSize: 12 }}
              onClick={openLocation}
              icon={<EnvironmentOutlined />}>
              {t('mytrainingCard.button.part2')}
            </Button>
          )}
          <Modal
            title={t('mytrainingCard.modal')}
            visible={visible}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            className="modal">
            <Space direction="vertical" size={3} style={{ display: 'flex' }}>
              <Text strong>{item.eventName}</Text>
              <Text type="secondary">{item.trainer}</Text>
              <Text type="secondary" style={{ fontSize: '11px' }}>
                <UserOutlined /> {item.trainer}
              </Text>
              <div className="rating">
                <Rate
                  defaultValue={item.ratings}
                  value={rate}
                  onChange={(value) => onChangeRatings(value)}></Rate>
              </div>
            </Space>
          </Modal>
        </Col>
      </Row>
    </Card>
  );
};
export default MyTrainingCard;
MyTrainingCard.propTypes = {
  url: PropTypes.string,
  item: PropTypes.object,
  id: PropTypes.string
};

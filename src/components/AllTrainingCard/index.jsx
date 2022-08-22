import { useNavigate } from 'react-router-dom';
import { EnvironmentOutlined, StarFilled, UserOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row, Space, Tooltip, Typography } from 'antd';
import './index.css';
import PropTypes from 'prop-types';
const { Text } = Typography;

const AllTrainingCard = ({ data }) => {
  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`/training/${data.id}`, { state: data });
  };
  return (
    <Tooltip
      placement="right"
      title={data.eventName}
      color="white"
      overlayInnerStyle={{
        borderRadius: 10,
        width: 400,
        padding: 15
      }}
      overlay={
        <div className="tooltip-card">
          <h2>{data.eventName}</h2>
          <div className="tooltip-star">
            <StarFilled /> Recommended Training
          </div>

          <Row justify="center" style={{ marginTop: '20px' }}>
            <Col align="center">
              <Button size="large" className="tooltip-btn">
                <p>You`ve joined the class</p>
              </Button>
            </Col>
          </Row>
          <Row justify="center" style={{ marginTop: '20px' }}>
            <Col>
              <Button className="tooltip-btn-other">
                <p>Invite Others</p>
              </Button>
            </Col>
          </Row>
        </div>
      }>
      <Card
        onClick={showDetail}
        key={data.id}
        style={{
          maxWidth: 400,
          height: 350,
          borderRadius: 10,
          margin: '0px auto'
        }}
        cover={
          <img alt="example" src={data?.thumbnail} style={{ borderRadius: '10px 10px 0px 0px' }} />
        }
        hoverable>
        <Row justify="space-between">
          <Col>
            <Space direction="vertical" size={1} style={{ display: 'flex' }}>
              <Text style={{ fontSize: '11px' }}>
                <EnvironmentOutlined /> {data?.trainer}
              </Text>
              <Text style={{ fontSize: '12px' }} strong>
                {data?.eventName}
              </Text>
            </Space>
          </Col>
        </Row>
        <Row justify="space-between">
          <Col>
            <Space
              direction="vertical"
              size={1}
              style={{
                display: 'flex',
                paddingTop: 20
              }}>
              <Text type="secondary">{data?.startDate}</Text>
              <Text type="secondary" style={{ fontSize: '11px' }}>
                <UserOutlined /> {data?.trainer}
              </Text>
            </Space>
          </Col>
        </Row>
      </Card>
    </Tooltip>
  );
};

export default AllTrainingCard;
AllTrainingCard.propTypes = {
  data: PropTypes.object
};

import PropTypes from 'prop-types';
import { useEffect, useContext } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { ButtonIcon, SectionHeader } from '../../Components';
import { AppContext } from '../../Context';
import { Typography, Image, Avatar, Space, Card, Row, Col } from 'antd';
import {
  CalendarOutlined,
  InfoCircleOutlined,
  SolutionOutlined,
  UserOutlined,
  PlusOutlined
} from '@ant-design/icons';
import { UseCheckMobile } from '../../Utils';
const DetailEvent = () => {
  const { Title, Text } = Typography;
  const { GetDetailDataMyTraining, dataDetail } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const id = JSON.parse(localStorage.getItem('id'));
  useEffect(() => {
    GetDetailDataMyTraining(params.id, id);
  }, [location, params]);

  const mobile = UseCheckMobile();
  console.log(12345, navigate);
  console.log(123456, location);
  console.log(1234567, params.id);
  console.log(dataDetail);
  return (
    <div>
      <SectionHeader />
      <div className="bg-card rounded-[10px] p-5 m-5">
        <div className="pl-5 pr-5">
          <Title strong level={2}>
            {location.state.eventName}
          </Title>
        </div>
        <div className="pl-5 pr-5">
          <Title strong level={4} type="secondary">
            Footbal Course
          </Title>
        </div>
        <div className="flex flex-row flex-wrap">
          <div className="basis-1/3 grow-1">
            <div className="p-5">
              <Image
                style={{
                  width: mobile ? 400 : 600,
                  paddingLeft: 0,
                  marginBottom: 20,
                  marginTop: 20,
                  paddingRight: 0,
                  borderRadius: '20px',
                  height: 300
                }}
                src={location.state.thumbnail}
              />
            </div>
            <div className="p-5">
              <div className="shadow rounded-[20px] grow-1">
                <div className="p-5">
                  <ButtonIcon
                    textButton="Join Class"
                    style={{ borderRadius: 5, width: '100%' }}
                    type={'primary'}
                  />
                </div>
                <div className="flex flex-row  pt-1 pb-5 pl-5 pr-5">
                  <div className="basis-1/2 flex flex-row">
                    <Text className="textJoined" strong>
                      Joined Team
                    </Text>
                    <div className="pl-2">
                      <Avatar
                        className="avatar"
                        src={
                          <Image
                            style={{
                              width: 32,
                              height: 32
                            }}
                            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                          />
                        }></Avatar>
                      <Avatar
                        className="avatar"
                        src={
                          <Image
                            style={{
                              width: 32,
                              height: 32
                            }}
                            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                          />
                        }></Avatar>
                    </div>
                  </div>
                  <div className="flex basis-1/2 justify-end">
                    <div>
                      <PlusOutlined
                        style={{
                          color: '#cccccc',
                          paddingTop: '5px'
                        }}></PlusOutlined>
                      <Text className="textInvite" strong type="secondary">
                        Invite Others
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/2 flex">
            <div className="p-10">
              <div className="p-10">
                <Text style={{ fontSize: '20px', fontWeight: 700 }}>
                  <SolutionOutlined /> Overview
                </Text>
              </div>
              <div className="pl-10 pr-10 pb-10 flex flex-row">
                <div className="grow-1">
                  <Text style={{ fontSize: '16px', fontWeight: 700 }}>
                    <CalendarOutlined /> {location.state.startDate}
                    <InfoCircleOutlined style={{ marginLeft: 20, marginRight: 5 }} />
                    {location.state.isOnlineClass === true ? 'Online Class' : 'Offline Class'}
                    <UserOutlined style={{ marginLeft: 20 }} /> 2 / 5 Person
                  </Text>
                  <Text
                    style={{
                      fontSize: '16px',
                      fontWeight: 700
                    }}>
                    Instructor
                  </Text>
                </div>
              </div>
              <div>
                <Card
                  bodyStyle={{ padding: 0 }}
                  style={{
                    borderRadius: 10,
                    width: '100%',
                    marginTop: 20
                  }}>
                  <Row>
                    <Col
                      style={{
                        padding: 10,
                        borderBottom: '#cccccc solid 1px',
                        width: '100%',
                        backgroundColor: '#399af5',
                        borderRadius: '10px 10px 0 0',
                        color: 'white',
                        fontWeight: 700
                      }}>
                      Resources
                    </Col>
                  </Row>
                  <Space direction="vertical" size={6} style={{ display: 'flex', padding: 10 }}>
                    <Text style={{ fontSize: '16px', fontWeight: 700 }}>
                      <SolutionOutlined style={{ marginRight: 5 }} />
                      {location.state.isOnlineClass === true ? 'Online Class ' : 'Offline Class '}
                      Detail
                    </Text>
                    <Text
                      style={{
                        fontSize: '14px',
                        fontWeight: 700
                      }}>
                      Event Number
                    </Text>
                    <Text
                      style={{
                        fontSize: '14px',
                        color: '#8e8e8e'
                      }}>
                      TREV-YYMM-XXXX
                    </Text>
                    <Text style={{ fontSize: '14px', fontWeight: 700 }}>Date</Text>
                    <Text
                      style={{
                        fontSize: '14px',
                        color: '#8e8e8e'
                      }}>
                      {location.state.startDate}
                    </Text>
                    <Text style={{ fontSize: '14px', fontWeight: 700 }}>Location</Text>
                    <Text
                      style={{
                        fontSize: '14px',
                        color: '#8e8e8e'
                      }}>
                      {location.state.trainer}
                    </Text>
                    <Text style={{ fontSize: '14px', fontWeight: 700 }}>Status</Text>
                    <Text
                      style={{
                        fontSize: '14px',
                        color: '#8e8e8e'
                      }}>
                      {location.state.isComplete === true
                        ? 'Close Registration'
                        : 'Open for Registration'}
                    </Text>
                    <Text style={{ fontSize: '14px', fontWeight: 700 }}>End Date</Text>
                    <Text
                      style={{
                        fontSize: '14px',
                        color: '#8e8e8e'
                      }}>
                      {location.state.endDate}
                    </Text>
                    <Text style={{ fontSize: '14px', fontWeight: 700 }}>Trainer</Text>
                    <Text
                      style={{
                        fontSize: '14px',
                        color: '#8e8e8e'
                      }}>
                      {location.state.trainer}
                    </Text>
                  </Space>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailEvent;
DetailEvent.propTypes = {
  data: PropTypes.object
};

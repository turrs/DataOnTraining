import PropTypes from 'prop-types';
import { useEffect, useContext } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { ButtonIcon, SectionHeader } from '../../components';
import { AppContext } from '../../context';
import { Typography, Image, Avatar, Space, Card, Row, Col } from 'antd';
import {
  CalendarOutlined,
  InfoCircleOutlined,
  SolutionOutlined,
  UserOutlined,
  PlusOutlined
} from '@ant-design/icons';
import { UseCheckMobile } from '../../utils';
import { useTranslation } from 'react-i18next';
const DetailEvent = () => {
  const { t } = useTranslation(['content']);
  const { Title, Text } = Typography;
  const { GetDetailDataTraining, dataDetail } = useContext(AppContext);
  const params = useParams();
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);
  const path = pathSnippets[0];
  const id = JSON.parse(localStorage.getItem('id'));
  useEffect(() => {
    if (path === 'mytraining') {
      GetDetailDataTraining(path, params.id, id);
    }
    if (path === 'training') {
      GetDetailDataTraining(path, params.id, id);
    }
  }, [params, location]);
  const user = JSON.parse(localStorage.getItem('user-info'));
  const mobile = UseCheckMobile();
  return (
    <div>
      <SectionHeader viewButton={false} user={user} editButton />
      <div className="bg-card rounded-[10px] p-5 m-5">
        <div className="pl-5 pr-5">
          <Title strong level={2}>
            {dataDetail.eventName}
          </Title>
        </div>
        <div className="pl-5 pr-5">
          <Title strong level={4} type="secondary">
            {t('trainingCreateEditDetail.subTitle')}
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
                src={dataDetail.thumbnail}
              />
            </div>
            <div className="p-5">
              <div className="shadow rounded-[20px] grow-1">
                <div className="p-5">
                  <ButtonIcon
                    textButton={t('trainingCreateEditDetail.button.join')}
                    style={{ borderRadius: 5, width: '100%' }}
                    type={'primary'}
                  />
                </div>
                <div className="flex flex-row  pt-1 pb-5 pl-5 pr-5">
                  <div className="basis-1/2 flex flex-row">
                    <Text className="textJoined" strong>
                      {t('trainingCreateEditDetail.joinedTeam')}
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
                        {t('trainingCreateEditDetail.button.invite')}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/2">
            <div className="p-10 grow-1">
              <div className="p-10">
                <Text style={{ fontSize: '20px', fontWeight: 700 }}>
                  <SolutionOutlined /> {t('trainingCreateEditDetail.overview')}
                </Text>
              </div>
              <div className="pl-10 pr-10 pb-10 flex flex-row">
                <div className="grow-1">
                  <Text style={{ fontSize: '16px', fontWeight: 700 }}>
                    <CalendarOutlined /> {dataDetail.startDate}
                    <InfoCircleOutlined style={{ marginLeft: 20, marginRight: 5 }} />
                    {dataDetail.isOnlineClass === true
                      ? t('trainingCreateEditDetail.eventType.option1')
                      : t('trainingCreateEditDetail.eventType.option2')}
                    <UserOutlined style={{ marginLeft: 20 }} /> 2 / 5
                    {t('trainingCreateEditDetail.person')}
                  </Text>
                  <Text
                    style={{
                      fontSize: '16px',
                      fontWeight: 700
                    }}>
                    {t('trainingCreateEditDetail.instructor')}
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
                      {t('trainingCreateEditDetail.resources')}
                    </Col>
                  </Row>
                  <Space direction="vertical" size={6} style={{ display: 'flex', padding: 10 }}>
                    <Text style={{ fontSize: '16px', fontWeight: 700 }}>
                      <SolutionOutlined style={{ marginRight: 5 }} />
                      {dataDetail.isOnlineClass === true
                        ? t('trainingCreateEditDetail.eventType.option1')
                        : t('trainingCreateEditDetail.eventType.option2')}
                      Detail
                    </Text>
                    <Text
                      style={{
                        fontSize: '14px',
                        fontWeight: 700
                      }}>
                      {t('trainingCreateEditDetail.number')}
                    </Text>
                    <Text
                      style={{
                        fontSize: '14px',
                        color: '#8e8e8e'
                      }}>
                      TREV-YYMM-XXXX
                    </Text>
                    <Text style={{ fontSize: '14px', fontWeight: 700 }}>
                      {t('trainingCreateEditDetail.date')}
                    </Text>
                    <Text
                      style={{
                        fontSize: '14px',
                        color: '#8e8e8e'
                      }}>
                      {dataDetail.startDate}
                    </Text>
                    <Text style={{ fontSize: '14px', fontWeight: 700 }}>
                      {t('trainingCreateEditDetail.location')}
                    </Text>
                    <Text
                      style={{
                        fontSize: '14px',
                        color: '#8e8e8e'
                      }}>
                      {dataDetail.trainer}
                    </Text>
                    <Text style={{ fontSize: '14px', fontWeight: 700 }}>
                      {t('trainingCreateEditDetail.status.label')}
                    </Text>
                    <Text
                      style={{
                        fontSize: '14px',
                        color: '#8e8e8e'
                      }}>
                      {dataDetail.isComplete === true
                        ? t('trainingCreateEditDetail.status.radio2')
                        : t('trainingCreateEditDetail.status.radio1')}
                    </Text>
                    <Text style={{ fontSize: '14px', fontWeight: 700 }}>
                      {t('trainingCreateEditDetail.endDate')}
                    </Text>
                    <Text
                      style={{
                        fontSize: '14px',
                        color: '#8e8e8e'
                      }}>
                      {dataDetail.endDate}
                    </Text>
                    <Text style={{ fontSize: '14px', fontWeight: 700 }}>
                      {t('trainingCreateEditDetail.trainer.label')}
                    </Text>
                    <Text
                      style={{
                        fontSize: '14px',
                        color: '#8e8e8e'
                      }}>
                      {dataDetail.trainer}
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

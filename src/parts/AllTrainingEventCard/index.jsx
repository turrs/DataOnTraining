import { Badge, Col, Row, List } from 'antd';
import './index.css';
import PropTypes from 'prop-types';
import { AllTrainingCard } from '../../Components';
import { useTranslation } from 'react-i18next';

const AllTrainingEventCard = ({ item }) => {
  const { t } = useTranslation(['dashboard']);
  return (
    <>
      <div className="bg-card rounded-[10px] p-5 m-5">
        <div className="title-event">
          <p>
            {t('allTrainingEvent')}
            <Badge
              style={{
                marginLeft: 5,
                backgroundColor: '#e7e7e7',
                color: '#2db7f5',
                fontWeight: 'bold'
              }}
              count={item.data.length}
            />
          </p>
        </div>
        <List
          grid={{
            gutter: 8,
            xs: 2,
            sm: 2,
            md: 3,
            lg: 4,
            xl: 5
          }}
          dataSource={item.data}
          renderItem={(item) => (
            <List.Item>
              <Row justify="space-between">
                <Col>
                  <AllTrainingCard data={item} />
                </Col>
              </Row>
            </List.Item>
          )}
        />
      </div>
    </>
  );
};

export default AllTrainingEventCard;
AllTrainingEventCard.propTypes = {
  item: PropTypes.object
};

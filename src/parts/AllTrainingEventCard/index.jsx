import { Badge, Col, Row, List } from 'antd';
import './index.css';
import PropTypes from 'prop-types';
import { AllTrainingCard } from '../../Components';
import { useTranslation } from 'react-i18next';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../Context';
const AllTrainingEventCard = ({ value }) => {
  const { valueInputSearching } = useContext(AppContext);
  const { t } = useTranslation(['dashboard']);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const loadMoreData = (page, valueInputSearching) => {
    setPage(page + 1);
    if (loading) {
      return;
    }
    setLoading(true);
    fetch(
      `https://62e11276fa99731d75cd2606.mockapi.io/api/v2/trainings?search=${valueInputSearching}&page=${page}&limit=5`
    )
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.data]);

        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  // useEffect(() => {
  //   loadMoreData(page);
  // }, []);
  useEffect(() => {
    setPage(1);
    setData('');
    loadMoreData(page, valueInputSearching);
  }, [valueInputSearching]);
  // useEffect(() => {
  //   GetDataSelectEventType(eventType, id);
  // }, [eventType]);
  // useEffect(() => {
  //   GetDataSelectEventStatus(eventStatus, id);
  // }, [eventStatus]);
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
              count={data.length}
            />
          </p>
        </div>
        <InfiniteScroll
          dataLength={data.length}
          next={() => loadMoreData(page, valueInputSearching)}
          hasMore={data.length < 500}
          loader={<h4 style={{ textAlign: 'center' }}>Loading...</h4>}>
          <List
            grid={{
              gutter: 8,
              xs: 2,
              sm: 2,
              md: 3,
              lg: 4,
              xl: 5
            }}
            dataSource={data}
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
        </InfiniteScroll>
      </div>
    </>
  );
};

export default AllTrainingEventCard;
AllTrainingEventCard.propTypes = {
  value: PropTypes.object
};

import { MyTrainingCard } from '../../Components';
import PropTypes from 'prop-types';
import { Badge, Carousel, Col, Row, Empty } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './index.css';
import { UseCheckMobile } from '../../Utils';
const MyTrainingEventCard = ({ item }) => {
  const mobile = UseCheckMobile();
  return (
    <div className="bg-card rounded-[10px] p-5 m-5">
      <div className="title-event">
        <p className="title">
          My Training Event
          <Badge
            offset={20}
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
      <Carousel
        arrows
        dots={false}
        infinite={item.data.length > 3}
        slidesToShow={mobile ? 1 : 3}
        slidesToScroll={1}
        prevArrow={<SlickButtonLeft />}
        nextArrow={<SlickButtonRight />}>
        {item.data.map((item, id) => {
          return (
            <Row key={item.id} align="middle" justify="center" gutter={5}>
              <Col>
                <div>
                  <MyTrainingCard id={item.id} item={item} />
                </div>
              </Col>
            </Row>
          );
        })}
      </Carousel>
      {item.data.length === 0 && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const SlickButtonLeft = ({ currentSlide, slideCount, children, ...props }) => (
  <LeftOutlined {...props}>{children}</LeftOutlined>
);
// eslint-disable-next-line react/prop-types
const SlickButtonRight = ({ currentSlide, slideCount, children, ...props }) => (
  <RightOutlined {...props}>{children}</RightOutlined>
);

export default MyTrainingEventCard;
MyTrainingEventCard.propTypes = {
  item: PropTypes.object
};

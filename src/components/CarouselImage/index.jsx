import { Carousel, Image } from 'antd';
import { Image1, Image2, Image3, Image4 } from '../../assets';
import './index.css';
const CarouselImage = () => {
  return (
    <Carousel draggable autoplay swipeToSlide>
      <Image src={Image1} preview={false} height={400} />

      <Image src={Image2} preview={false} height={400} />

      <Image src={Image3} preview={false} height={400} />

      <Image src={Image4} preview={false} height={400} />
    </Carousel>
  );
};

export default CarouselImage;

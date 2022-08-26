import { CarouselImage, FormLogin } from '../../components';
import { HeaderLogin, FooterLogin } from '../../parts';

const Login = () => {
  return (
    <div className="p-10">
      <div className="bg-card rounded-[10px]  p-5 m-5 flex sm:block sm:flex-wrap flex-col md:flex-row">
        <div>
          <HeaderLogin />
        </div>
        <div className="w-full flex flex-wrap flex-col md:flex-row ">
          <div className="w-full md:w-1/2 ">
            <CarouselImage />
          </div>
          <div className="w-full md:w-1/2">
            <FormLogin />
          </div>
        </div>
        <div>
          <FooterLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;

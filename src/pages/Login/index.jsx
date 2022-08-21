import { FormLogin } from '../../Components';
import { HeaderLogin, FooterLogin } from '../../parts';

const Login = () => {
  return (
    <div className="p-10">
      <div className="bg-card rounded-[10px]  p-5 m-5 flex sm:block sm:flex-wrap">
        <div>
          <HeaderLogin />
        </div>
        <div className="flex flex-row">
          <div className="basis-1/2">{/* <CarouselImage /> */}</div>
          <div className="basis-1/2">
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

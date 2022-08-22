import { FormLogin } from '../../Components';
import { HeaderLogin, FooterLogin } from '../../parts';

const Login = () => {
  return (
    <div className="">
      <div className="rounded p-5 bg-white">
        <HeaderLogin />
        <div className="flex flex-row">
          <div className="basis-1/2">{/* <CarouselImage /> */}</div>
          <div className="basis-1/2">
            <FormLogin />
          </div>
        </div>
        <FooterLogin />
      </div>
    </div>
  );
};

export default Login;

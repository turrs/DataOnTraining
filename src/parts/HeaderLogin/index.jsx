import { Image, Select, Typography } from 'antd';
import { ILogo } from '../../assets';

const HeaderLogin = () => {
  const { Option } = Select;
  return (
    <div className="flex flex-row border-b-2 border-gray">
      <div className="basis-1/8 pl-5 pr-5">
        <Image src={ILogo} style={{ width: 120, height: 50 }}></Image>
      </div>
      <div className="grow">
        <div>Human Resources Information System</div>
        <div>
          <Typography.Title level={5} style={{ margin: 0 }}>
            SunFish 7
          </Typography.Title>
        </div>
      </div>
      <div className="basis-1/2 ">
        <div className="flex justify-end">
          <Select
            labelInValue
            bordered={false}
            defaultValue={{
              value: 'english',
              label: 'English (EN)'
            }}
            style={{
              width: 150
            }}>
            <Option value="indonesia">Indonesia(IDN)</Option>
            <Option value="english">English(EN)</Option>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default HeaderLogin;

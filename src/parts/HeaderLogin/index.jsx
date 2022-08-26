import { Image, Select, Typography } from 'antd';
import { ILogo } from '../../assets';
import i18next from 'i18next';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
const HeaderLogin = () => {
  const { t, i18n } = useTranslation(['login']);
  const { Text } = Typography;
  useEffect(() => {
    if (localStorage.getItem('i18nextLng'?.length > 2)) {
      i18next.changeLanguage('en');
    }
  }, []);

  const onChangeLanguages = (event) => {
    i18n.changeLanguage(event.value);
  };
  return (
    <div className="flex flex-row border-b-2 border-gray flex-wrap">
      <div className="basis-1/8 pl-5 pr-5">
        <Image src={ILogo} style={{ width: 120, height: 50 }}></Image>
      </div>
      <div className="grow">
        <div>
          <Text style={{ fontSize: '16px', color: '#888888' }}>{t('header')}</Text>
        </div>
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
            defaultValue="English (EN)"
            onChange={(event) => onChangeLanguages(event)}
            name="language"
            style={{
              width: 150
            }}>
            <Select.Option value="en">English (EN)</Select.Option>
            <Select.Option value="id">Indonesia (IDN)</Select.Option>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default HeaderLogin;

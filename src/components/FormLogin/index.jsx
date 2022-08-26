import { Col, Row, Alert, Button, Checkbox, Form, Input, Typography } from 'antd';
import Notification from '../Notification';
import PropTypes from 'prop-types';
import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AppContext } from '../../context';
import { useTranslation } from 'react-i18next';
const FormLogin = ({ setToken }) => {
  const { t } = useTranslation(['login']);

  const { Text } = Typography;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleSubmit = async () => {
    // eslint-disable-next-line no-unused-vars, prefer-const
    let item = {
      username: username,
      password: password
    };
    if (username && password) {
      try {
        let result = await fetch(
          'https://gist.githubusercontent.com/aisyahnnd/c168969ed7dca3cd92f0e54298078e00/raw/d918a4df3f1c5d87dc057ee299d1e460e9d834b5/login-api',
          {
            method: 'GET'
          }
        );
        result = await result.json();
        console.log(result);
        // eslint-disable-next-line array-callback-return
        const data = result.find((item) => {
          if (username === item.data.username && password === item.data.password) {
            return item;
          } else {
            console.log('User not found!');
          }
        });
        localStorage.setItem('user-info', JSON.stringify(data.data));
        localStorage.setItem('role', JSON.stringify(data.data.role));
        localStorage.setItem('token', JSON.stringify(data.token));
        localStorage.setItem('id', JSON.stringify(data.data.id));

        const messages = 'Login success';
        Notification(messages, 'success');
        navigate('/dashboard');
      } catch (error) {
        Notification(error.message, 'warn');
      }
    } else {
      setFlag(true);
      return false;
    }
  };

  return (
    <div className="max-w-[500px]">
      <div>
        <Text
          style={{
            fontSize: '36px',
            fontWeight: 900,
            color: '#1890ff'
          }}>
          {t('content')}
        </Text>
      </div>
      <Form
        name="basic"
        wrapperCol={{
          span: 24
        }}
        initialValues={{
          remember: true
        }}
        autoComplete="off"
        layout="vertical"
        onFinishFailed={onFinishFailed}
        data-testid="form-login">
        <Form.Item
          style={{ fontWeight: 'bold' }}
          label={t('username.label')}
          name="username"
          rules={[
            {
              required: true,
              message: `${t('username.messages.part1')}`
            },
            {
              max: 20,
              message: `${t('username.messages.part2')}`
            },
            {
              message: `${t('username.messages.part3')}`
            }
          ]}>
          <div className="w-full">
            <Input
              style={{ width: '100%' }}
              placeholder={t('username.placeholder')}
              data-testid="username"
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
        </Form.Item>
        <Form.Item
          style={{ fontWeight: 'bold' }}
          label={t('password.label')}
          name="password"
          rules={[
            {
              required: true,
              message: `${t('password.messages.part1')}`
            },
            {
              min: 8,
              message: `${t('password.messages.part2')}`
            }
          ]}>
          <div className="w-full">
            <Input.Password
              style={{ width: '100%' }}
              placeholder={t('password.placeholder')}
              data-testid="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </Form.Item>
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 0,
            span: 24
          }}>
          <Row>
            <Col span={12}>
              <Checkbox>{t('checkbox')}</Checkbox>
            </Col>
            <Col span={12}>
              <p>
                <a href="#">{t('password.forgotPassword')}</a>
              </p>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 0,
            span: 24
          }}>
          <Row>
            <Col span={24}>
              <p>
                {t('account.part1')} <Link to="/register">{t('account.part2')}</Link>
              </p>
            </Col>
          </Row>
          <Button
            onClick={handleSubmit}
            style={{ width: 100 }}
            type="primary"
            htmlType="submit"
            data-testid="login-button">
            {t('button')}
          </Button>
        </Form.Item>
        {flag && <Alert message={t('alert')} type="warning" />}
      </Form>
    </div>
  );
};

export default FormLogin;

FormLogin.propTypes = {
  setToken: PropTypes.string
};

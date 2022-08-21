import { Col, Row, Alert, Button, Checkbox, Form, Input, Typography } from 'antd';
import Notification from '../Notification';
import PropTypes from 'prop-types';
import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AppContext } from '../../Context';
const FormLogin = ({ setToken }) => {
  const { setUser } = useContext(AppContext);
  const { Text } = Typography;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleSubmit = async () => {
    console.log(username, password);
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
        const user = JSON.parse(localStorage.getItem('user-info'));
        setUser(user);
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
    <div>
      <div>
        <Text
          style={{
            fontSize: '36px',
            fontWeight: 900,
            color: '#1890ff'
          }}>
          Please enter your credential to access the system
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
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!'
            },
            {
              max: 20,
              message: 'Username must be less than 20'
            },
            {
              message: 'Username must be alphabets and numbers only'
            }
          ]}>
          <Input
            style={{ width: 400 }}
            placeholder="Enter your username here"
            data-testid="username"
            onChange={(event) => setUsername(event.target.value)}
          />
        </Form.Item>
        <Form.Item
          style={{ fontWeight: 'bold' }}
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!'
            },
            {
              min: 8,
              message: 'Passwords must be at least 8 characters'
            }
          ]}>
          <Input.Password
            style={{ width: 400 }}
            placeholder="Password"
            data-testid="password"
            onChange={(event) => setPassword(event.target.value)}
          />
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
              <Checkbox>Remember me</Checkbox>
            </Col>
            <Col span={12}>
              <p>
                <a href="#">Forgot password?</a>
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
                Haven`t account? <Link to="/register">Register</Link>
              </p>
            </Col>
          </Row>
          <Button
            onClick={handleSubmit}
            style={{ width: 100 }}
            type="primary"
            htmlType="submit"
            data-testid="login-button">
            Login
          </Button>
        </Form.Item>
        {flag && <Alert message="Wrong username/password!" type="warning" />}
      </Form>
    </div>
  );
};

export default FormLogin;

FormLogin.propTypes = {
  setToken: PropTypes.string
};

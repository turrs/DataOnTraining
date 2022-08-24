import { Row, Col, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

const FooterLogin = () => {
  const { Text } = Typography;
  const { t } = useTranslation(['login']);
  return (
    <Row className="footer" data-testid="footer">
      <Col span={24} style={{ textAlign: 'center', paddingTop: 20 }}>
        <Text style={{ fontSize: '16px', color: '#888888' }}>{t('footer.line1')}</Text>
      </Col>
      <Col span={24} style={{ textAlign: 'center', paddingBottom: 20 }}>
        <Text style={{ fontSize: '16px', color: '#888888' }}>{t('footer.line2')}</Text>
      </Col>
    </Row>
  );
};

export default FooterLogin;

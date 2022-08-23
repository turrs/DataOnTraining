import { MoreOutlined, PlusOutlined, EditOutlined } from '@ant-design/icons';
import { Breadcrumb, Dropdown, Menu } from 'antd';
import { useNavigate, Link, useLocation, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonIcon from '../ButtonIcon';
const SectionHeader = ({ viewButton, user, editButton }) => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);
  const path = pathSnippets[0];
  const handleCreate = () => {
    navigate('/training/create');
  };
  const handleEditMyTraining = (params) => {
    navigate(`/mytraining/edit/${params.id}`);
  };
  const handleEditTraining = (params) => {
    navigate(`/training/edit/${params.id}`);
  };
  // breadcumb

  const breadcrumbNameMaps = {
    '/': 'Dashboard',
    '/register': 'Register',
    '/training': 'Training',
    ['/training/' + params.id]: 'Training Event Detail',
    '/training/create': 'Create Training',
    ['/mytraining/' + params.id]: 'Detail Page',
    '/mytraining/edit': '',
    ['/mytraining/edit/' + params.id]: 'Edit Detail',
    '/mytraining': 'My Training'
  };
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return <Breadcrumb.Item key={url}>{breadcrumbNameMaps[url]}</Breadcrumb.Item>;
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key={'/'}>
      <Link to="/">Dashboard</Link>
    </Breadcrumb.Item>
  ].concat(extraBreadcrumbItems);

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate('/login');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const menuLogout = (
    <Menu
      data-testid="logout"
      onClick={handleLogout}
      items={[
        {
          label: 'Logout',
          key: '1'
        }
      ]}
    />
  );

  const menuLogin = (
    <Menu
      onClick={handleLogin}
      items={[
        {
          label: 'Login',
          key: '1'
        }
      ]}
    />
  );

  return (
    <>
      <div className="bg-card rounded-[10px] p-5 m-5 flex sm:block sm:flex-wrap">
        <div className="row sm:flex sm:flex-wrap sm:block">
          <div className="basis-1/2">
            <Breadcrumb separator=">">{breadcrumbItems}</Breadcrumb>
          </div>
          <div
            className="basis-1/2"
            span={12}
            style={{
              textAlign: 'right',
              padding: 0
            }}>
            {editButton &&
              (user?.role === 'admin' ? (
                <>
                  <ButtonIcon
                    textButton="Edit"
                    style={{ borderRadius: 5, fontWeight: 'bold' }}
                    dataTestId="buttonEdit"
                    icon={<EditOutlined />}
                    onClick={() =>
                      path === 'mytraining'
                        ? handleEditMyTraining(params)
                        : handleEditTraining(params)
                    }
                  />
                </>
              ) : null)}
            {viewButton && (
              <>
                {user.role === 'admin' ? (
                  <>
                    <ButtonIcon
                      data-testid="button"
                      onClick={handleCreate}
                      type="primary"
                      style={{ borderRadius: 5, fontWeight: 'bold' }}
                      icon={<PlusOutlined />}
                      textButton="Create Training Event"></ButtonIcon>
                  </>
                ) : null}
                <Dropdown.Button
                  type="dashed"
                  style={{
                    borderRadius: 5,
                    fontWeight: 'bold',
                    marginLeft: 10,
                    marginRight: 20
                  }}
                  overlay={user ? menuLogout : menuLogin}
                  trigger={['click']}
                  data-testid="buttonOverlay"
                  icon={<MoreOutlined />}>
                  {user ? `Hi, ${user.username}` : 'More'}
                </Dropdown.Button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionHeader;

SectionHeader.propTypes = {
  user: PropTypes.object,
  viewButton: PropTypes.bool,
  editButton: PropTypes.bool
};

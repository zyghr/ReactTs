// import { GithubOutlined } from '@ant-design/icons';
// import { DefaultFooter } from '@ant-design/pro-components';
// import { useIntl } from '@umijs/max';

const Footer: React.FC = () => {
  // const intl = useIntl();
  // const defaultMessage = intl.formatMessage({
  //   id: 'app.copyright.produced',
  //   defaultMessage: 'REACT',
  // });
  // const currentYear = new Date().getFullYear();

  return (
    <div style={{textAlign: 'center',marginBottom: '10px', color:'#282C34'}}>
      ReactTs
    </div>
    // <DefaultFooter
    //   style={{
    //     background: 'none',
    //   }}
    //   copyright={`${currentYear} ${defaultMessage}`}
    //   links={[
    //     {
    //       key: 'ReactTs',
    //       title: 'ReactTs',
    //       href: 'https://pro.ant.design',
    //       blankTarget: true,
    //     },
    //     {
    //       key: 'github',
    //       title: <GithubOutlined />,
    //       href: 'https://github.com/ant-design/ant-design-pro',
    //       blankTarget: true,
    //     },
    //     {
    //       key: 'Express',
    //       title: 'Express',
    //       href: 'https://ant.design',
    //       blankTarget: true,
    //     },
    //   ]}
    // />
  );
};

export default Footer;

// This is example of menu item without group for horizontal layout. There will be no children.

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import ChromeOutlined from '@ant-design/icons/ChromeOutlined';

// type
import { NavItemType } from 'types/menu';

// icons
const icons = { ChromeOutlined };

// ==============================|| MENU ITEMS - SAMPLE PAGE ||============================== //

const samplePage: NavItemType = {
  id: 'TCSS 460 Home',
  title: <FormattedMessage id="TCSS 460 Home" />,
  type: 'group',
  url: '/sample-page',
  icon: icons.ChromeOutlined
};

export default samplePage;

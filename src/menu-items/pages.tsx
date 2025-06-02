// third-party
import { FormattedMessage } from 'react-intl';

// assets
import MessageOutlined from '@ant-design/icons/MessageOutlined';
import IdcardOutlined from '@ant-design/icons/IdcardOutlined';
import SearchOutlined from '@ant-design/icons/SearchOutlined';
import LockOutlined from '@ant-design/icons/LockOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';

// type
import { NavItemType } from 'types/menu';

// icons
const icons = {
  MessageOutlined,
  SearchOutlined,
  IdcardOutlined,
  LockOutlined,
  MenuBookOutlinedIcon,
  LibraryBooksIcon,
  EmailIcon,
  SendIcon
};

// ==============================|| MENU ITEMS - PAGES ||============================== //

const pages: NavItemType = {
  id: 'group-pages',
  title: <FormattedMessage id="pages" />,
  type: 'group',
  children: [
    {
      id: 'messages',
      title: <FormattedMessage id="messages" />,
      type: 'collapse',
      icon: icons.MessageOutlined,
      children: [
        {
          id: 'send-message',
          title: <FormattedMessage id="send-message" />,
          type: 'item',
          url: '/messages/send',
          icon: icons.SendIcon
        },
        {
          id: 'view-messages',
          title: <FormattedMessage id="view-messages" />,
          type: 'item',
          url: '/messages/list',
          icon: icons.EmailIcon
        }
      ]
    },
    {
      id: 'books-category',
      title: <FormattedMessage id="books-category" />,
      type: 'collapse',
      icon: icons.SearchOutlined,
      children: [
        {
          id: 'books-search-isbn',
          title: <FormattedMessage id="books-search-isbn" />,
          type: 'item',
          url: '/books/search/isbn',
          icon: icons.MenuBookOutlinedIcon
        },
        {
          id: 'books-search-title',
          title: <FormattedMessage id="books-search-title" />,
          type: 'item',
          url: '/books/search/title',
          icon: icons.MenuBookOutlinedIcon
        },
        {
          id: 'books-view-all',
          title: <FormattedMessage id="books-view-all" />,
          type: 'item',
          url: '/books',
          icon: icons.LibraryBooksIcon
        }
      ]
    },
    {
      id: 'account-category',
      title: <FormattedMessage id="account-category" />,
      type: 'collapse',
      icon: icons.IdcardOutlined,
      children: [
        {
          id: 'change-password',
          title: <FormattedMessage id="change-password" />,
          type: 'item',
          url: '/account',
          icon: icons.LockOutlined
        }
      ]
    }
  ]
};

export default pages;

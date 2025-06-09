// third-party
import { FormattedMessage } from 'react-intl';

// assets
import MessageOutlined from '@ant-design/icons/MessageOutlined';
import EditOutlined from '@ant-design/icons/EditOutlined';
import IdcardOutlined from '@ant-design/icons/IdcardOutlined';
import SearchOutlined from '@ant-design/icons/SearchOutlined';
import LockOutlined from '@ant-design/icons/LockOutlined';
import ImportOutlined from '@ant-design/icons/ImportOutlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';

// type
import { NavItemType } from 'types/menu';

// icons
const icons = {
  MessageOutlined,
  EditOutlined,
  SearchOutlined,
  IdcardOutlined,
  LockOutlined,
  ImportOutlined,
  MenuBookOutlinedIcon,
  StarBorderOutlinedIcon,
  LibraryBooksIcon,
  StarHalfOutlinedIcon,
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
          id: 'books-search-rating',
          title: <FormattedMessage id="Search By Rating" />,
          type: 'item',
          url: '/books/search/rating',
          icon: icons.StarHalfOutlinedIcon
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
      id: 'create-category',
      title: <FormattedMessage id="create-category" />,
      type: 'collapse',
      icon: icons.ImportOutlined,
      children: [
        {
          id: 'create-book',
          title: <FormattedMessage id="create-book" />,
          type: 'item',
          url: '/create',
          icon: icons.ImportOutlined
        }
      ]
    }
  ]
};

export default pages;

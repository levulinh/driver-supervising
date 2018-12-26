export default {
  items: [
    {
      name: 'Bảng điều khiển',
      url: '/admin/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      title: true,
      name: 'Tổng quan',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Danh sách học viên',
      url: '/admin/theme/colors',
      icon: 'icon-drop',
    },
    {
      name: 'Lịch thi sát hạch',
      url: '/admin/theme/typography',
      icon: 'icon-pencil',
    },
    {
      title: true,
      name: 'Quản lý',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Thêm học viên',
      url: '/admin/addStudent',
      icon: 'icon-pencil',
    },
    {
      name: 'Notifications',
      url: '/admin/notifications',
      icon: 'icon-bell',
      children: [
        {
          name: 'Alerts',
          url: '/admin/notifications/alerts',
          icon: 'icon-bell',
        },
        {
          name: 'Badges',
          url: '/admin/notifications/badges',
          icon: 'icon-bell',
        },
        {
          name: 'Modals',
          url: '/admin/notifications/modals',
          icon: 'icon-bell',
        },
      ],
    },
    {
      name: 'Widgets',
      url: '/admin/widgets',
      icon: 'icon-calculator',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      divider: true,
    },
    {
      title: true,
      name: 'Hỗ trợ',
    },
    {
      name: 'Pages',
      url: '/admin/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Đăng xuất',
          url: '/login',
          icon: 'icon-star',
        },
        {
          name: 'Register',
          url: '/admin/register',
          icon: 'icon-star',
        },
        {
          name: 'Error 404',
          url: '/admin/404',
          icon: 'icon-star',
        },
        {
          name: 'Error 500',
          url: '/admin/500',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'Đăng xuất',
      url: '/admin/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
  ],
};

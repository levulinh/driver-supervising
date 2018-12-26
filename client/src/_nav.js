export default {
  items: [
    {
      name: 'Bảng điều khiển',
      url: '/admin/dashboard',
      icon: 'icon-speedometer'
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
      url: '/admin/dashboard',
      icon: 'icon-list',
    },
    {
      name: 'Lịch thi sát hạch',
      url: '/admin/theme/typography',
      icon: 'icon-calendar',
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
      divider: true,
    },
    {
      title: true,
      name: 'Hỗ trợ',
    },
   
  ],
};

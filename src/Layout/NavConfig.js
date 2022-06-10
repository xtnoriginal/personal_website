// component

// ----------------------------------------------------------------------

import Iconify from "../components/Iconify";

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'profile',
    path: '/profile',
    icon: getIcon('et:profile-male'),
  },
  {
    title: 'portifolio',
    path: '/portifolio',
    icon: getIcon('bytesize:portfolio'),
  },

  {
    title: 'blog',
    path: '/blog',
    icon: getIcon('eva:file-text-fill'),
  }
  ,
  {
    title: 'burnout',
    path: '/burnout',
    icon: getIcon('cil:burn'),
  }
  ,
  {
    title: 'Tech Stack',
    path: '/techstack',
    icon: getIcon('ant-design:code-outlined'),
  }
  ,
  {
    title: 'contact',
    path: '/contact',
    icon: getIcon('cil:contact'),
  }
];

export default navConfig;

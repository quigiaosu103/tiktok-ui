import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following/index.js';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import routeConfig from '~/configs/route';
const publicRoutes = [
  { path: routeConfig.home, component: Home },
  { path: routeConfig.following, component: Following },
  { path: routeConfig.upload, component: Upload, layout: HeaderOnly },
  { path: routeConfig.profile, component: Profile },
  { path: routeConfig.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

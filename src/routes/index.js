import { HeaderOnly } from '~/layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following/index.js';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import config from '~/config';
const publicRoutes = [
  { path: config.route.home, component: Home },
  { path: config.route.following, component: Following },
  { path: config.route.upload, component: Upload, layout: HeaderOnly },
  { path: config.route.profile, component: Profile },
  { path: config.route.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

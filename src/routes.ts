import Home from "./pages/Home";
import Dapp from "./pages/Dapp";
import DappBlack from "./pages/DappBlack";
import Detail from "./pages/Detail";
import ComingSoon1 from "./pages/ComingSoon1";
import ComingSoon2 from "./pages/ComingSoon2";

const routes = [
  {
    path: "/",
    exact: true,
    title: "Home",
    component: Home
  },
  {
    path: "/home",
    exact: true,
    title: "Home",
    component: Home
  },
  {
    path: "/dapp",
    exact: true,
    title: "Dapp",
    component: Dapp
  },
  {
    path: "/dapp-black",
    exact: true,
    title: "DappBlack",
    component: DappBlack
  },
  {
    path: "/detail",
    exact: true,
    title: "Detail",
    component: Detail
  },
  {
    path: "/coming-soon1",
    exact: true,
    title: "Coming Soon1",
    component: ComingSoon1
  },
  {
    path: "/coming-soon2",
    exact: true,
    title: "coming-soon2",
    component: ComingSoon2
  }
];

export default routes;

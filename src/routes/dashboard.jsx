// @material-ui/icons
//import Dashboard from "@material-ui/icons/Dashboard";
import Add from "@material-ui/icons/Add";
import Update from "@material-ui/icons/Update"
// import ContentPaste from "@material-ui/icons/ContentPaste";
//import LibraryBooks from "@material-ui/icons/LibraryBooks";
//import BubbleChart from "@material-ui/icons/BubbleChart";
//import LocationOn from "@material-ui/icons/LocationOn";
//import Notifications from "@material-ui/icons/Notifications";
//import Unarchive from "@material-ui/icons/Unarchive";
// core components/views
//import DashboardPage from "views/Dashboard/Dashboard.jsx";
//import UserProfile from "views/UserProfile/UserProfile.jsx";
import MyForm from "views/UserProfile/AddProduct.jsx";
import UpdateForm from "views/UpdateData/UpdateDelete.jsx"
//import TableList from "views/TableList/TableList.jsx";
import MyTable from "views/TableList/DataTable.jsx";
//import Typography from "views/Typography/Typography.jsx";
//import Icons from "views/Icons/Icons.jsx";
//import Maps from "views/Maps/Maps.jsx";
//import NotificationsPage from "views/Notifications/Notifications.jsx";
//import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";

const dashboardRoutes = [
  // {
  //   path: "/dashboard",
  //   sidebarName: "Dashboard",
  //   navbarName: "",
  //   icon: Dashboard,
  //   component: DashboardPage
  // },
  {
    path: "/add",
    sidebarName: "Add Drug",
    navbarName: "",
    icon: Add,
    component: MyForm
  },
  {
    path: "/list",
    sidebarName: "View All Drug",
    navbarName: "",
    icon: "content_paste",
    component: MyTable
  },
  {
    path: "/update",
    sidebarName: "Update/Delete Drug",
    navbarName: "",
    icon: Update,
    component: UpdateForm
  },
  { redirect: true, path: "/", to: "/add", navbarName: "Redirect" }
];

export default dashboardRoutes;

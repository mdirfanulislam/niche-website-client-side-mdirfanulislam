import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button  from '@mui/material/Button';
// import DashboardHome from './DashboardHome';
// import MakeAdmin from './MakeAdmin';
// import AddDoctor from './AddDoctor';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch} from "react-router-dom";
import Pay from './User/Pay';
import AddAdmin from './User/AddAdmin';
import MyOrder from './User/MyOrder';
import useAuth from './../Hooks/Auth/useAuth';
import Review from './User/Review';
import AddAProducts from './User/AddAProducts';
import ManageAllOrders from './User/ManageAllOrders';
import ManageProducts from './User/ManageProducts';
import AdminRoute from './../PrivateRoute/AdminRoute';
const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
//   const [date,setDate]=React.useState(new Date())
  let { path, url } = useRouteMatch();
//   const {admin}= useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const {signOutUser,admin,user}=useAuth()
  console.log("admin", admin)
    
  const drawer = (
    <div>
     
      <Toolbar />
      <Link to="/home"><Button variant="contained" color="success" sx={{mx:2, my:1}}>Home</Button> </Link>
      {
        !admin ? <Box>
      <Link to={`${url}/myOrder`}><Button variant="contained" color="success" sx={{mx:2 , my:1}}>My Order</Button> </Link>
      <Link to={`${url}/review`}><Button variant="contained" color="success" sx={{mx:2 , my:1}}>Review</Button> </Link>
      <Link to={`${url}/payment`}><Button variant="contained" color="success" sx={{mx:2 , my:1}}>Payment</Button> </Link>
        </Box> :
      <Box> 
     <Link to={`${url}/addAdmin`}><Button variant="contained" color="success" sx={{mx:2 , my:1}}>Add Admin</Button> </Link>
      <Link to={`${url}/addProducts`}><Button variant="contained" color="success" sx={{mx:2 , my:1}}>Add A Products</Button> </Link>
      <Link to={`${url}/manageAllOrders`}><Button variant="contained" color="success" sx={{mx:2 , my:1}}>Manage All Orders</Button> </Link>
      <Link to={`${url}/manageProducts`}><Button variant="contained" color="success" sx={{mx:2 , my:1}}>ManageProducts</Button> </Link>
        </Box>
      }
      
      
      
      
      <Divider />
      
     <Button variant="contained" onClick={signOutUser} color="success" sx={{mx:2 , my:1}}>Logout</Button>
      <Divider />
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
             {admin && <h3>Admin Name : {user.displayName}</h3> }
             {!admin && <h3> Users Name :{user.displayName} </h3> }
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        <Route exact path={path}>
        {admin ? <ManageAllOrders></ManageAllOrders> :  <MyOrder></MyOrder> }
        </Route>
       
        <Route exact path={`${path}/payment`}>
        <Pay></Pay>
        </Route>
        <Route exact path={`${path}/myOrder`}>
        <MyOrder></MyOrder>
        </Route>
        <Route exact path={`${path}/review`}>
        <Review></Review>
        </Route> 
        <AdminRoute exact path={`${path}/addAdmin`}>
        <AddAdmin></AddAdmin>
        </AdminRoute>
        <AdminRoute exact path={`${path}/addProducts`}>
        <AddAProducts></AddAProducts>
        </AdminRoute>
        <AdminRoute exact path={`${path}/manageAllOrders`}>
        <ManageAllOrders></ManageAllOrders>
        </AdminRoute>
        <AdminRoute exact path={`${path}/manageProducts`}>
        <ManageProducts></ManageProducts>
        </AdminRoute>
      </Switch>
        
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;

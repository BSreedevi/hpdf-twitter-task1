import React from 'react';

import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import Mail from 'material-ui/svg-icons/communication/email';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import ActionHome from 'material-ui/svg-icons/action/home';
import PropTypes from 'prop-types';
import SvgIcon from 'material-ui/SvgIcon';
//import FontIcon from 'material-ui/FontIcon';
//import ActionHome from 'material-ui-icons/action/svg/production';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Tabs, { Tab } from 'material-ui/Tabs';
import {blue} from 'material-ui-next/colors';

const primary = blue[500]; // #F44336
const LeftSideHeader = () => (
  <div>
    {/*<Tabs style={{backgroundColor:"#ffffff"}}indicatorColor={primary} fullWidth={true}>
    <Tab  fullWidth={true}  spacing={24}
      icon={<ActionHome />}
      label="Home"
    />
    <Tab fullWidth={true} spacing={24}
      icon={<NotificationsIcon />}
      label="Notifications"
    />
    <Tab fullWidth={true} spacing={24}
      icon={<Mail />}
      label="Messages"
    />
  </Tabs>*/}
    
    <MuiThemeProvider>
    <IconButton label= "Home" tooltip="Home" style={{color:"#1da1f2",fontSize:"22px",marginLeft:"30px", marginRight:"30px" }}>
    <ActionHome />
  </IconButton>
      <IconButton label= "Notifications" tooltip="Notifications" style={{color:"#1da1f2",fontSize:"22px",marginLeft:"30px", marginRight:"30px" }}>
        <NotificationsIcon />
      </IconButton>
      <IconButton label= "Mail" tooltip="Mail" style={{color:"#1da1f2",fontSize:"22px",marginLeft:"30px", marginRight:"30px" }}>
        <Mail />
      </IconButton>
      </MuiThemeProvider>

      <i className="fa fa-twitter" style={{color:"#1da1f2",fontSize:"22px",marginLeft:"250px", marginRight:"100px" }}>
                            </i>
    {/*<Badge
      badgeContent={10}
      secondary={true}
      badgeStyle={{top: 12, right: 12}}
    >
      <IconButton tooltip="Mail">
        <Mail />
      </IconButton>
    </Badge> */}
  </div>
);


export default LeftSideHeader;
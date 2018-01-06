import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

//import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
const iconStyles = {
    marginRight: 24,
  };
const TabsIconText = () => (
  <Tabs>
    <Tab
    
      icon={<FontIcon className="material-icons" >home</FontIcon>}
      label="Home"
    />
    <Tab
      icon={<FontIcon className="material-icons">notifications</FontIcon>}
      label="Notifications"
    />
    <Tab
      icon={<FontIcon className="material-icons">message</FontIcon>}
      label="Messages"
    />
  </Tabs>
);

export default TabsIconText;
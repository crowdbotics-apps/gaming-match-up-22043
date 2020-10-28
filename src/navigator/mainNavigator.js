import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings163903Navigator from '../features/Settings163903/navigator';
import Settings163901Navigator from '../features/Settings163901/navigator';
import SignIn2163899Navigator from '../features/SignIn2163899/navigator';
import Settings163897Navigator from '../features/Settings163897/navigator';
import UserProfile163890Navigator from '../features/UserProfile163890/navigator';
import Settings163889Navigator from '../features/Settings163889/navigator';
import Settings163887Navigator from '../features/Settings163887/navigator';
import SignIn2163885Navigator from '../features/SignIn2163885/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings163903: { screen: Settings163903Navigator },
Settings163901: { screen: Settings163901Navigator },
SignIn2163899: { screen: SignIn2163899Navigator },
Settings163897: { screen: Settings163897Navigator },
UserProfile163890: { screen: UserProfile163890Navigator },
Settings163889: { screen: Settings163889Navigator },
Settings163887: { screen: Settings163887Navigator },
SignIn2163885: { screen: SignIn2163885Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

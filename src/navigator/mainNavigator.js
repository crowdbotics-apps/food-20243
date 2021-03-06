import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen19100981Navigator from '../features/BlankScreen19100981/navigator';
import BlankScreen18100980Navigator from '../features/BlankScreen18100980/navigator';
import ArticleList100979Navigator from '../features/ArticleList100979/navigator';
import Maps100966Navigator from '../features/Maps100966/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen19100981: { screen: BlankScreen19100981Navigator },
BlankScreen18100980: { screen: BlankScreen18100980Navigator },
ArticleList100979: { screen: ArticleList100979Navigator },
Maps100966: { screen: Maps100966Navigator },

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

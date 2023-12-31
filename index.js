/**
 * @format
 */

import {AppRegistry, Text, TouchableOpacity} from 'react-native';
import {name as appName} from './app.json';
import App from './app/App';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

TouchableOpacity.defaultProps = TouchableOpacity.defaultProps || {};
TouchableOpacity.defaultProps.activeOpacity = 0.7;

AppRegistry.registerComponent(appName, () => App);

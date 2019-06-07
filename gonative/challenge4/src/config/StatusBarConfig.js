import { StatusBar, Platform } from 'react-native';
import { colors } from '~/styles';

StatusBar.setBarStyle('light-content');

if (Platform.OS === 'android') {
  StatusBar.setBackgroundColor(colors.secondary);
}

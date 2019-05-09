import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    marginBottom: metrics.baseMargin,
    padding: metrics.basePadding * 2,
    borderRadius: metrics.baseRadius,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  text: {
    flex: 1,
    marginLeft: metrics.baseMargin * 2,
  },
  title: {
    color: colors.darker,
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    color: colors.regular,
    fontSize: 12,
  },
  icon: {
    color: colors.regular,
    marginLeft: metrics.baseMargin * 2,
  },
});

export default styles;

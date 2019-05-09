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
  repositoryName: {
    color: colors.darker,
    fontSize: 19,
    fontWeight: 'bold',
  },
  organizationName: {
    color: colors.regular,
    fontSize: 13,
  },
  icon: {
    color: colors.regular,
  },
});

export default styles;

import { StyleSheet } from 'react-native';
import { metrics, colors } from '~/styles';

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    borderRadius: metrics.baseRadius,
    backgroundColor: colors.light,
    marginBottom: metrics.baseMargin,
    padding: metrics.basePadding / 2,
  },
  filter: {
    alignItems: 'center',
    flex: 1,
  },
  filterText: {
    color: colors.regular,
    fontSize: 15,
    fontWeight: 'bold',
  },
  active: {
    color: colors.darker,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;

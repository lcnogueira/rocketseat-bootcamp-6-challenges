import { StyleSheet } from 'react-native';
import { metrics, colors } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
    padding: metrics.basePadding * 2,
  },
  loading: {
    marginTop: metrics.baseMargin * 2,
  },
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: metrics.baseMargin * 2,
  },
  repoInput: {
    flex: 1,
    fontSize: 16,
    backgroundColor: colors.white,
    padding: metrics.basePadding / 2,
    paddingLeft: metrics.basePadding,
    borderRadius: metrics.baseRadius,
    marginRight: metrics.baseMargin * 1.5,
  },
  inputIcon: {
    color: colors.dark,
    fontWeight: 'bold',
  },
  reposContainer: {
    flex: 1,
    borderTopColor: colors.light,
    borderTopWidth: 1,
    paddingTop: metrics.basePadding * 2,
  },
  error: {
    fontSize: 14,
    color: colors.danger,
    textAlign: 'center',
    marginBottom: metrics.baseMargin * 2,
  },
});

export default styles;

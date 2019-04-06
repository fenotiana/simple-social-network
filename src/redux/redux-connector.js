import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export const reduxConnect = (mapStateToProps, actions, component) => (
  connect(
    mapStateToProps,
    dispatch => ({
      ...bindActionCreators({
        ...actions,
      }, dispatch),
    }),
  )(component)
);

import { connect } from 'react-redux';

import App from './app';

const mapStateToProps = (state) => ({
    session: state.session
});

export default connect(
    mapStateToProps
)(App)
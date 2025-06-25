import { actions } from '../redux/auth/authSlice'

export const mapStateToProps = (state) => ({
    loading: state.auth.loading,
    error: state.auth.error,
    isLogin: state.auth.form.isLogin,
    email: state.auth.form.email,
    password: state.auth.form.password,
    firstName: state.auth.form.firstName,
    lastName: state.auth.form.lastName,
    username: state.auth.form.username,
    statusCode: state.auth.statusCode,
    token: state.auth.token,
});

export const mapDispatchToProps = (dispatch) => ({
    loginRequest: (payload) => dispatch(actions.loginRequest(payload)),
    registerRequest: (payload) => dispatch(actions.registerRequest(payload)),
    toggleLogin: () => dispatch(actions.toggleLogin()),
    updateFormField: (payload) => dispatch(actions.updateFormField(payload)),
    submitForm: () => dispatch(actions.submitForm()),
    logout: () => dispatch(actions.logout()),
});

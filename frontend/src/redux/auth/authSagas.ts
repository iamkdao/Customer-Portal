import { call, put, select, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { actions } from './authSlice';
import { API } from '../../config';


function* handleLogin(action: ReturnType<typeof actions.loginRequest>) {
    try {
        const response: { data: { access: string }, status: number } = yield call(
            axios.post,
            `${API.BASE_URL}${API.ENDPOINTS.LOGIN}`,
            action.payload
        );

        localStorage.setItem('authToken', response.data.access)

        yield put(actions.authSuccess({
            token: response.data.access,
            user: { email: action.payload.email },
            status: response.status,
        }));
    } catch (error: any) {
        yield put(actions.authFailure({
            message: error.response?.data?.message || 'Login failed',
            status: error.response?.status,
        }));
    }
}

function* handleRegister(action: ReturnType<typeof actions.registerRequest>) {
    try {
        const response: { data: { access: string }, status: number } = yield call(
            axios.post,
            `${API.BASE_URL}${API.ENDPOINTS.REGISTER}`,
            {
                email: action.payload.email,
                password: action.payload.password,
                first_name: action.payload.firstName,
                last_name: action.payload.lastName,
                username: action.payload.username,
            }
        );

        yield put(actions.authSuccess({
            token: response.data.access,
            user: {
                email: action.payload.email,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
            },
            status: response.status,
        }));
    } catch (error: any) {
        yield put(actions.authFailure({
            message: error.response?.data?.message || 'Registration failed',
            status: error.response?.status,
        }));
    }
}

function* handleFormSubmit() {
    try {
        const state = yield select();
        const { isLogin, email, password, firstName, lastName, username } = state.auth.form;

        if (isLogin) {
            yield put(actions.loginRequest({ email, password }));
        } else {
            yield put(actions.registerRequest({ firstName, lastName, email, password, username }));
        }
    } catch (error: any) {
        yield put(actions.authFailure(error.message));
    }
}

export function* authSaga() {
    yield takeLatest(actions.loginRequest.type, handleLogin);
    yield takeLatest(actions.registerRequest.type, handleRegister);
    yield takeLatest(actions.submitForm.type, handleFormSubmit);
}

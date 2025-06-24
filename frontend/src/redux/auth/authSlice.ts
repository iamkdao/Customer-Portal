import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';

interface User {
    email: string;
    firstName?: string;
    lastName?: string;
    username?: string;
}

interface AuthState {
    token: string | null;
    user: User | null;
    error: string | null;
    loading: boolean;
    form: {
        isLogin: boolean;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        username: string;
    }
}

export const initialState: AuthState = {
    token: null,
    user: null,
    error: null,
    loading: false,
    form: {
        isLogin: true,
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        username: '',
    }
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginRequest: (state, action: PayloadAction<{
            email: string;
            password: string
        }>) => {
            state.loading = true;
            state.error = null;
        },
        registerRequest: (state, action: PayloadAction<{
            firstName: string;
            lastName: string;
            username: string;
            email: string;
            password: string;
        }>) => {
            state.loading = true;
            state.error = null;
        },
        authSuccess: (state, action: PayloadAction<{
            token: string;
            user: User;
        }>) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
            state.loading = false;
            state.error = null;
        },
        authFailure: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.loading = false;
        },
        logout: (state) => {
            state.token = null;
            state.user = null;
        },

        // Handles mode switching
        toggleLogin: (state) => {
            state.form.isLogin = !state.form.isLogin;
        },
        updateFormField: (state, action: PayloadAction<{
            field: 'email' | 'password' | 'firstName' | 'lastName' | 'username';
            value: string;
        }>) => {
            state.form[action.payload.field] = action.payload.value;
        },
        submitForm: (state) => {
            state.loading = true;
            state.error = null;
        },
    },
});

export const { actions } = authSlice;
export default authSlice.reducer;
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
    statusCode: number | null;
}

const loadTokenFromStorage = (): string | null => {
    try {
        return localStorage.getItem('authToken');
    } catch (error) {
        console.error('Failed to load token from storage', error);
        return null;
    }
};

const saveTokenToStorage = (token: string | null) => {
    try {
        if (token) {
            localStorage.setItem('authToken', token);
        } else {
            localStorage.removeItem('authToken');
        }
    } catch (error) {
        console.error('Failed to save token to storage', error);
    }
};

export const initialState: AuthState = {
    token: loadTokenFromStorage(),
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
    },
    statusCode: null,
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
            status?: number;
        }>) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
            state.loading = false;
            state.error = null;
            state.statusCode = action.payload.status || 200;
            saveTokenToStorage(action.payload.token);
        },
        authFailure: (state, action: PayloadAction<{
            message: string;
            status?: number;
        }>) => {
            state.error = action.payload.message;
            state.loading = false;
            state.statusCode = action.payload.status || 400;
        },
        logout: (state) => {
            state.token = null;
            state.user = null;
            saveTokenToStorage(null);
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
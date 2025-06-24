import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react'
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import { InputField } from '../../stories/InputField';
import { SubmitButton } from '../../stories/SubmitButton';
import { SideLoginPanel } from './components/SideLoginPanel';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../connectors/LoginConnectors';
import '../../index.css'

interface LoginPageProps {
    loading: boolean;
    error: string | null;
    isLogin: boolean;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    username: string;
    loginRequest: (payload: { email: string, password: string }) => {};
    registerRequest: (payload: { firstName: string, lastName: string, email: string, password: string }) => {};
    toggleLogin: () => {};
    updateFormField: (payload: { field: string, value: string }) => {}
    submitForm: () => {};
}

const LoginPage = (props: LoginPageProps) => {
    const {
        loading,
        error,
        isLogin,
        email,
        password,
        firstName,
        lastName,
        username,
        toggleLogin,
        updateFormField,
        submitForm
    } = props;

    const formVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0 },
    };

    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        updateFormField({ field, value: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted");
        submitForm();
    };

    return (
        <div className="flex flex-col md:flex-row h-screen bg-gray-100">
            <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8 md:p-16">
                <div className="w-full max-w-md">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={isLogin ? 'login' : 'signup'}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={formVariants}
                            transition={{ duration: 0.3 }}
                        >
                            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
                                {isLogin ? 'Welcome back' : 'Create account'}
                            </h1>
                            <div className="space-y-4">
                                {!isLogin && (
                                    <div className='space-y-4'>
                                        <InputField
                                            icon={User}
                                            placeholder="First Name"
                                            type="text"
                                            value={firstName}
                                            onChange={handleChange('firstName')}
                                        />
                                        <InputField
                                            icon={User}
                                            placeholder="Last Name"
                                            type="text"
                                            value={lastName}
                                            onChange={handleChange('lastName')}
                                        />
                                        <InputField
                                            icon={User}
                                            placeholder="Username"
                                            type="text"
                                            value={username}
                                            onChange={handleChange('username')}
                                        />
                                    </div>
                                )}
                                <InputField
                                    icon={Mail}
                                    placeholder="Email"
                                    type="email"
                                    value={email}
                                    onChange={handleChange('email')}
                                />
                                <InputField
                                    icon={Lock}
                                    placeholder="Password"
                                    type="password"
                                    value={password}
                                    onChange={handleChange('password')}
                                />
                            </div>
                            {/* ... (submit button and social login options) */}
                            <SubmitButton isLogin={isLogin} loading={loading} onClick={handleSubmit} />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
            {/* ... (right side panel) */}
            <SideLoginPanel isLogin={isLogin} onToggle={toggleLogin} />
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
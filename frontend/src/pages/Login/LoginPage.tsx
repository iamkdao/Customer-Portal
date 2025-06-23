import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react'
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import { InputField } from '../../stories/InputField';
import { SubmitButton } from '../../stories/SubmitButton';
import { SideLoginPanel } from './components/SideLoginPanel';
import '../../index.css'

const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const formVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0 },
    };

    const toggleMode = () => setIsLogin(!isLogin);

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
                                    <InputField
                                        icon={User}
                                        placeholder="Full Name"
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                )}
                                <InputField
                                    icon={Mail}
                                    placeholder="Email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <InputField
                                    icon={Lock}
                                    placeholder="Password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            {/* ... (submit button and social login options) */}
                            <SubmitButton isLogin={isLogin} />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
            {/* ... (right side panel) */}
            <SideLoginPanel isLogin={isLogin} onToggle={toggleMode} />
        </div>
    );
};

export default LoginPage;
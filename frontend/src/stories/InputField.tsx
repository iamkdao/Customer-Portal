import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { Mail, ArrowRight } from 'lucide-react';
import '../index.css';

interface InputFieldProps {
    icon?: LucideIcon,
    placeholder?: string,
    type?: string,
    value?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
}

export const InputField = ({
    icon: Icon, placeholder, type, value, onChange
}: InputFieldProps) => (
    <div className="flex items-center bg-gray-100 p-3 rounded-lg">
        <Icon className="text-gray-500 mr-3" size={20} />
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="bg-transparent outline-none flex-1 text-gray-800"
        />
    </div>
);

// Mock input field
export default function IPF() {
    const [email, setEmail] = useState('');

    return (
        <>
            <InputField icon={Mail}
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />

        </>
    );
}
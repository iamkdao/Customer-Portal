import { CircleUser } from 'lucide-react'
import { mapStateToProps, mapDispatchToProps } from '../connectors/LoginConnectors'
import '../index.css'
import { theme } from '../themes'
import { connect } from 'react-redux'
import { Button } from './Button'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface HeaderProps {
    token: string | null;
    statusCode: number | null;
    logout: () => {};
}

const Header = ({
    token, statusCode, logout
}: HeaderProps) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (statusCode === 200 && !token) {
            navigate('/');
        }
    }, [statusCode, token, navigate]);

    return (
        <header>
            <nav
                style={{ backgroundColor: theme.colors.primary }}
                className="px-4 lg:px-6 py-2.5"
            >
                <div className="flex flex-wrap justify-between items-center mx-auto">
                    <a href="/home" className="flex items-center">
                        <span
                            className="self-center text-xl font-semibold whitespace-nowrap"
                            style={{ color: theme.colors.textLight }}
                        >
                            Customer Portal
                        </span>
                    </a>

                    <div className="flex items-center lg:order-2">
                        <CircleUser
                            className="cursor-pointer hover:opacity-70"
                            color={theme.colors.textLight}
                        />
                        <div className="ml-1.5">
                            <Button
                                label="Logout"
                                onClick={logout}
                                style={{
                                    backgroundColor: theme.colors.accent,
                                    color: theme.colors.textLight,
                                    borderRadius: theme.borderRadius.medium,
                                    padding: '6px 12px',
                                    fontWeight: 500
                                }}
                            />
                        </div>
                    </div>

                    <div className="hidden lg:flex lg:w-auto lg:order-1 items-center justify-between w-full" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            {[
                                { label: 'Estimates', href: '/estimates' },
                                { label: 'Pricing', href: '#' },
                                { label: 'Services', href: '/services' }
                            ].map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className="block py-2 pr-4 pl-3 rounded transition-colors"
                                        style={{
                                            color: theme.colors.textLight,
                                            borderColor: theme.colors.neutral300,
                                        }}
                                        onMouseOver={(e) => {
                                            (e.target as HTMLElement).style.color = theme.colors.accent;
                                        }}
                                        onMouseOut={(e) => {
                                            (e.target as HTMLElement).style.color = theme.colors.textLight;
                                        }}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

import { ReactNode } from "react";

type NavItems = {
    label: string,
    href: string,
};

type HeaderProps = {
    brandName: string,
    brandHref: string,
    navItems: NavItems[],
    isDark: boolean,
    onToggleTheme: ()=> void,
};

export function Header({brandName, brandHref, navItems, isDark, onToggleTheme}: HeaderProps) {
    return(
    <>
        <header className="site-header">
            <a className="brand" href={brandHref} aria-label="Ayodeji Ajayi home">
                {brandName}
            </a>
            <nav className="site-nav" aria-label="Primary navigation">
                {navItems.map((item) => (
                <a key={item.href} href={item.href}>
                    {item.label}
                </a>
                ))}
            </nav>
            <button
                className="theme-toggle"
                type="button"
                aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
                aria-pressed={isDark}
                onClick={onToggleTheme}
            >
                <span className="theme-toggle__track" aria-hidden="true">
                <span className="theme-toggle__thumb" />
                </span>
                <span className="theme-toggle__label">{isDark ? "Light" : "Dark"}</span>
            </button>
        </header>
    </>
    )
}
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

function SunIcon() {
    return (
        <svg
            aria-hidden="true"
            className="theme-toggle__icon"
            viewBox="0 0 24 24"
            fill="none"
        >
            <circle cx="12" cy="12" r="4.5" />
            <path d="M12 2.75v2.5M12 18.75v2.5M4.65 4.65l1.77 1.77M17.58 17.58l1.77 1.77M2.75 12h2.5M18.75 12h2.5M4.65 19.35l1.77-1.77M17.58 6.42l1.77-1.77" />
        </svg>
    );
}

function MoonIcon() {
    return (
        <svg
            aria-hidden="true"
            className="theme-toggle__icon"
            viewBox="0 0 24 24"
            fill="none"
        >
            <path d="M19.5 14.75A7.75 7.75 0 0 1 9.25 4.5a8.5 8.5 0 1 0 10.25 10.25Z" />
        </svg>
    );
}

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
                {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
        </header>
    </>
    )
}
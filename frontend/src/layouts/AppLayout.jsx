function AppLayout({ children }) {
    return (
        <div>
            <header>
                <h2>Enterprise AI Decision Engine</h2>
            </header>

            <main>
                {children}
            </main>
        </div>
    );
}

export default AppLayout;
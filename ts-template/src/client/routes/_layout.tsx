import { Outlet } from 'react-router';

export default function Layout() {
    return (
        <div className="user-layout">
            <nav>
            </nav>
            <main>
                <Outlet /> 
            </main>
        </div>
    );
}
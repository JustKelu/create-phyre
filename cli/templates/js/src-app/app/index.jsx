import './styles.css'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';

const root = document.getElementById('root');

try {
    const { routes } = await import('../.phyre/routes/import-routes.jsx');
    const { default: _404} = await import('../.phyre/routes/404/_404Compiled.js');
    // Trasforming the file-based routes in real React Routes
    const rrRoutes = routes.map(r => {
        const Component = r.Component.default ?? r.Component;
        return {
            path: r.path,
            Component: Component,
            loader: r.loader,
            meta: r?.meta,
            children: r.children,
            ErrorBoundary: r?.ErrorBoundary,
        };
    });
    rrRoutes.push({path: '*', Component: _404})

    // Creating the router
    const router = createBrowserRouter(rrRoutes, {
        hydrationData: window.__ROUTER_CONTEXT__
    });

    ReactDOM.hydrateRoot(
        root,
        <RouterProvider router={router} />
    );
} catch (err) {
    console.error('Failed to load /routes:', err);
    // Fallback UI
    root.innerHTML = '<div style="padding: 20px; color: red;">Error: App.jsx not found. Did you mean to use file-based routing?</div>';
}
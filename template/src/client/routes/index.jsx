import { Link } from 'react-router';

export default function Home() {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 overflow-hidden p-5">
            {/* Hero Section */}
            <div className="container mx-auto px-6 mt-20">
                <div className="flex flex-col items-center justify-center">
                    {/* Logo */}
                    <div className="mb-8 h-48 w-96 object-contain">
                        <img 
                            src="/assets/phyre-logo.png" 
                            alt="Phyre" 
                            className="opacity-90"
                        />
                    </div>

                    {/* Subtitle */}
                    <p className="text-xl text-zinc-400 mb-12 max-w-2xl text-center leading-relaxed">
                        "Fast by default. Flexible by design."
                            <br/> 
                        SSR, HMR, and monorepo support out of the box
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex gap-4 mb-10">
                        <Link to='/about'>
                            <button className="px-8 py-3 border border-zinc-700 hover:border-purple-600 text-zinc-300 rounded-lg font-medium transition-colors">
                                About
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-8 mt-10 max-w-5xl mx-auto">
                    <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
                        <div className="w-12 h-12 bg-purple-600/10 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-zinc-100">Monorepo ready</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Switch from simple application to a monorepo, just in a few clicks with the packages structure
                        </p>
                    </div>
                    <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
                        <div className="w-12 h-12 bg-purple-600/10 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-zinc-100">Fast Development</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Hot module replacement and instant server restarts keep your workflow smooth and efficient
                        </p>
                    </div>

                    <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
                        <div className="w-12 h-12 bg-purple-600/10 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-zinc-100">SSR Built-in</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Server-side rendering out of the box for better SEO and initial page load performance
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-32 text-center text-zinc-600 text-sm">
                    <p>Built with React 19 and modern web technologies</p>
                </div>
            </div>
        </div>
    );
}
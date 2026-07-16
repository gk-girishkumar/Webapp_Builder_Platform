import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight text-primary-600">SaaSPlatform</div>
          <nav className="space-x-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#testimonials" className="hover:text-slate-900">Testimonials</a>
          </nav>
          <div className="space-x-4">
            <button className="text-sm font-medium text-slate-600 hover:text-slate-900">Log in</button>
            <button className="text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Get Started</button>
          </div>
        </div>
      </header>
      
      <main>
        <section className="py-24 px-6 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold tracking-tight mb-6">Build your next great idea faster</h1>
          <p className="text-xl text-slate-500 mb-10">The all-in-one platform for modern teams to collaborate, build, and ship amazing products.</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-sm">Start for free</button>
            <button className="bg-white border border-slate-200 text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition shadow-sm">Book a demo</button>
          </div>
        </section>

        <section id="features" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Everything you need</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-6 rounded-2xl border border-slate-100 bg-slate-50">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center text-blue-600 font-bold">{i}</div>
                  <h3 className="text-lg font-semibold mb-2">Feature {i}</h3>
                  <p className="text-slate-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 text-center text-sm">
        <p>&copy; 2024 SaaSPlatform. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

import React from 'react'

function App() {
  return (
    <div className="min-h-screen">
      <section className="hero h-screen flex items-center justify-center text-center px-4">
        <div>
          <h1 className="text-5xl md:text-7xl font-serif font-semibold text-nordic-charcoal mb-6">
            Welcome to <span className="text-nordic-gold">XZY Salo</span>
          </h1>
          <p className="text-xl text-nordic-grey mb-8 max-w-2xl mx-auto">
            Nordic-inspired beauty, elegance, and self-care
          </p>
          <div className="flex gap-4 justify-center">
            <button className="btn-primary">Book Now</button>
            <button className="px-8 py-3 border border-nordic-gold text-nordic-gold 
                     hover:bg-nordic-gold hover:text-white transition-all">
              Explore Services
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App

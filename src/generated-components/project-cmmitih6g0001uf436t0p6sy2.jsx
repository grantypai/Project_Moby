export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover how leading organizations are transforming their businesses with innovative solutions. Explore real-world success stories and measurable results.
            </p>
            <div className="flex gap-4">
              <a href="https://www.deloitte.com/global/en/what-we-do/case-studies-collection.html" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition duration-300">
                Explore All
              </a>
              <a href="https://www.deloitte.com/global/en/services.html" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition duration-300">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="text-gray-700 font-semibold">Filter by:</span>
            <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition">Industry</button>
            <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition">Solution</button>
            <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition">Region</button>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-100 p-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Client Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", title: "CEO, Tech Innovations", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop", testimonial: "Their consulting services completely transformed our digital strategy. The expert team delivered exceptional results and guided us through every step of the transformation." },
              { name: "Michael Chen", title: "Founder, Digital Solutions", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop", testimonial: "Outstanding professional services and strategic guidance. Their expertise in our industry was invaluable and helped us avoid costly mistakes." },
              { name: "Emma Rodriguez", title: "Director, Creative Agency", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop", testimonial: "Their managed services have been a game-changer. The dedicated support team ensures our operations run smoothly 24/7." },
              { name: "James Wilson", title: "VP, Enterprise Corp", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop", testimonial: "Exceptional consulting and implementation services. Their team's expertise delivered measurable improvements in our operational efficiency." },
              { name: "Lisa Anderson", title: "Manager, Growth Ventures", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop", testimonial: "The best service partnership we've made. Their advisory services provided strategic insights that accelerated our growth." },
              { name: "David Park", title: "CTO, Innovation Labs", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop", testimonial: "Their technical services and support are world-class. The team's deep expertise seamlessly integrated with our infrastructure." },
            ].map((testimonial, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-600 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 border border-white/20 backdrop-blur-xl shadow-2xl h-full">
                  <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-lg opacity-75"></div>
                        <img 
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="relative w-16 h-16 rounded-full object-cover ring-2 ring-white/30"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                        <p className="text-sm text-purple-300">{testimonial.title}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                    
                    <p className="text-gray-100 text-base leading-relaxed italic">
                      "{testimonial.testimonial}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4">Residential Junk Removal</h3>
            <p>Clear out garages, basements, attics, and entire homes.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4">Commercial Cleanouts</h3>
            <p>Professional office cleanout services for businesses.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4">Construction Debris</h3>
            <p>Remove construction waste and demolition debris.</p>
          </div>
        </div>
      </div>
    </section>
  )
}


import Navbar from "@/components/Navbar/Navbar";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-roslis-background">
      <Navbar />
      <main className="container mx-auto p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6 text-roslis-primary">Welcome to ROSLIS</h1>
          <p className="text-xl mb-8 text-roslis-primary">
            Your comprehensive platform for all your needs
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-roslis-primary text-white rounded-md hover:bg-roslis-secondary transition-all">
              Get Started
            </button>
            <button className="px-8 py-3 border border-roslis-primary text-roslis-primary rounded-md hover:bg-roslis-secondary hover:text-white hover:border-roslis-secondary transition-all">
              Learn More
            </button>
          </div>
        </div>
        
        {/* Features Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-roslis-primary">Our Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-roslis-primary">Feature {item}</h3>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at justo vel erat tincidunt facilisis.
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <footer className="bg-roslis-primary text-white p-6 mt-16">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} ROSLIS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

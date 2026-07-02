export default function Footer() {
  return (
    <footer className="bg-[#1d1d1d] text-white">

      <div className="container py-20 grid md:grid-cols-3 gap-12">

        <div>

          <h2 className="text-3xl font-black">

            Paratha Ghar Ka

          </h2>

          <p className="mt-5 text-gray-400">

            Homemade happiness delivered fresh.

          </p>

        </div>

        <div>

          <h3 className="font-bold text-xl">

            Quick Links

          </h3>

          <div className="mt-5 space-y-3">

            <a href="#">Home</a>

            <br/>

            <a href="#menu">Menu</a>

            <br/>

            <a href="#about">About</a>

            <br/>

            <a href="#contact">Contact</a>

          </div>

        </div>

        <div>

          <h3 className="font-bold text-xl">

            Contact

          </h3>

          <p className="mt-5">

            📱 +91 70392 33297

          </p>

          <p className="mt-3">

            Homemade Food

          </p>

        </div>

      </div>

      <div className="border-t border-white/10 py-6 text-center">

        ©2026 Paratha Ghar Ka

      </div>

    </footer>
  );
}
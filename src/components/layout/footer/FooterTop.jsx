import Link from "next/link";

const FooterTop = () => {
  return (
    <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-5 px-4 md:px-0">

      <div className="space-y-4">

        <h5 className="text-xl font-black text-white underline underline-offset-8 decoration-orange-300">
          About Sun Pet
        </h5>
        <p className="text-sm text-orange-50 leading-relaxed">
          Sun Pet is a dedicated platform connecting loving homes with pets in need. 
          Our mission is to make pet adoption easy, transparent, and joyful for everyone.
        </p>
      </div>

      <div className="space-y-4">
        <h5 className="text-xl font-black text-white underline underline-offset-8 decoration-orange-300">
          Quick Links
        </h5>
        <ul className="space-y-2 text-sm text-orange-50">
          <li>
            <Link href="/" className="hover:text-yellow-200 transition-all duration-300 flex items-center gap-1">
              <span>›</span> Home
            </Link>
          </li>
          <li>
            <Link href="/pets" className="hover:text-yellow-200 transition-all duration-300 flex items-center gap-1">
              <span>›</span> All Pets
            </Link>
          </li>
          <li>
            <Link href="/add-pet" className="hover:text-yellow-200 transition-all duration-300 flex items-center gap-1">
              <span>›</span> Add Pet
            </Link>
          </li>
          <li>
            <Link href="/my-requests" className="hover:text-yellow-200 transition-all duration-300 flex items-center gap-1">
              <span>›</span> My Requests
            </Link>
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h5 className="text-xl font-black text-white underline underline-offset-8 decoration-orange-300">
          Social Links
        </h5>
        <ul className="space-y-2 text-sm text-orange-50">
          <li><a href="#" className="hover:text-yellow-200 transition-colors">Facebook</a></li>
          <li><a href="#" className="hover:text-yellow-200 transition-colors">Instagram</a></li>
          <li><a href="#" className="hover:text-yellow-200 transition-colors">Twitter</a></li>
          <li><a href="#" className="hover:text-yellow-200 transition-colors">LinkedIn</a></li>
        </ul>
      </div>

      <div className="space-y-4">
        <h5 className="text-xl font-black text-white underline underline-offset-8 decoration-orange-300">
          Contact Us
        </h5>
        <div className="text-sm text-orange-50 space-y-3">
          <p className="flex items-center gap-3">
            <span className="bg-white/20 p-1.5 rounded-lg">📍</span> Tangail, Dhaka, BD
          </p>
          <p className="flex items-center gap-3">
            <span className="bg-white/20 p-1.5 rounded-lg">📧</span> info@sunpet.com
          </p>
          <p className="flex items-center gap-3">
            <span className="bg-white/20 p-1.5 rounded-lg">📞</span> +880 123 456 789
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
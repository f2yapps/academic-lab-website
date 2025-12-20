import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Lab Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Precision Agriculture Lab (PAL)</h3>
            <p className="text-gray-300 text-sm">
              University of Maryland College Park
              <br />
              Central Maryland Research and Education Center
              <br />
              2005 Largo Road Upper Marlboro, MD 20774-8508
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/research-projects" className="text-gray-300 hover:text-white transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/publications" className="text-gray-300 hover:text-white transition">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-300 hover:text-white transition">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-gray-300 text-sm">
              <a href="mailto:hemendra@umd.edu" className="hover:text-white transition">
                hemendra@umd.edu
              </a>
              <br />
              <span>(O): (301) 226-7405</span>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Precision Agriculture Lab (PAL). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}














import Button from "@/components/ui/Button";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="bg-[rgba(238,238,238,1)] w-full" role="navigation">
      <div className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap px-16 py-4 max-md:px-5">
        <div className="bg-white flex items-center gap-6">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/547abc55e6e448d595cf41dc48be6c0f/9c3dc88250c5395efab500173559307bdd4a3854a4f75e214bc7a0db12854c81"
            alt="Logo"
            className="w-[118px] h-auto"
          />
        </div>

        <div className="flex items-center gap-4 text-base">
          <div className="hidden md:flex items-center gap-8 text-black">
            <Link to="/" className="hover:opacity-80">
              Home Link
            </Link>
            <Link to="/about" className="hover:opacity-80">
              About Us
            </Link>
            <Link to="/contact" className="hover:opacity-80">
              Contact Us
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="secondary"
              size="sm"
              className="border-black text-black"
            >
              Help
            </Button>
            <Button variant="primary" size="sm">
              Join
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

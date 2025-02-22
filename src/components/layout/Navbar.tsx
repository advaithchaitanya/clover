
import Button from "@/components/ui/button";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

export function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleJoinClick = () => {
    // We'll implement this with Supabase auth
    toast({
      title: "Coming Soon",
      description: "The authentication feature will be available soon!",
    });
  };

  return (
    <nav className="sticky top-0 z-50 bg-[rgba(238,238,238,1)] w-full shadow-md" role="navigation">
      <div className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap px-16 py-4 max-md:px-5">
        <div className="bg-white flex items-center gap-6">
          <Link to="/">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/547abc55e6e448d595cf41dc48be6c0f/9c3dc88250c5395efab500173559307bdd4a3854a4f75e214bc7a0db12854c81"
              alt="Logo"
              className="w-[118px] h-auto"
            />
          </Link>
        </div>

        <div className="flex items-center gap-4 text-base">
          <div className="hidden md:flex items-center gap-8 text-black">
            <button onClick={() => scrollToSection("features")} className="hover:text-purple-600">
              Features
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="hover:text-purple-600">
              Testimonials
            </button>
            <Link to="/resources" className="hover:text-purple-600">
              Resources
            </Link>
            <button onClick={() => scrollToSection("contact")} className="hover:text-purple-600">
              Contact
            </button>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/resources">
              <Button
                variant="secondary"
                size="sm"
                className="border-black text-black hover:text-white"
              >
                Sign In
              </Button>
            </Link>
            <Button 
              variant="primary" 
              size="sm"
              onClick={handleJoinClick}
            >
              Join
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

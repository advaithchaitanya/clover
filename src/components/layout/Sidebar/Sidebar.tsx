
import { Link } from "react-router-dom";
import { Home, MessageCircle, BookOpen, Menu } from "lucide-react";
import { useSidebar } from "./SidebarContext";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const { isExpanded, setIsExpanded } = useSidebar();

  const links = [
    { icon: Home, label: "Home", to: "/" },
    { icon: MessageCircle, label: "Click here to chat with AI", to: "/chat" },
    { icon: BookOpen, label: "Resources", to: "/resources" },
  ];

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen bg-black transition-all duration-300 ease-in-out",
        isExpanded ? "w-64" : "w-16",
      )}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex h-16 items-center justify-center border-b border-white">
        <Menu className="h-6 w-6 text-white" />
      </div>

      <nav className="mt-8">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="flex items-center px-4 py-3 text-white hover:bg-purple-600 transition-colors"
          >
            <link.icon className="h-6 w-6" />
            {isExpanded && (
              <span className="ml-4 text-sm font-medium">{link.label}</span>
            )}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

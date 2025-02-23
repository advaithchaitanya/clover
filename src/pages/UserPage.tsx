
import { useState, useEffect } from "react";
import Button from "@/components/ui/button";
import { Sidebar } from "@/components/layout/Sidebar/Sidebar";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { signUp, signIn, signOut } from "@/lib/supabase";
import { supabase } from "@/integrations/supabase/client";

export default function UserPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [session, setSession] = useState<any>(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setIsLoggedIn(!!session);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setIsLoggedIn(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (showLogin) {
        await signIn({ email: formData.email, password: formData.password });
      } else {
        await signUp({ email: formData.email, password: formData.password });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await signOut();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-orange-100 to-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-8">
          {isLoggedIn ? (
            <div className="max-w-2xl mx-auto mt-20 text-black">
              <h1 className="text-3xl font-bold mb-6">
                Welcome, {session?.user?.email}!
              </h1>
              <p className="text-lg mb-8">
                Please explore our resources or chat with our chat bot.
              </p>
              <div className="flex gap-4">
                <Button variant="primary" onClick={() => window.location.href = "/resources"}>
                  Explore Resources
                </Button>
                <Button variant="secondary" onClick={() => window.location.href = "/chat"}>
                  Chat with AI
                </Button>
                <Button variant="secondary" onClick={handleLogout} disabled={isLoading}>
                  {isLoading ? "Logging out..." : "Logout"}
                </Button>
              </div>
            </div>
          ) : (
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
              <h1 className="text-2xl font-bold mb-6 text-black">
                {showLogin ? "Login" : "Sign Up"}
              </h1>
              <form onSubmit={handleSubmit} className="space-y-6">
                {!showLogin && (
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-black mb-2">
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                      value={formData.username}
                      onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                      required
                    />
                  </div>
                )}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-black mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" variant="primary" className="w-full" disabled={isLoading}>
                  {isLoading ? "Processing..." : (showLogin ? "Login" : "Sign Up")}
                </Button>
                <div className="text-center mt-4">
                  <button
                    type="button"
                    onClick={() => setShowLogin(!showLogin)}
                    className="text-purple-600 hover:text-purple-800"
                  >
                    {showLogin ? "Need an account? Sign up" : "Already have an account? Login"}
                  </button>
                </div>
              </form>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}

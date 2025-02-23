
import { useState } from "react";
import Button from "@/components/ui/button";

export default function UserPage() {
  const [isLoggedIn] = useState(false); // This will be connected to auth state later
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-orange-100 to-white p-8">
        <div className="max-w-2xl mx-auto mt-20 text-black">
          <h1 className="text-3xl font-bold mb-6">
            Welcome, you are logged in!
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
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-100 to-white p-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 mt-20">
        <h1 className="text-2xl font-bold mb-6 text-black">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
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
          <Button type="submit" variant="primary" className="w-full">
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}

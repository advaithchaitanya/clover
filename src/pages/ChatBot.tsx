import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar/Sidebar";
import { useEffect } from "react";
export default function ChatBot() {
  useEffect(() => {
    // Inject Botpress scripts
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
    document.body.appendChild(script1);
    const script2 = document.createElement("script");
    script2.src = "https://files.bpcontent.cloud/2025/02/22/10/20250222103409-M68E1N0I.js";
    document.body.appendChild(script2);
    return () => {
      // Cleanup scripts when component unmounts
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);
  return <div className="min-h-screen bg-black">
      <Navbar />
      <Sidebar />
      <main className="ml-16 pt-16">
        <div className="container mx-auto px-4 py-[200px]">
          <h1 className="font-bold mb-8 text-3xl text-end text-sky-200">Chat with AI ,Click on the blue chat button to chat
Just say "Hey..."</h1>
          <p className="text-end font-bold text-6xl text-[#b206f0]">Your chatbot will appear here......</p>
        </div>
      </main>
    </div>;
}
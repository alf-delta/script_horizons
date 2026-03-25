import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";
import { supabase } from "./supabase";
import LoginScreen from "./LoginScreen";
import HorizonsScript from "../horizons-getaways-script.jsx";

function App() {
  const [session, setSession] = useState(undefined); // undefined = loading

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Loading state
  if (session === undefined) {
    return (
      <div style={{
        minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
        background: "#F0EDEB", fontFamily: "sans-serif", color: "#A8A09A"
      }}>
        Loading...
      </div>
    );
  }

  if (!session) {
    return <LoginScreen onAuth={setSession} />;
  }

  return <HorizonsScript session={session} />;
}

createRoot(document.getElementById("root")).render(<App />);

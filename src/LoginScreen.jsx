import { useState } from "react";
import { supabase } from "./supabase";

const BRICK = "#B34233";

export default function LoginScreen({ onAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error: authError } = isSignUp
      ? await supabase.auth.signUp({ email, password })
      : await supabase.auth.signInWithPassword({ email, password });

    setLoading(false);

    if (authError) {
      setError(authError.message);
      return;
    }

    if (isSignUp && data?.user?.identities?.length === 0) {
      setError("This email is already registered. Try signing in.");
      return;
    }

    if (isSignUp && !data.session) {
      setError("Check your email to confirm your account, then sign in.");
      return;
    }

    if (data.session) {
      onAuth(data.session);
    }
  };

  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      background: "#F0EDEB",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif"
    }}>
      <div style={{
        background: "#FFFFFF", borderRadius: "14px",
        border: "1px solid #E0DCDA",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        padding: "40px 36px", width: "380px"
      }}>
        <h1 style={{ fontSize: "20px", fontWeight: 700, color: BRICK, margin: "0 0 4px", letterSpacing: "-0.01em" }}>
          Horizons Getaways
        </h1>
        <p style={{ fontSize: "13px", color: "#A8A09A", margin: "0 0 28px" }}>
          {isSignUp ? "Create your manager account" : "Sign in to your dashboard"}
        </p>

        <form onSubmit={handleSubmit}>
          <label style={labelStyle}>Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={inputStyle}
            placeholder="manager@agency.com"
          />

          <label style={{ ...labelStyle, marginTop: "14px" }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            minLength={6}
            style={inputStyle}
            placeholder={isSignUp ? "Min 6 characters" : "Your password"}
          />

          {error && (
            <div style={{
              marginTop: "14px", padding: "10px 12px",
              background: "#FDF2F0", borderRadius: "8px",
              fontSize: "12.5px", color: "#C4553A", lineHeight: 1.4
            }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%", marginTop: "20px",
              padding: "11px", borderRadius: "8px",
              background: loading ? "#D4776B" : BRICK,
              color: "#fff", border: "none",
              fontSize: "14px", fontWeight: 600,
              cursor: loading ? "default" : "pointer"
            }}
          >
            {loading ? "..." : isSignUp ? "Create Account" : "Sign In"}
          </button>
        </form>

        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <button
            onClick={() => { setIsSignUp(!isSignUp); setError(null); }}
            style={{
              background: "none", border: "none",
              color: "#6B7280", fontSize: "12.5px",
              cursor: "pointer", textDecoration: "underline",
              textUnderlineOffset: "3px"
            }}
          >
            {isSignUp ? "Already have an account? Sign in" : "Need an account? Sign up"}
          </button>
        </div>
      </div>
    </div>
  );
}

const labelStyle = {
  display: "block", fontSize: "12px", fontWeight: 600,
  color: "#6B7280", marginBottom: "5px"
};

const inputStyle = {
  width: "100%", padding: "10px 12px",
  border: "1px solid #E0DCDA", borderRadius: "7px",
  fontSize: "14px", color: "#374151",
  background: "#FAFAF9", outline: "none",
  fontFamily: "inherit", boxSizing: "border-box"
};

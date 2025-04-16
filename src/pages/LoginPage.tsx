
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar/Navbar";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { LogIn, Users } from "lucide-react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRcoMember, setIsRcoMember] = useState(false);
  const { loginUser, loading, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Pass the isRcoMember flag to the loginUser function
    const success = await loginUser(email, password, isRcoMember);
    if (success) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-roslis-background">
      <Navbar />
      <div className="container mx-auto p-8 flex justify-center items-center">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-roslis-primary">
            {isRcoMember ? "RCO Member Login" : "Login to ROSLIS"}
          </h2>
          
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Button
              type="button"
              variant={!isRcoMember ? "default" : "outline"} 
              className={!isRcoMember ? "bg-roslis-primary" : "border-roslis-primary text-roslis-primary"}
              onClick={() => setIsRcoMember(false)}
            >
              <LogIn className="mr-2 h-4 w-4" /> Login
            </Button>
            <Button
              type="button"
              variant={isRcoMember ? "default" : "outline"}
              className={isRcoMember ? "bg-roslis-primary" : "border-roslis-primary text-roslis-primary"}
              onClick={() => setIsRcoMember(true)}
            >
              <Users className="mr-2 h-4 w-4" /> RCO Sign Up
            </Button>
          </div>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-roslis-secondary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-roslis-secondary"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-roslis-primary text-white py-2 px-4 rounded-md hover:bg-roslis-secondary transition-colors"
              disabled={loading}
            >
              {loading ? "Logging in..." : isRcoMember ? "Login as RCO Member" : "Login"}
            </button>
          </form>
          
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-roslis-secondary hover:underline">
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

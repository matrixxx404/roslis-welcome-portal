
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-roslis-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          ROSLIS
        </Link>
        <div className="flex gap-4">
          <Link to="/login">
            <Button variant="outline" className="text-white border-white hover:bg-roslis-secondary">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-roslis-secondary hover:bg-roslis-accent hover:text-roslis-primary">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

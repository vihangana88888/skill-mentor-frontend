import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router";
import { useAuth } from "@/lib/auth-context";
import SkillMentorLogo from "@/assets/logo.webp";

export function Navigation() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 py-2 text-white w-full bg-black backdrop-blur supports-[backdrop-filter]:bg-black/90">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <img
              src={SkillMentorLogo}
              alt="SkillMentor Logo"
              className="size-12 rounded-full"
            />
            <span className="font-semibold text-xl">SkillMentor</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/" className="hover:text-primary transition-colors">
              Tutors
            </Link>
            <Link to="/" className="hover:text-primary transition-colors">
              About Us
            </Link>
            <Link to="/" className="hover:text-primary transition-colors">
              Resources
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
              <Button onClick={handleLogout} variant="ghost">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link to="/login">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Sign up
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

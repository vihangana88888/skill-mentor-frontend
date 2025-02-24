import { MentorCard } from "@/components/MentorCard";
import { MOCK_MENTORS } from "@/lib/mockData";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center justify-center space-y-8 text-center py-8">
        <div className="space-y-2">
          <h1 className="text-3xl tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Find your SkillMentor
          </h1>
          <p className="mx-auto    text-gray-500 md:text-xl dark:text-gray-400">
            Empower your career with personalized mentorship for AWS Developer{" "}
            <br />
            Associate, Interview Prep, and more.
          </p>
        </div>

        <Link to="/login">
          <Button size="lg" className="text-xl">
            Sign up to see all tutors
          </Button>
        </Link>
      </div>

      <div className="space-y-8 mt-8 mx-auto bg-background">
        <h1 className="text-5xl">Schedule a Call</h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MOCK_MENTORS.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </div>
      </div>
    </div>
  );
}

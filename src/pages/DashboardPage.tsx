import { useEffect, useState, useCallback } from "react";
import { useAuth } from "@clerk/clerk-react";
import { CalendarDays } from "lucide-react";
import { StatusPill } from "@/components/StatusPill";
import { storage } from "@/lib/storage";
import { Course } from "@/lib/types";
import { useNavigate } from "react-router";

export default function DashboardPage() {
  const { isLoaded, isSignedIn } = useAuth();
  const [courses, setCourses] = useState<Course[]>([]);
  const router = useNavigate();

  const updateCourses = useCallback(() => {
    const currentCourses = storage.getEnrolledCourses();
    setCourses(currentCourses);
  }, []);

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      updateCourses();
      const interval = setInterval(updateCourses, 1000);
      return () => clearInterval(interval);
    }
  }, [isLoaded, isSignedIn, updateCourses]);

  if (!isLoaded) {
    return (
      <div className="container py-10">
        <div className="flex items-center justify-center">
          <div className="text-lg">Loading...</div>
        </div>
      </div>
    );
  }
  if (!isSignedIn) {
    router("/login");
  }

  if (!courses.length) {
    return (
      <div className="container py-10">
        <h1 className="text-3xl font-bold tracking-tight mb-6">My Courses</h1>
        <p className="text-muted-foreground">No courses enrolled yet.</p>
      </div>
    );
  }

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold tracking-tight mb-6">My Courses</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course.id}
            className="rounded-2xl p-6 relative overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600"
          >
            {/* Status Pill */}
            <div className="absolute top-4 right-4">
              <StatusPill status={course.status} />
            </div>

            {/* Profile Image */}
            <div className="size-24 rounded-full bg-white/10 mb-4">
              <img
                src={course.mentorImageUrl}
                alt={course.mentorName}
                className="w-full h-full rounded-full object-cover object-top"
              />
            </div>

            {/* Course Info */}
            <div className="space-y-1">
              <h2 className="text-xl font-semibold text-white">
                {course.courseTitle}
              </h2>
              <p className="text-blue-100/80">Mentor: {course.mentorName}</p>
              <div className="flex items-center text-blue-100/80 text-sm mt-2">
                <CalendarDays className="mr-2 h-4 w-4" />
                Next Session:{" "}
                {new Date(course.nextSession).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

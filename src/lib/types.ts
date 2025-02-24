export interface Mentor {
  id: string;
  name: string;
  positiveReviews: number;
  location: string;
  locationImgUrl: string;
  startYear: string;
  imageUrl: string;
  bio: string;
  isCertified: boolean;
  enrollments: number;
}

export interface Course {
  id: string;
  title: string;
  mentor: string;
  imageUrl: string;
  status: "pending" | "accepted" | "completed" | "cancelled";
  nextSession: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  sessions: any[];
  enrolledCourses: Course[];
}

export interface Mentor {
  id: string;
  courseTitle: string;
  description: string;
  mentorName: string;
  mentorImageUrl: string;
  mentorCompany: string;
  courseImageUrl: string;
  startYear: string;
  positiveReviews: number;
  enrollments: number;
  isCertified: boolean;
}

export interface Course {
  id: string;
  courseTitle: string;
  mentorName: string;
  mentorImageUrl: string;
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

export interface MentorClass {
  class_room_id: number;
  title: string;
  enrolled_student_count: number;
  mentor: {
    mentor_id: number;
    clerk_mentor_id: string;
    first_name: string;
    last_name: string;
    address: string;
    email: string;
    title: string;
    session_fee: number;
    profession: string;
    subject: string;
    phone_number: string;
    qualification: string;
  };
}

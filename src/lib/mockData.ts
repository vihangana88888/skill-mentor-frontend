import { Course, Mentor, User } from "./types";
import Mentor1Img from "@/assets/mentor-1.webp";
import AWSCertified1Img from "@/assets/aws-certified.webp";

export const MOCK_MENTORS: Mentor[] = [
  {
    id: "1",
    courseTitle: "AWS Developer Associate Exam Prep",
    description:
      "Hi! I'm Michelle. Language lover and tutor of English. I specialize in AWS certification preparation and have helped over 150 students achieve their AWS Developer Associate certification. With my background in cloud computing and software development, I can provide practical insights and real-world examples to help you understand complex concepts. I also offer mock interviews and hands-on coding sessions.",
    mentorName: "Michelle Burns",
    mentorImageUrl: Mentor1Img,
    courseImageUrl: AWSCertified1Img,
    startYear: "2025",
    positiveReviews: 99,
    isCertified: false,
    enrollments: 158,
  },
  {
    id: "2",
    courseTitle: "System Design Interview",
    description:
      "Hi! I live in the Midlands in the UK. I am interested in technology and have been working as a Tech Lead for over 8 years. I specialize in system design interviews and have helped numerous candidates secure positions at top tech companies. My sessions focus on practical architecture patterns, scalability concepts, and real-world engineering challenges. I also provide detailed feedback and improvement strategies.",
    mentorName: "Ronnie UK",
    mentorImageUrl: Mentor1Img,
    courseImageUrl: AWSCertified1Img,
    startYear: "2025",
    positiveReviews: 100,
    isCertified: true,
    enrollments: 158,
  },
  {
    id: "3",
    courseTitle: "React Advanced Patterns",
    description:
      "Hello! I'm a Senior Software Engineer specializing in React and Frontend Architecture. I've helped over 100 developers improve their frontend skills and prepare for technical interviews at major tech companies.",
    mentorName: "Sarah Chen",
    mentorImageUrl: Mentor1Img,
    courseImageUrl: AWSCertified1Img,
    startYear: "2025",
    positiveReviews: 95,
    isCertified: true,
    enrollments: 112,
  },
  {
    id: "4",
    courseTitle: "Python Data Structures & Algorithms",
    description:
      "Python expert and Machine Learning enthusiast. I focus on helping students master data structures, algorithms, and prepare for coding interviews. Former FAANG engineer with 7 years of experience.",
    mentorName: "Alex Thompson",
    mentorImageUrl: Mentor1Img,
    courseImageUrl: AWSCertified1Img,
    startYear: "2025",
    positiveReviews: 98,
    isCertified: true,
    enrollments: 203,
  },
];

export const MOCK_ENROLLED_COURSES: Course[] = [
  {
    id: "1",
    courseTitle: "AWS Developer Associate Certification",
    mentorName: "Michelle Burns",
    mentorImageUrl: Mentor1Img,
    status: "accepted",
    nextSession: "2025-03-01T10:00:00Z",
  },
  {
    id: "2",
    courseTitle: "System Design Interview Prep",
    mentorName: "Ronnie UK",
    mentorImageUrl: Mentor1Img,
    status: "pending",
    nextSession: "2025-03-03T15:00:00Z",
  },
  {
    id: "3",
    courseTitle: "React Advanced Patterns",
    mentorName: "Sarah Chen",
    mentorImageUrl: Mentor1Img,
    status: "completed",
    nextSession: "2024-03-04T11:00:00Z",
  },
];

export const MOCK_USER: User = {
  id: "1",
  name: "Demo User",
  email: "demo@skillmentor.com",
  sessions: [],
  enrolledCourses: MOCK_ENROLLED_COURSES,
};

import { Course, Mentor, User } from "./types";
import Mentor1Img from "@/assets/mentor-1.webp";
import AWSCertified1Img from "@/assets/aws-certified.webp";

export const MOCK_MENTORS: Mentor[] = [
  {
    id: "1",
    name: "AWS Developer Associate Exam Prep",
    positiveReviews: 99,
    location: "Michelle Burns",
    locationImgUrl: Mentor1Img,
    startYear: "2025",
    imageUrl: AWSCertified1Img,
    bio: "Hi! I'm Michelle. Language lover and tutor of English. I specialize in AWS certification preparation and have helped over 150 students achieve their AWS Developer Associate certification. With my background in cloud computing and software development, I can provide practical insights and real-world examples to help you understand complex concepts. I also offer mock interviews and hands-on coding sessions.",
    isCertified: false,
    enrollments: 158,
  },
  {
    id: "2",
    name: "System Design Interview ",
    positiveReviews: 100,
    location: "Ronnie UK",
    locationImgUrl: Mentor1Img,
    startYear: "2025",
    imageUrl: AWSCertified1Img,
    bio: "Hi! I live in the Midlands in the UK. I am interested in technology and have been working as a Tech Lead for over 8 years. I specialize in system design interviews and have helped numerous candidates secure positions at top tech companies. My sessions focus on practical architecture patterns, scalability concepts, and real-world engineering challenges. I also provide detailed feedback and improvement strategies.",
    isCertified: true,
    enrollments: 158,
  },
  {
    id: "3",
    name: "React Advanced Patterns",
    positiveReviews: 95,
    location: "Sarah Chen",
    locationImgUrl: Mentor1Img,
    startYear: "2025",
    imageUrl: AWSCertified1Img,
    bio: "Hello! I'm a Senior Software Engineer specializing in React and Frontend Architecture. I've helped over 100 developers improve their frontend skills and prepare for technical interviews at major tech companies.",
    isCertified: true,
    enrollments: 112,
  },
  {
    id: "4",
    name: "Python Data Structures & Algorithms",
    positiveReviews: 98,
    location: "Alex Thompson",
    locationImgUrl: Mentor1Img,
    startYear: "2025",
    imageUrl: AWSCertified1Img,
    bio: "Python expert and Machine Learning enthusiast. I focus on helping students master data structures, algorithms, and prepare for coding interviews. Former FAANG engineer with 7 years of experience.",
    isCertified: true,
    enrollments: 203,
  },
];

export const MOCK_ENROLLED_COURSES: Course[] = [
  {
    id: "1",
    title: "AWS Developer Associate Certification",
    mentor: "Michelle Burns",
    imageUrl: Mentor1Img,
    status: "accepted",
    nextSession: "2025-03-01T10:00:00Z",
  },
  {
    id: "2",
    title: "System Design Interview Prep",
    mentor: "Ronnie UK",
    imageUrl: Mentor1Img,
    status: "pending",
    nextSession: "2025-03-03T15:00:00Z",
  },
  {
    id: "3",
    title: "React Advanced Patterns",
    mentor: "Sarah Chen",
    imageUrl: Mentor1Img,
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

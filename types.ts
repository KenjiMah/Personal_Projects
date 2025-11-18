export enum QuestionType {
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  SCENARIO = 'SCENARIO'
}

export enum ExamMode {
  PRACTICE = 'PRACTICE', // Immediate feedback
  SIMULATION = 'SIMULATION' // Feedback at end
}

export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  domain: string; // e.g., "1.0 General Security Concepts"
  text: string;
  type: QuestionType;
  options: Option[];
  correctOptionId: string;
  explanation: string;
}

export interface ExamSession {
  id: string;
  questions: Question[];
  answers: Record<string, string>; // questionId -> optionId
  flags: Record<string, boolean>; // questionId -> isFlagged
  startTime: number;
  endTime?: number;
  mode: ExamMode;
}

export interface DomainStats {
  name: string;
  totalQuestions: number;
  correct: number;
}

export enum SecurityDomain {
  GENERAL = "1.0 General Security Concepts",
  THREATS = "2.0 Threats, Vulnerabilities, and Mitigations",
  ARCHITECTURE = "3.0 Security Architecture",
  OPERATIONS = "4.0 Security Operations",
  MANAGEMENT = "5.0 Security Program Management and Oversight"
}
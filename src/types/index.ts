import { Timestamp } from "firebase/firestore";

export type UserRole = "student" | "tutor";
export type PaymentStatus = "pending" | "approved" | "rejected";
export type RegistrationStatus =
  | "pending"
  | "active"
  | "cancelled";

export type UserStatus = "active" | "inactive";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  phone: string;
  status: UserStatus;
  created_at: Timestamp;
  updated_at: Timestamp;

  
}

export interface ProofOfPayment {
  id: string;
  student_id: string;
  file_url: string;
  month: string;
  status: PaymentStatus;
  reviewed_by?: string;
  reviewed_at?: string;
  comment?: string;
  uploaded_at: string;
}

export interface Material {
  id: string;
  tutor_id: string;
  title: string;
  file_url: string;
}

export interface Schedule {
  id: string;
  tutor_id: string;
  student_id: string;
  class_time: string;
  topic: string;
}

export interface Module {
  id: string;
  code: string;
  name: string;
  description?: string;
  tutor_id: string;
  created_at: string;
}

export interface Registration {
  id: string;
  student_id: string;
  tutor_id: string;
  module_id: string;
  status: RegistrationStatus;
  start_date: string;
  end_date?: string;
}


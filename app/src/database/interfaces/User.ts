export interface User {
  id: number;
  email: string;
  is_email_verified: boolean;
  password: string;
  firstname?: string;
  lastname?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

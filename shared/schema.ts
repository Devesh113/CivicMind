import { z } from "zod";

// User type definitions
export interface User {
  id: string;
  username: string;
  password: string;
}

// Validation schema for creating a user
export const insertUserSchema = z.object({
  username: z.string().min(3).max(50),
  password: z.string().min(6),
});

export type InsertUser = z.infer<typeof insertUserSchema>;

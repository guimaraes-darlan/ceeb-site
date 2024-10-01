import { z } from "zod";

export const parseErrors = (errors: z.ZodIssue[]) => {
  const messages: string[] = [];

  errors.forEach(error => {
    messages.push(error.message);
  });

  return messages;
}
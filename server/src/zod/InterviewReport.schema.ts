import { z } from "zod";

export const InterviewReportSchema = z.object({
  technicalQuestions: z.array(
    z.object({
      question: z.string().describe("Technical question asked"),
      intention: z.string().describe("Why the interviewer asked this"),
      answer: z.string().describe("Candidate answer")
    })
  ),

  behavioralQuestions: z.array(
    z.object({
      question: z.string().describe("Behavioral question asked"),
      intention: z.string().describe("What behavior was evaluated"),
      answer: z.string().describe("Candidate answer")
    })
  ),

  skillGaps: z.array(
    z.object({
      skill: z.string(),
      severity: z.enum(["low", "medium", "high"])
    })
  ),

  preparationPlan: z.array(
    z.object({
      day: z.number(),
      tasks: z.array(z.string()),
      focus: z.string()
    })
  )
});

export type InterviewReport = z.infer<typeof InterviewReportSchema>;
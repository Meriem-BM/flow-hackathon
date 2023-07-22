import * as z from "zod";

export const PlayerSchema = z.object({
  firstname: z.string().nonempty(),
  lastname: z.string().nonempty(),
  goal: z.number().min(0),
  salary: z.number(),
  devise: z.string(),
  pictureURL: z.string(),
});
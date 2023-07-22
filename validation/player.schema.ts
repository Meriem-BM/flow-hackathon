import * as z from "zod";

export const PlayerSchema = z.object({
  firstname: z.string().nonempty().toLowerCase(),
  lastname: z.string().nonempty().toLowerCase(),
  goal: z.number().min(0),
  salary: z.number().min(0),
  devise: z.enum(["$", "€", "MAD", "Fr"]),
  pictureURL: z.string().optional(),
});
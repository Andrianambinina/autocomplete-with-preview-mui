import { z } from "zod";
import { teamSchema } from "../utils/validations/teamValidations";

export interface ITeam {
  member: string;
}

export type ITeamInput = z.infer<typeof teamSchema>;

import { z } from "zod";

// export const teamSchema = z.object({
//   members: z.any()
// });

export const teamSchema = z.object({
  members: z.object({
    id: z.string(),
    label: z.string(),
    value: z.object({
      objectId: z.string(),
      username: z.string(),
      email: z.string()
    })
  })
});

// export const teamSchema = z.object({
//   id: z.string(),
//   label: z.string(),
//   value: z.object({
//     objectId: z.string(),
//     username: z.string(),
//     email: z.string()
//   })
// });

// export const teamSchema = z.object({
//   id: z.string().min(1),
//   label: z.string().min(1),
//   value: z
//     .object({
//       objectId: z.string().min(1),
//       username: z.string().min(1),
//       email: z.string().min(1)
//     })
//     .required()
// });

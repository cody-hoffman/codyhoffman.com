"use server";
import { z } from "zod";

const messageSchema = z.object({
  email: z.string().email(),
  message: z.string(),
});

export const sendMessage = async (formData: FormData) => {
  const { email, message } = messageSchema.parse(Object.fromEntries(formData));

  const response = await fetch(process.env.ZAPIER_WEBHOOK_URL!, {
    method: "POST",
    body: JSON.stringify({ email, message }),
  });

  return { ok: response.ok };
};

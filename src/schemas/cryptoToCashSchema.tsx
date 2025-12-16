
import { z } from "zod";


export const cryptoToCashSchemaStep1 = z.object({
  payFromWallet: z.string().min(1, "Select a wallet"),
  payToWallet: z.string().min(1, "Select a recipient"),
});


export const cryptoToCashSchemaStep2 = z.object({
  bank: z.string().min(1, "Bank is required"),
  accountNumber: z.string().min(1, "Account number is required"),
  accountName: z.string().min(1, "Account name is required"),
 
});

export const cryptoToCashSchemaStep3 = z.object({

  recipientEmail: z.string().email("Invalid email address"),
  recipientPhoneNumber: z.string().min(1, "Phone number is required"),
});


export type CryptoToCashForm = z.infer<typeof cryptoToCashSchemaStep1> &
  z.infer<typeof cryptoToCashSchemaStep2> &
  z.infer<typeof cryptoToCashSchemaStep3>;

import { create } from "zustand";
import { CryptoToCashForm } from "@/schemas/cryptoToCashSchema";

interface CryptoToCashState {
  step: "form" | "recipient" | "recipientContact" | "review" | "confirmation";
  formData?: CryptoToCashForm;
  setFormDataAndNextStep: (data: Partial<CryptoToCashForm>, nextStep: CryptoToCashState["step"]) => void;
  reset: () => void;
}

export const useCryptoToCashStore = create<CryptoToCashState>((set) => ({
  step: "form",
  formData: undefined,

  setFormDataAndNextStep: (data, nextStep) =>
    set((state) => ({
      formData: { ...(state.formData || {}), ...data } as CryptoToCashForm,
      step: nextStep,
    })),

  reset: () =>
    set({
      step: "form",
      formData: undefined,
    }),
}));

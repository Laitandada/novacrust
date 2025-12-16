import { ComboboxCoin } from "@/components/global/ComboBoxCoin";
import { ComboboxCurrency } from "@/components/global/ComboBoxCurrency";
import Wallet from "@/components/global/Wallets";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import RecipientDetails from "./RecipientDetails";
import { useCryptoToCashStore } from "@/store/cryptoToCashStore";
import {
  CryptoToCashForm,
  cryptoToCashSchemaStep1,
} from "@/schemas/cryptoToCashSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Loader from "./Loader";
import RecipientContact from "./RecipientContact";
import Review from "./Review";
import Confirmation from "./Confirmation";
import { recipientOptions, wallets } from "@/data/wallets";

type Props = {};

const CryptoToCash = (props: Props) => {
  const step = useCryptoToCashStore((state) => state.step);
  const setFormDataAndNextStep = useCryptoToCashStore(
    (state) => state.setFormDataAndNextStep
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  console.log(step);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CryptoToCashForm>({
    resolver: zodResolver(cryptoToCashSchemaStep1),
    defaultValues: {
      payFromWallet: "",
      payToWallet: "",
    },
  });

  const onSubmit = (data: CryptoToCashForm) => {
    setIsSubmitting(true);

    setFormDataAndNextStep(data, "recipient");
    setIsSubmitting(false);
  };

  if (step === "recipient") return <RecipientDetails />;
  if (step === "recipientContact") return <RecipientContact />;
  if (step === "review") return <Review />;
  if (step === "confirmation") return <Confirmation />;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="flex flex-col w-full max-h-[112px] gap-2 mt-10 border p-6 rounded-md">
        <div>
          <p className="font-Outfit text-base font-medium  text-input_text">
            You pay
          </p>
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="font-Outfit text-2xl font-semibold text-[#000E10] w-min">
            1.00
          </p>
          <ComboboxCoin />
        </div>
      </div>
      <div className="flex flex-col w-full max-h-[112px] gap-2 mt-10 border p-6 rounded-md">
        <div>
          <p className="font-Outfit text-base font-medium  text-input_text">
            You recieve
          </p>
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="font-Outfit text-2xl font-semibold text-[#000E10] w-min">
            1.00
          </p>
          <ComboboxCurrency />
        </div>
      </div>
      <div className="flex flex-col w-full  gap-2 mt-6  ">
        <div className="pb-4">
          <p className="font-Outfit text-base font-medium  text-primary">
            Pay from
          </p>
        </div>

        <Wallet
          value={watch("payFromWallet")}
          onChange={(val) =>
            setValue("payFromWallet", val, { shouldValidate: true })
          }
          wallets={wallets}
        />
        {errors.payFromWallet && (
          <p className="text-red-500 font-Outfit text-xs font-normal ">
            {errors.payFromWallet.message}
          </p>
        )}
      </div>
      <div className="flex flex-col w-full  gap-2 mt-6  ">
        <div className="pb-4">
          <p className="font-Outfit text-base font-medium  text-primary">
            Pay to
          </p>
        </div>

        <Wallet
          value={watch("payToWallet")}
          onChange={(val) =>
            setValue("payToWallet", val, { shouldValidate: true })
          }
          wallets={recipientOptions}
        />
        {errors.payToWallet && (
          <p className="text-red-500 font-Outfit text-xs font-normal ">
            {errors.payToWallet.message}
          </p>
        )}
      </div>
      <Button
        type="submit"
        className="w-full h-[60px] mt-10 mb-10 md:mb-14  "
        disabled={
          // !watch("payFromWallet") ||
          // !watch("payToWallet") ||
          isSubmitting
        }
      >
        {isSubmitting ? <Loader /> : "Convert now"}
      </Button>
    </form>
  );
};

export default CryptoToCash;

import { ArrowLeftIcon } from "lucide-react";
import React, { useState } from "react";
import Wallet from "./Wallets";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCryptoToCashStore } from "@/store/cryptoToCashStore";
import {
  CryptoToCashForm,
  cryptoToCashSchemaStep2,
} from "@/schemas/cryptoToCashSchema";
import { useForm } from "react-hook-form";
import RecipientContact from "./RecipientContact";
import { payToBanks, wallets } from "@/data/wallets";

type Props = {};

const RecipientDetails = (props: Props) => {
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
    resolver: zodResolver(cryptoToCashSchemaStep2),
    defaultValues: {
      bank: "",
      accountNumber: "",
      accountName: "ODUTUGA GBEKE",
    },
  });

  const onSubmit = (data: CryptoToCashForm) => {
    setIsSubmitting(true);

    setFormDataAndNextStep(data, "recipientContact");
    setIsSubmitting(false);
  };

  if (step === "recipientContact") return <RecipientContact />;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="flex justify-center items-center pb-10 w-full">
        <ArrowLeftIcon
          className="w-6 h-6 text-primary cursor-pointer"
          onClick={() => {
            setFormDataAndNextStep({}, "form");
          }}
        />
        <p className="font-Outfit text-xl font-medium text-primary ml-4 w-full text-center">
          Recipient Details
        </p>
      </div>

      <div className="flex flex-col w-full  gap-2 ]  ">
        <div className="pb-4">
          <p className="font-Outfit text-base font-medium  text-primary">
            Bank
          </p>
        </div>

        <Wallet
          wallets={payToBanks}
          value={watch("bank")}
          onChange={(val) => setValue("bank", val, { shouldValidate: true })}
        />
        {errors.bank && (
          <p className="text-red-500 font-Outfit text-xs font-normal ">
            {errors.bank.message}
          </p>
        )}
      </div>
      <div className="flex flex-col w-full  gap-2 mt-6  ">
        <div className="pb-4">
          <p className="font-Outfit text-base font-medium  text-primary">
            Account Number
          </p>
        </div>

        <Input
          placeholder="Enter account number"
          className="w-full h-[60px] bg-white border  rounded-md font-Outfit text-primary text-base"
          {...register("accountNumber")}
        />
        {errors.accountNumber && (
          <p className="text-red-500 font-Outfit text-xs font-normal ">
            {errors.accountNumber.message}
          </p>
        )}
      </div>
      <div className="flex flex-col w-full  gap-2 mt-6  mb-[120px] md:mb-[225px]  ">
        <div className="pb-4">
          <p className="font-Outfit text-base font-medium  text-primary ">
            Account Name
          </p>
        </div>
        <Input
          placeholder="Enter account name"
          className="w-full h-[60px] bg-[#F2F2F2] border rounded-md font-Outfit text-primary text-base"
          readOnly
          {...register("accountName")}
        />

        {errors.accountName && (
          <p className="text-red-500 font-Outfit text-xs font-normal ">
            {errors.accountName.message}
          </p>
        )}
      </div>

      <Button type="submit" className="w-full h-[60px] mt-20 mb-10">
        Next
      </Button>
    </form>
  );
};

export default RecipientDetails;

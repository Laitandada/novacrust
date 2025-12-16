import { ArrowLeftIcon } from "lucide-react";
import React, { useState } from "react";
import Wallet from "./Wallets";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCryptoToCashStore } from "@/store/cryptoToCashStore";
import {
  CryptoToCashForm,
  cryptoToCashSchemaStep3,
} from "@/schemas/cryptoToCashSchema";
import { Controller, useForm } from "react-hook-form";
import Review from "./Review";
import { isValidPhoneNumber } from "react-phone-number-input";
import PhoneInput from "react-phone-number-input";

type Props = {};

const RecipientContact = (props: Props) => {
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
    resolver: zodResolver(cryptoToCashSchemaStep3),
    defaultValues: {
      recipientEmail: "",
      recipientPhoneNumber: "",
    },
  });

  const onSubmit = (data: CryptoToCashForm) => {
    console.log("onsubit");

    setIsSubmitting(true);

    setFormDataAndNextStep(data, "review");
    setIsSubmitting(false);
  };

  if (step === "review") return <Review />;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="flex justify-center items-center pb-10 w-full">
        <ArrowLeftIcon
          className="w-6 h-6 text-primary cursor-pointer"
          onClick={() => {
            setFormDataAndNextStep({}, "recipient");
          }}
        />
        <p className="font-Outfit text-xl font-medium text-primary ml-4 w-full text-center">
          Recipient Details
        </p>
      </div>

      <div className="flex flex-col w-full  gap-2 mt-6  ">
        <div className="pb-4">
          <p className="font-Outfit text-base font-medium  text-primary">
            Recipient Email
          </p>
        </div>

        <Input
          placeholder="Enter recipient email"
          className="w-full h-[60px] bg-white border  rounded-md font-Outfit text-primary text-base"
          value={watch("recipientEmail")}
          {...register("recipientEmail")}
        />
        {errors.recipientEmail && (
          <p className="text-red-500 font-Outfit text-xs font-normal ">
            {errors.recipientEmail.message}
          </p>
        )}
      </div>
      <div className="flex flex-col w-full  gap-2 mt-6  mb-[225px]  ">
        <div className="pb-4">
          <p className="font-Outfit text-base font-medium  text-primary ">
            Recipient Phone Number
          </p>
        </div>
        <div className="rounded-md border w-full h-[60px] flex items-center  bg-white">
          <PhoneInput
            country="NG"
            defaultCountry="NG"
            placeholder="Enter phone number"
            className="  h-full     custom-phone-input"
            value={undefined}
            onChange={() => {}}
            international={true}
          />

          <Input
            placeholder="000-0000-00000"
            className="w-full h-full bg-white border-0    font-Outfit text-primary text-base"
            value={watch("recipientPhoneNumber")}
            {...register("recipientPhoneNumber")}
          />
        </div>

        {errors.recipientPhoneNumber && (
          <p className="text-red-500 font-Outfit text-xs font-normal ">
            {errors.recipientPhoneNumber.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full h-[60px] mt-20 mb-10"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Next"}
      </Button>
    </form>
  );
};

export default RecipientContact;

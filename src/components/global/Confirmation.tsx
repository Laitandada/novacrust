import { useCryptoToCashStore } from "@/store/cryptoToCashStore";
import { ArrowLeftIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import toast from "react-hot-toast";

type Props = {};

const Confirmation = (props: Props) => {
  const step = useCryptoToCashStore((state) => state.step);
  const setFormDataAndNextStep = useCryptoToCashStore(
    (state) => state.setFormDataAndNextStep
  );

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center mt-4 pb-16 w-full">
        <Image
          src="/images/icons/logo.svg"
          alt="copy"
          width={177}
          height={24}
          className=" mx-auto"
        />
      </div>

      <div className="flex justify-center items-center w-full">
        <Image
          src="/images/icons/check.svg"
          alt="copy"
          width={65}
          height={65}
          className=" mx-auto"
        />
      </div>

      <p className="font-Outfit text-2xl font-medium text-[#000E10] mt-8 w-full text-center">
        Your transaction is processing.
      </p>
      <p className="font-Outfit text-sm font-normal text-[#4F4F4F] text-center mt-2">
        The recipient will receive it shortly.
      </p>

      <div className="flex flex-col w-full gap-6 bg-[#F7F7F7] mt-16 px-6 py-4 rounded-[10px]">
        <div className="flex justify-between items-center">
          <p className="font-Outfit text-sm font-normal text-[#4F4F4F]">
            Transaction ID
          </p>
          <p
            className="font-Outfit text-base font-normal text-primary flex gap-2 cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText("NC123456789");
              toast.success("Transaction ID copied to clipboard");
            }}
          >
            NC123456789{" "}
            <Image
              src="/images/icons/copy.svg"
              alt="copy"
              width={24}
              height={24}
              className=" mx-auto"
            />
          </p>
        </div>
      </div>

      <Button
        className="w-full h-[60px] mt-20 mb-[135px] border-0 bg-white text-primary  border-primary hover:text-white"
        onClick={() => {
          setFormDataAndNextStep({}, "form");
        }}
      >
        Go back to home
      </Button>
    </div>
  );
};

export default Confirmation;

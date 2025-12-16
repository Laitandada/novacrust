import { useCryptoToCashStore } from "@/store/cryptoToCashStore";
import { ArrowLeftIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import toast from "react-hot-toast";

type Props = {};

const Review = (props: Props) => {
  const step = useCryptoToCashStore((state) => state.step);
  const setFormDataAndNextStep = useCryptoToCashStore(
    (state) => state.setFormDataAndNextStep
  );

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center pb-10 w-full">
        <ArrowLeftIcon
          className="w-6 h-6 text-primary cursor-pointer"
          onClick={() => {
            setFormDataAndNextStep({}, "recipientContact");
          }}
        />
        <p className="font-Outfit text-xl font-medium text-primary ml-4 w-full text-center">
          Send ETH to the address below
        </p>
      </div>

      <div
        className="flex justify-center items-center w-full cursor-pointer"
        onClick={() => {
          navigator.clipboard.writeText("4LiV4YjbxsL6739MKghUd");
          toast.success("Address copied to clipboard");
        }}
      >
        <div className="bg-[#E6FBF2] border-[#CCF6E5] h-[40px] max-w-[250px] rounded-md px-4 py-2 flex justify-center items-center gap-2">
          <p className="font-Outfit font-medium text-base text-primary ">
            4LiV4YjbxsL6739MKghUd
          </p>
          <Image
            src="/images/icons/copy.svg"
            alt="copy"
            width={24}
            height={24}
            className=" mx-auto"
          />
        </div>
      </div>

      <div className="flex flex-col w-full gap-6 bg-[#F7F7F7] mt-16 px-6 py-4 rounded-[10px]">
        <div className="flex justify-between items-center">
          <p className="font-Outfit text-sm font-normal text-[#4F4F4F]">
            Amount to send
          </p>
          <p className="font-Outfit text-base font-normal text-primary flex gap-2">
            100 ETH{" "}
            <Image
              src="/images/icons/copy.svg"
              alt="copy"
              width={24}
              height={24}
              className=" mx-auto"
            />
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-Outfit text-sm font-normal text-[#4F4F4F]">
            Network
          </p>
          <p className="font-Outfit text-base font-normal text-primary">ETH</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-Outfit text-sm font-normal text-[#4F4F4F]">
            Wallet
          </p>
          <p className="font-Outfit text-base font-normal text-primary">
            Other
          </p>
        </div>
      </div>

      <div className="flex items-start gap-2 mt-6 mb-32">
        <Image
          src="/images/icons/info.svg"
          alt="copy"
          width={24}
          height={24}
          className=" mx-auto"
        />
        <p className="font-Outfit text-sm font-normal text-[#4F4F4F]">
          Only send USDT to this address. Ensure the sender is on the CELO
          network otherwise you might lose your deposit
        </p>
      </div>

      <Button
        className="w-full h-[60px] mt-20 mb-10"
        onClick={() => {
          setFormDataAndNextStep({}, "confirmation");
        }}
      >
        I have sent it
      </Button>
    </div>
  );
};

export default Review;

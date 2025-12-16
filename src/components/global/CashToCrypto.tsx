import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type Props = {};

const CashToCrypto = (props: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <p className="font-ClashDisplay text-[32px] font-medium  text-primary mt-20">
        Coming Soon!
      </p>
      <p className="text-lg w-full max-w-[520px]  font-Outfit text-[#4F4F4F] font-normal mt-4 text-center">
        Cash to Crypto is almost here.
        <br />
        Enter your email and we’ll let you know the moment it’s live.
      </p>
      <div className="flex flex-col w-full  gap-2 mt-[30px]  ">
        <div className="pb-4">
          <p className="font-Outfit text-base font-medium  text-primary">
            Email
          </p>
        </div>

        <Input
          placeholder="Enter your email"
          className="w-full h-[60px] bg-white border  rounded-md font-Outfit text-primary text-base"
        />
        <Button className="w-full h-[60px] mt-20 mb-[225px]  ">
          Update me
        </Button>
      </div>
    </div>
  );
};

export default CashToCrypto;

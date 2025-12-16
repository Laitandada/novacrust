"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import React from "react";
import type { WalletOption } from "@/types/wallet";

type WalletProps = {
  value: string;
  onChange: (value: string) => void;
  wallets: WalletOption[];
};

function Wallet({ value, onChange, wallets }: WalletProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full bg-white border border-gray-300 rounded-md">
        <SelectValue
          placeholder="Select an option"
          className="font-Outfit text-primary text-sm"
        />
      </SelectTrigger>

      <SelectContent className="border rounded-[20px] mx-auto px-3 py-4">
        {" "}
        {wallets.map((wallet) => (
          <SelectItem
            key={wallet.value}
            value={wallet.value}
            className={cn(
              "flex justify-between items-center cursor-pointer gap-2 p-3 hover:bg-gray-100 text-primary font-Outfit font-medium rounded-[12px]",
              value === wallet.value ? "bg-[#f5f5f5]" : "bg-white"
            )}
          >
            {" "}
            <div className="flex gap-2">
              {" "}
                {wallet.image && (
              <img
                src={wallet.image}
                alt={wallet.label}
                className="w-6 h-6 rounded-full"
              />
            )}{" "}
              {wallet.label}{" "}
            </div>{" "}
          </SelectItem>
        ))}{" "}
      </SelectContent>
    </Select>
  );
}

export default Wallet;

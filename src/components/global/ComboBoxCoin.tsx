"use client";

import * as React from "react";
import { Check, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandInput,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { motion } from "framer-motion";
import { coins } from "@/data/wallets";

const MotionButton = motion(Button);



export function ComboboxCoin() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(coins[0].value);

  const selectedCoin = coins.find((coin) => coin.value === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <MotionButton
          layout
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="
    h-[36px] rounded-[20px] px-3
    inline-flex items-center 
    active:scale-[0.97]
    bg-[#F7F7F7] border 
  "
          transition={{
            layout: { type: "spring", stiffness: 500, damping: 40 },
          }}
        >
          <motion.span
            layout
            className="flex items-center  whitespace-nowrap"
            transition={{
              layout: { type: "spring", stiffness: 500, damping: 40 },
            }}
          >
            <img
              src={selectedCoin?.image}
              alt={selectedCoin?.label}
              className="h-6 w-6 rounded-full mr-1"
            />

            <motion.span
              key={selectedCoin?.label}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-sm font-medium text-primary font-ClashDisplay"
              transition={{ duration: 0.15 }}
            >
              {selectedCoin?.label}
            </motion.span>
          </motion.span>

          <ChevronDown className="h-5 w-5  shrink-0 text-primary" />
        </MotionButton>
      </PopoverTrigger>

      <PopoverContent className="w-[264px] h-[275px] rounded-[20px] border ">
        <Command>
          <CommandList>
            <CommandInput
              placeholder="Search"
              className="h-11 w-full border rounded-[20px]"
            />
            <CommandGroup>
              {coins.map((coin) => (
                <CommandItem
                  key={coin.value}
                  value={coin.value}
                  onSelect={() => {
                    setValue(coin.value);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex items-center gap-2 p-3 font-Outfit text-primary  font-medium text-sm rounded-[12px] cursor-pointer hover:bg-background",
                    value === coin.value ? "bg-[#f5f5f5]" : "bg-white"
                  )}
                >
                  <img
                    src={coin.image}
                    alt={coin.label}
                    className="h-6 w-6 rounded-full"
                  />
                  {coin.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

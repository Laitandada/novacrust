"use client";

import * as React from "react";
import { Check, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import ReactCountryFlag from "react-country-flag";

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
import { countries } from "@/data/wallets";

const MotionButton = motion(Button);



export function ComboboxCurrency() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("NG");

  const selectedCoin = countries.find((country) => country.value === value);

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
            className="flex items-center gap-1 whitespace-nowrap"
            transition={{
              layout: { type: "spring", stiffness: 500, damping: 40 },
            }}
          >
            <ReactCountryFlag
              svg
              countryCode={selectedCoin?.value || "NG"}
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "100%",
                objectFit: "cover",
              }}
            />

            <motion.span
              key={selectedCoin?.label}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-sm font-medium font-ClashDisplay text-primary ml-0.5 "
              transition={{ duration: 0.15 }}
            >
              {selectedCoin?.label}
            </motion.span>
          </motion.span>

          <ChevronDown className="h-5 w-5 shrink-0 text-primary" />
        </MotionButton>
      </PopoverTrigger>

      <PopoverContent className="w-[264px] h-[305px] rounded-[20px] border">
        <Command>
          <CommandList>
            <CommandInput
              placeholder="Search"
              className="h-11 w-full border rounded-[20px]"
            />
            <CommandGroup>
              {countries.map((country) => (
                <CommandItem
                  key={country.value}
                  value={country.value}
                  onSelect={() => {
                    setValue(country.value);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex items-center gap-3 px-3 py-3 text-sm font-medium rounded-[12px]  cursor-pointer hover:bg-background",
                    value === country.value ? "bg-[#f5f5f5]" : "bg-white"
                  )}
                >
                  <ReactCountryFlag
                    svg
                    countryCode={country.value}
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <span className="text-sm font-medium text-primary font-Outfit">
                    {country.label}
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

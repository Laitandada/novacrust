"use client";
import CashToCrypto from "@/components/global/CashToCrypto";
import CryptoToCash from "@/components/global/CryptoToCash";
import CryptoToFiatLoan from "@/components/global/CryptoToFiatLoan";
import TabButton from "@/components/global/TabButton";

import { cn } from "@/lib/utils";
import { useCryptoToCashStore } from "@/store/cryptoToCashStore";
import { useState } from "react";

type Tab = "crypto-to-cash" | "cash-to-crypto" | "crypto-to-fiat-loan";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("crypto-to-cash");
  const step = useCryptoToCashStore((state) => state.step);

  return (
    <main className="flex min-h-screen bg-background flex-col items-center justify-center mx-auto w-full">
      <div className="bg-white border rounded-md border-[#CCF6E5] w-[95%] mx-auto max-w-[640px] md:w-full flex flex-col items-center pt-10 px-4 md:px-[64px]">
        {/* Tabs */}
        {step === "form" && (
          <div className="flex bg-background gap-1 rounded-md p-1 mb-4 md:mb-6">
            <TabButton
              active={activeTab === "crypto-to-cash"}
              onClick={() => setActiveTab("crypto-to-cash")}
            >
              Crypto to cash
            </TabButton>

            <TabButton
              active={activeTab === "cash-to-crypto"}
              onClick={() => setActiveTab("cash-to-crypto")}
            >
              Cash to crypto
            </TabButton>

            <TabButton
              active={activeTab === "crypto-to-fiat-loan"}
              onClick={() => setActiveTab("crypto-to-fiat-loan")}
            >
              Crypto to fiat loan
            </TabButton>
          </div>
        )}

        {/* Content */}
        <div className="w-full">
          {activeTab === "crypto-to-cash" && <CryptoToCash />}
          {activeTab === "cash-to-crypto" && <CashToCrypto />}
          {activeTab === "crypto-to-fiat-loan" && <CryptoToFiatLoan />}
        </div>
      </div>
    </main>
  );
}

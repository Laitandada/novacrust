export const wallets = [
  { label: "MetaMask", value: "metamask", image: "/images/wallets/metamask.png" },
  { label: "Rainbow", value: "rainbow", image: "/images/wallets/rainbow.png" },
  { label: "WalletConnect", value: "wallet-connect", image: "/images/wallets/Wallet.png" },
  {
    label: "Other Crypto Wallets (Binance, Coinbase, Bybit etc)",
    value: "other-crypto",
    image: "/images/wallets/walletconnect.png",
  },
]

export const payToBanks = [
    { label: "GTBank", value: "gtbank" },
  { label: "Opay", value: "opay" },
  { label: "PalmPay", value: "palmpay" },
  { label: "Kuda Bank", value: "kuda" },
  { label: "Moniepoint", value: "moniepoint" },
]
export const recipients = [
  { id: "r1", name: "Dada Olaitan", bank: "GTBank" },
  { id: "r2", name: "Micheal Dada", bank: "Access Bank" },
  { id: "r3", name: "John Doe", bank: "Kuda Bank" },
  { id: "r4", name: "Jane Smith", bank: "Opay" },
  { id: "r5", name: "Samuel Ade", bank: "Moniepoint" },
]

export const recipientOptions = recipients.map((r) => ({
  label: `${r.name} - (${r.bank})`,
  value: r.id,
}))

export const countries = [
  { value: "NG", label: "NGN", currency: "NGN" },
  { value: "US", label: "USD", currency: "USD" },
  { value: "GB", label: "GBP", currency: "GBP" },
  { value: "EU", label: "EUR", currency: "EUR" },
  { value: "CA", label: "CAD", currency: "CAD" },
];

export const coins = [
  {
    value: "ETH",
    label: "ETH",
    image: "/images/coins/eth.png",
  },
  {
    value: "usdt-celo",
    label: "USDT - CELO",
    image: "/images/coins/celo.png",
  },
  {
    value: "usdt-ton",
    label: "USDT - TON",
    image: "/images/coins/ton.png",
  },
  {
    value: "usdt-bnb",
    label: "USDT - BNB",
    image: "/images/coins/bnb.png",
  },
];
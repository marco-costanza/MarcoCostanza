/** Path delle immagini scaricate da marcocostanza.it (in public/images/) */

const IMG = "/images";

export const assets = {
  hero: {
    background: `${IMG}/2025/06/Sfondo-3.png`,
  },
  logo: {
    light48: `${IMG}/2025/06/Logo-Light-48x48.png`,
    light300: `${IMG}/2025/06/Logo-Light-300x300.png`,
    favicon: `${IMG}/2024/01/cropped-Logo-MC-square-no-border-48x48.png`,
  },
  collaborazioni: [
    { src: `${IMG}/2025/06/Relai-partner-150x150.png`, alt: "Relai partner" },
    { src: `${IMG}/2025/06/Investing-partner-150x150.png`, alt: "Investing partner" },
    { src: `${IMG}/2025/06/Bitcare-Forum-partner-150x150.png`, alt: "Bitcare Forum partner" },
    { src: `${IMG}/2025/06/BitBox-partner-150x150.png`, alt: "BitBox partner" },
    { src: `${IMG}/2025/06/Binance-partner-150x150.png`, alt: "Binance partner" },
    { src: `${IMG}/2025/06/Sole-24-ore-partner-1-150x150.png`, alt: "Sole 24 ore partner" },
    { src: `${IMG}/2025/06/Telelombardia-partner-150x150.png`, alt: "Telelombardia partner" },
    { src: `${IMG}/2026/01/Plan-B-Netwkor-150x150.png`, alt: "Plan B Network partner" },
    { src: `${IMG}/2025/06/XTB-partner-150x150.png`, alt: "XTB partner" },
  ],
  servizi: {
    formazione1to1: `${IMG}/2025/07/pc2-e1751534879223.jpg`,
    tradingAcademy: `${IMG}/2024/02/Investire-con-successo-classe-live-1024x576.png`,
    bitcoinAcademy: `${IMG}/2025/12/Foto-di-gruppo-1024x576.jpg`,
  },
  bailout: `${IMG}/2025/06/Masterclass-Bitcoin-4-1024x576.png`,
  articoli: [
    { image: `${IMG}/2026/02/Istituzionali-1024x576.png` },
    { image: `${IMG}/2026/02/Clawdbot-3-1024x576.jpg` },
    { image: `${IMG}/2026/02/epstein-thumb-1024x572.jpg` },
    { image: `${IMG}/2026/02/Mining-remoto-1024x576.jpg` },
  ],
  cards: {
    merchandise: `${IMG}/2026/01/Merch-2-1024x576.jpg`,
    affiliazioni: `${IMG}/2025/06/Referral-1024x576.png`,
    blocktime: `${IMG}/2025/06/16-9-1024x576.png`,
    playlist: `${IMG}/2025/06/Palylist-1024x576.png`,
  },
  trustpilot: `${IMG}/2025/06/Trustpilot-1024x576.png`,
  recensioni: [
    `${IMG}/2024/03/image-5.png`,
    `${IMG}/2024/03/image-4.png`,
    `${IMG}/2024/03/image-3.png`,
    `${IMG}/2024/03/image-2.png`,
    `${IMG}/2024/03/image-1.png`,
    `${IMG}/2024/03/image.png`,
    `${IMG}/2024/02/Screenshot-2024-02-05-at-1.08.58%E2%80%AFpm.png`,
    `${IMG}/2024/02/Screenshot-2024-02-05-at-1.08.30%E2%80%AFpm.png`,
    `${IMG}/2024/02/Screenshot-2024-02-05-at-1.07.18%E2%80%AFpm.png`,
    `${IMG}/2024/02/Screenshot-2024-02-01-at-4.37.40%E2%80%AFpm.png`,
  ],
} as const;

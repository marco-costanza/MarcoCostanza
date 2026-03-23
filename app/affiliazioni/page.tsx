import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarDays,
  GraduationCap,
  Coins,
  Wallet,
  BadgeDollarSign,
  ShoppingBag,
  ArrowLeftRight,
  Landmark,
  FileCheck,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Affiliazioni – Marco Costanza",
  description:
    "Codici sconto e link affiliati per formazione, servizi Bitcoin e finanza tradizionale.",
};

type Affiliate = {
  name: string;
  description: string;
  short?: string;
  href: string;
};

type AffiliateGroup = {
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  items: Affiliate[];
};

const AFFILIATIONS: AffiliateGroup[] = [
  {
    category: "Eventi",
    icon: CalendarDays,
    items: [
      {
        name: "BitCare Forum - Codice COSTANZA",
        short: "10% di sconto con codice COSTANZA",
        description: 'Evento Bitcoin. Codice "COSTANZA" per 10% sul biglietto.',
        href: "https://bitcareforum.it/#biglietti",
      },
    ],
  },
  {
    category: "Formazione",
    icon: GraduationCap,
    items: [
      {
        name: "Bailout – Bitcoin Academy",
        short: "Masterclass Bitcoin in live",
        description: "Percorso Bitcoin: acquisto, custodia, spesa. Masterclass live a posti limitati.",
        href: "https://bailoutacademy.it/",
      },
    ],
  },
  {
    category: "Acquisto Bitcoin",
    icon: Coins,
    items: [
      {
        name: "Relai - Sconto a vita sulle commissioni",
        short: "App Bitcoin-only, acquisti ricorrenti",
        description: "App per acquistare Bitcoin in modo semplice e ricorrente.",
        href: "https://relai.me/costanza",
      },
      {
        name: "BULLBITCOIN - Sconto commissioni",
        short: "Compra, vendi e paga in Bitcoin",
        description: "Servizi premium Bitcoin dal 2015.",
        href: "https://app.bullbitcoin.com/registration/costanza",
      },
      {
        name: "Peach - Acquista Bitcoin NO-KYC",
        short: "P2P senza KYC",
        description: "Acquisto Bitcoin senza KYC con gift card e pagamenti P2P.",
        href: "https://peachbitcoin.com/it/referral?code=PR0003X1",
      },
      {
        name: "BitcoinVoucherBot - Bonus benvenuto",
        short: "Voucher Bitcoin via Telegram",
        description: "Bot Telegram per voucher Bitcoin nel wallet.",
        href: "https://t.me/BitcoinVoucherBot?start=224248460",
      },
    ],
  },
  {
    category: "Custodia Bitcoin",
    icon: Wallet,
    items: [
      {
        name: "BitBox02 - 5% di sconto",
        short: "Hardware wallet",
        description: "Hardware wallet per custodire i tuoi Bitcoin in sicurezza.",
        href: "https://bitbox.swiss/costanza",
      },
      {
        name: "CheckSig - 3 mesi gratuiti",
        short: "Custodia professionale",
        description: "Custodia sicura Bitcoin per privati e aziende.",
        href: "https://my.checksig.com/register?promoCode=COSTANZA",
      },
    ],
  },
  {
    category: "Cashback in Bitcoin",
    icon: BadgeDollarSign,
    items: [
      {
        name: "BitCashback",
        short: "Cashback in BTC sugli acquisti",
        description: "Cashback in Bitcoin su molti ecommerce partner.",
        href: "https://bitcashback.net/l/costanza",
      },
      {
        name: "Satsback",
        short: "Bitcoin come ricompensa",
        description: "Ricevi Bitcoin come ricompensa sugli acquisti.",
        href: "https://satsback.com/register/NzdZkLZ264L5pG4e",
      },
    ],
  },
  {
    category: "Spesa in Bitcoin",
    icon: ShoppingBag,
    items: [
      {
        name: "Bitrefill - 5$ di bonus",
        short: "Gift card e ricariche in BTC",
        description: "Gift card, ricariche e servizi pagabili in Bitcoin.",
        href: "https://www.bitrefill.com/invite/h5lywide",
      },
    ],
  },
  {
    category: "Exchange Crypto",
    icon: ArrowLeftRight,
    items: [
      {
        name: "Binance - Bonus + sconto commissioni",
        short: "Exchange globale, bonus benvenuto",
        description: "Exchange per comprare e scambiare criptovalute.",
        href: "https://accounts.binance.com/register?ref=12315769",
      },
      {
        name: "Bybit - Bonus + sconto commissioni",
        short: "Trading spot e derivati",
        description: "Trading Bitcoin e altcoin, spot e derivati.",
        href: "https://www.bybit.eu/en-EU/?affiliate_id=80827",
      },
    ],
  },
  {
    category: "Finanza tradizionale",
    icon: Landmark,
    items: [
      {
        name: "TradingView – 15$ di sconto",
        short: "Grafici e analisi tecnica",
        description: "Piattaforma grafici e analisi per trader e investitori.",
        href: "https://it.tradingview.com/?aff_id=113878",
      },
      {
        name: "XTB - Accesso gratuito al corso Investimenti",
        short: "Investimenti e formazione",
        description: "Investimento con strumenti, formazione e analisi.",
        href: "https://geolink.xtb.com/83DJ8",
      },
      {
        name: "Trade Republic - 10€ di benvenuto",
        short: "Investimento e risparmio",
        description: "App investimento con piani automatici e mercati.",
        href: "https://refnocode.trade.re/6s96mf89",
      },
    ],
  },
  {
    category: "Servizi di dichiarazione",
    icon: FileCheck,
    items: [
      {
        name: "Tatax - 10% di sconto",
        short: "Dichiarazione crypto Italia",
        description: "Dichiarazione fiscale criptovalute in Italia.",
        href: "https://ta.tax/",
      },
      {
        name: "CryptoBooks - 30% di sconto",
        short: "Tracking e calcolo imposte",
        description: "Software per movimenti crypto e imposte.",
        href: "https://cryptobooks.tax/it",
      },
      {
        name: "Fiscozen - 50€ di sconto",
        short: "Partita IVA e commercialista",
        description: "Gestione partita IVA con commercialista dedicato.",
        href: "https://www.fiscozen.it/invito122458",
      },
    ],
  },
];

export default function AffiliazioniPage() {
  return (
    <div className="page-shell">
      <section
        className="relative border-b border-primary/15 bg-secondary/60 overflow-hidden"
        aria-labelledby="affiliazioni-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center max-w-6xl mx-auto">
            <div className="text-center flex flex-col items-center max-w-2xl mx-auto">
              <h1
                id="affiliazioni-heading"
                className="text-3xl sm:text-4xl font-bold text-foreground mb-3 tracking-tight"
              >
                Affiliazioni
              </h1>
              <p className="text-muted-foreground text-lg max-w-xl">
                Link affiliati e codici sconto che utilizzo. Usandoli supporti il mio lavoro senza costi extra per te.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        id="categorie"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 max-w-6xl scroll-mt-8"
      >
        <div className="grid gap-10 sm:gap-12">
          {AFFILIATIONS.map((group) => {
            const Icon = group.icon;
            return (
              <section
                key={group.category}
                className="space-y-5"
                aria-labelledby={`cat-${group.category.replace(/\s+/g, "-")}`}
              >
                <h2
                  id={`cat-${group.category.replace(/\s+/g, "-")}`}
                  className="text-xl sm:text-2xl font-semibold text-primary flex items-center gap-2"
                >
                  <Icon className="size-6 sm:size-7 text-accent shrink-0" aria-hidden />
                  {group.category}
                </h2>
                <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 list-none p-0 m-0">
                  {group.items.map((item) => {
                    const tagline = item.short ?? item.description;
                    return (
                      <li key={item.name}>
                        <Card className="h-full flex flex-col">
                          <CardHeader className="pb-2">
                            <div className="flex items-start gap-3">
                              <div className="min-w-0 flex-1">
                                <CardTitle className="text-base leading-tight">
                                  {item.name}
                                </CardTitle>
                                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                                  {tagline}
                                </p>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="pt-0 flex-1" />
                          <CardFooter className="pt-0">
                            <Button variant="default" size="sm" className="w-full sm:w-auto" asChild>
                              <Link
                                href={item.href}
                                className="inline-flex items-center gap-2"
                                aria-label={`Apri ${item.name}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Apri
                                <ExternalLink className="size-3.5" aria-hidden />
                              </Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}
        </div>

        <p className="mt-12 text-xs text-muted-foreground max-w-2xl">
          Alcuni link sono affiliati: posso ricevere una commissione se li usi. Valuta sempre in autonomia se il servizio è adatto a te.
        </p>
        <p className="mt-2 text-xs text-muted-foreground max-w-2xl">
          Il merchandising ufficiale, quando disponibile, viene segnalato nei miei contenuti e linkato qui tra le affiliazioni rilevanti.
        </p>
      </div>
    </div>
  );
}

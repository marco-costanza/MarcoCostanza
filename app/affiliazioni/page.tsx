import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Affiliazioni – Marco Costanza",
  description:
    "Codici sconto e link affiliati per formazione, servizi Bitcoin e finanza tradizionale.",
};

type Affiliate = {
  name: string;
  description: string;
  href: string;
};

type AffiliateGroup = {
  category: string;
  items: Affiliate[];
};

// Step 1: struttura dati con tutte le affiliazioni prese da Linktree
const AFFILIATIONS: AffiliateGroup[] = [
  {
    category: "Eventi",
    items: [
      {
        name: "BitCare Forum - Codice COSTANZA",
        description:
          'Evento dedicato al mondo Bitcoin. Usa il codice "COSTANZA" per ottenere il 10% di sconto sul biglietto.',
        href: "https://bitcareforum.it/#biglietti",
      },
    ],
  },
  {
    category: "Formazione",
    items: [
      {
        name: "Bailout – Bitcoin Academy",
        description:
          "Percorso dedicato al mondo Bitcoin: dall'acquisto alla custenza fino alla spesa. Masterclass in live con numero limitato di studenti.",
        href: "https://bailoutacademy.it/",
      },
    ],
  },
  {
    category: "Acquisto Bitcoin",
    items: [
      {
        name: "Relai - Sconto a vita sulle commissioni",
        description:
          "App Bitcoin-only per acquistare in modo semplice e ricorrente. Scarica l'app Relai, completa la verifica e inizia con importi anche piccoli.",
        href: "https://relai.me/costanza",
      },
      {
        name: "BULLBITCOIN - Sconto commissioni",
        description:
          "Servizi premium per comprare, vendere e pagare con Bitcoin, operativa dal 2015 per dare alle persone pieno controllo sul proprio denaro.",
        href: "https://app.bullbitcoin.com/registration/costanza",
      },
      {
        name: "Peach - Acquista Bitcoin NO-KYC",
        description:
          "Piattaforma peer-to-peer per acquistare Bitcoin senza KYC tramite gift card e pagamenti tra privati, con gestione non custodial.",
        href: "https://peachbitcoin.com/it/referral?code=PR0003X1",
      },
      {
        name: "BitcoinVoucherBot - Bonus benvenuto",
        description:
          "Bot Telegram per acquistare voucher Bitcoin e riceverli in modo semplice direttamente dal wallet.",
        href: "https://t.me/BitcoinVoucherBot?start=224248460",
      },
    ],
  },
  {
    category: "Custodia Bitcoin",
    items: [
      {
        name: "BitBox02 - 5% di sconto",
        description:
          "Hardware wallet Bitcoin per tenere al sicuro i tuoi fondi con un dispositivo fisico dedicato.",
        href: "https://bitbox.swiss/costanza",
      },
      {
        name: "CheckSig - 3 mesi gratuiti",
        description:
          "Servizio professionale per la custodia sicura di Bitcoin, pensato per privati e aziende.",
        href: "https://my.checksig.com/register?promoCode=COSTANZA",
      },
    ],
  },
  {
    category: "Cashback in Bitcoin",
    items: [
      {
        name: "BitCashback",
        description:
          "Cashback in Bitcoin sugli acquisti online presso molti ecommerce partner.",
        href: "https://bitcashback.net/l/costanza",
      },
      {
        name: "Satsback",
        description:
          "Piattaforma che permette di ricevere Bitcoin gratis come ricompensa sugli acquisti presso migliaia di merchant.",
        href: "https://satsback.com/register/NzdZkLZ264L5pG4e",
      },
    ],
  },
  {
    category: "Spesa in Bitcoin",
    items: [
      {
        name: "Bitrefill - 5$ di bonus",
        description:
          "Gift card, ricariche e servizi pagabili in Bitcoin e altre crypto, per usare Bitcoin nella vita di tutti i giorni.",
        href: "https://www.bitrefill.com/invite/h5lywide",
      },
    ],
  },
  {
    category: "Exchange Crypto",
    items: [
      {
        name: "Binance - Bonus + sconto commissioni",
        description:
          "Uno dei principali exchange al mondo per comprare e scambiare criptovalute, con bonus di benvenuto e sconti sulle fee.",
        href: "https://accounts.binance.com/register?ref=12315769",
      },
      {
        name: "Bybit - Bonus + sconto commissioni",
        description:
          "Piattaforma per acquistare e fare trading di Bitcoin e altcoin, con prodotti spot e derivati.",
        href: "https://www.bybit.eu/en-EU/?affiliate_id=80827",
      },
    ],
  },
  {
    category: "Finanza tradizionale",
    items: [
      {
        name: "TradingView – 15$ di sconto",
        description:
          "Piattaforma di grafici e analisi tecnica usata da trader e investitori per studiare i mercati.",
        href: "https://it.tradingview.com/?aff_id=113878",
      },
      {
        name: "XTB - Accesso gratuito al corso Investimenti",
        description:
          "Piattaforma di investimento con strumenti, formazione e analisi sui mercati finanziari.",
        href: "https://geolink.xtb.com/83DJ8",
      },
      {
        name: "Trade Republic - 10€ di benvenuto",
        description:
          "App di investimento e risparmio con piani automatici e accesso ai mercati finanziari tradizionali.",
        href: "https://refnocode.trade.re/6s96mf89",
      },
    ],
  },
  {
    category: "Servizi di dichiarazione",
    items: [
      {
        name: "Tatax - 10% di sconto",
        description:
          "Servizio specializzato per la dichiarazione fiscale delle criptovalute in Italia.",
        href: "https://ta.tax/",
      },
      {
        name: "CryptoBooks - 30% di sconto",
        description:
          "Software che traccia automaticamente movimenti crypto e calcola le imposte dovute.",
        href: "https://cryptobooks.tax/it",
      },
      {
        name: "Fiscozen - 50€ di sconto",
        description:
          "Servizio online per la gestione della partita IVA, con commercialista dedicato e supporto continuo.",
        href: "https://www.fiscozen.it/invito122458",
      },
    ],
  },
];

export default function AffiliazioniPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 max-w-4xl">
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">Affiliazioni</h1>
      <p className="text-xl text-muted-foreground max-w-2xl mb-8">
        Qui trovi tutti i link affiliati e i codici sconto che utilizzo o
        consiglio. Usando questi link supporti il mio lavoro senza costi
        aggiuntivi per te.
      </p>

      {/* Step 2: elenco per categoria */}
      <div className="space-y-10">
        {AFFILIATIONS.map((group) => (
          <section key={group.category} className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">
              {group.category}
            </h2>
            <ul className="space-y-3">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="rounded-lg border border-border bg-background p-4"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div>
                      <h3 className="text-base font-semibold text-foreground">
                        {item.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.description}
                      </p>
                    </div>
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-colors min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      Vai al sito
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {/* Step 3: breve nota di trasparenza */}
      <p className="mt-10 text-xs text-muted-foreground max-w-2xl">
        Alcuni dei link presenti in questa pagina sono link affiliati: posso
        ricevere una commissione o un vantaggio economico se decidi di
        utilizzarli. Ti invito comunque a valutare sempre in autonomia se il
        servizio è adatto alle tue esigenze.
      </p>
    </div>
  );
}


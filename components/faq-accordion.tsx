const FAQ = [
  {
    q: "Cosa posso chiedere in consulenza?",
    a: "Tutto ciò che vuoi, tenendo presente che non si tratta mai di consulenza fiscale o finanziaria. Non ti dirò cosa comprare, cosa vendere né dove investire e non ti fornirò mai alcuna raccomandazione personalizzata in tal senso.",
  },
  {
    q: "Non riesco a vedere i video",
    a: "Quasi sempre il problema è legato ai cookie. Clicca sull'icona in basso a destra, poi su \"Accetta Tutti\" e \"Salva e continua\". Ricarica la pagina.",
  },
  {
    q: "C'è un modo per contattarti gratuitamente?",
    a: "Sì: puoi scrivere alla mail che vedi sul sito, lasciare un commento sotto un video o un messaggio privato su Instagram. Nei limiti del possibile rispondo sempre.",
  },
  {
    q: "Esiste una politica di rimborso?",
    a: "Una volta erogati, i servizi non possono essere rimossi (trattandosi di informazioni). Ti consigliamo di valutare bene prima di procedere. Restiamo comunque disponibili per trovare una soluzione in casi particolari.",
  },
  {
    q: "Posso pagare in Bitcoin?",
    a: "Sì, dove disponibile. L'opzione potrebbe non essere attiva su tutti i prodotti.",
  },
];

export function FaqAccordion({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full max-w-2xl mx-auto ${className}`}>
      <h3 className="text-sm font-semibold text-primary mb-3">
        Domande frequenti
      </h3>
      <ul className="space-y-2">
        {FAQ.map(({ q, a }) => (
          <li key={q}>
            <details className="group rounded-lg border border-border bg-background px-4">
              <summary className="py-3 cursor-pointer list-none flex items-center justify-between gap-2 font-medium text-text-primary hover:text-accent transition-colors">
                <span>{q}</span>
                <span className="text-accent group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="pb-3 pt-0 text-sm text-text-muted leading-relaxed">
                {a}
              </p>
            </details>
          </li>
        ))}
      </ul>
    </div>
  );
}

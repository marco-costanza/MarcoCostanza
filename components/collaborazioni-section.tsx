export default function CollaborazioniSection() {
  return (
    <section className="py-16 border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-primary text-center mb-10">
          Collabora con:
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center max-w-4xl mx-auto">
          {/* Placeholder: sostituire con <Image> e loghi in public/collaborazioni/ */}
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-32 h-20 rounded-lg border border-border bg-background-muted flex items-center justify-center text-text-muted text-sm"
              aria-hidden
            >
              Partner {i}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { assets } from "@/lib/assets";

export default function CollaborazioniSection() {
  return (
    <section className="py-16 border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-primary text-center mb-10">
          Collabora con:
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 items-center justify-items-center max-w-5xl mx-auto">
          {assets.collaborazioni.map(({ src, alt }) => (
            <div key={src} className="relative w-20 h-20 grayscale opacity-80 hover:opacity-100 transition-opacity">
              <Image
                src={src}
                alt={alt}
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

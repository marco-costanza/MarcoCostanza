import Image from "next/image";
import { assets } from "@/lib/assets";

export default function CollaborazioniSection() {
  return (
    <section className="py-16 border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-primary text-center mb-10">
          Collabora con:
        </h2>
        {/* Scroller orizzontale con loghi in movimento manuale */}
        <div className="relative">
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-8 items-center min-w-max">
              {assets.collaborazioni.map(({ src, alt }) => (
                <div
                  key={src}
                  className="relative w-24 h-24 flex-shrink-0 grayscale opacity-80 hover:opacity-100 transition-opacity"
                >
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
        </div>
      </div>
    </section>
  );
}

const clients = [
  { name: "Prozora Network", logo: "/images/clients/prozora.svg" },
  { name: "Mindly Therapy", logo: "/images/clients/mindly.png" },
  { name: "GS Studio", logo: "/images/clients/gs-studio.svg" },
  { name: "Betbazar", logo: "/images/clients/betbazar.svg" },
  { name: "Hey Canopy", logo: "/images/clients/hey-canopy.svg" },
  { name: "Life In War", logo: "/images/clients/life-in-war.svg" },
  { name: "BCL Ukraine", logo: "/images/clients/bcl-ukraine.svg" },
  { name: "Innola Solutions", logo: "/images/clients/innola.png" },
  { name: "Arctic7", logo: "/images/clients/arctic7.svg" },
  { name: "Feelz Beverages", logo: "/images/clients/feelz.webp" },
  { name: "EnglishDom", logo: "/images/clients/englishdom.png" },
  { name: "CSMPLT", logo: "/images/clients/csmplt.svg" },
  { name: "Exonode", logo: "/images/clients/exonode.svg" },
  { name: "Value Productions", logo: "/images/clients/value-productions.svg" },
  { name: "Parea Travel", logo: "/images/clients/parea-travel.svg" },
];

const ClientLogos = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#d4292b] mb-4">
          Clients
        </p>
        <h2 className="text-3xl md:text-5xl lg:text-[48px] font-bold leading-[1.1] tracking-tight mb-12">
          Brands that trust us.
        </h2>

      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 border-t border-l border-black">
        {clients.map((client) => (
          <div
            key={client.name}
            className="flex flex-col items-center justify-center gap-3 py-10 md:py-14 px-4 border-r border-b border-black"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="w-10 h-10 object-contain opacity-40 grayscale"
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-black/40">
              {client.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientLogos;

const clients = [
  { name: "EnglishDom", logo: "/images/clients/englishdom.svg" },
  { name: "Fixar", logo: "/images/clients/fixar.svg" },
  { name: "Client 3", logo: "/images/clients/client3.svg" },
  { name: "Client 4", logo: "/images/clients/client4.svg" },
  { name: "Client 5", logo: "/images/clients/client5.svg" },
  { name: "Client 6", logo: "/images/clients/client6.svg" },
  { name: "Client 7", logo: "/images/clients/client7.svg" },
  { name: "Client 8", logo: "/images/clients/client8.svg" },
];

const ClientLogos = () => {
  return (
    <section className="py-8 overflow-hidden">
      <div className="container-custom">
        <p className="text-center text-sm text-muted-foreground mb-6">
          95% of our clients come from referrals
        </p>
      </div>

      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Marquee container */}
        <div className="flex animate-marquee">
          {/* First set */}
          <div className="flex shrink-0 items-center gap-16 px-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="h-6 w-24 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-6 max-w-full object-contain grayscale"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `<span class="text-xs text-muted-foreground font-medium whitespace-nowrap">${client.name}</span>`;
                  }}
                />
              </div>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex shrink-0 items-center gap-16 px-8">
            {clients.map((client, index) => (
              <div
                key={`dup-${index}`}
                className="h-6 w-24 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-6 max-w-full object-contain grayscale"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `<span class="text-xs text-muted-foreground font-medium whitespace-nowrap">${client.name}</span>`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;

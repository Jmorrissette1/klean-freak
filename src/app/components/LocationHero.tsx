interface LocationHeroProps {
  bgImage: string;
  name: string;
  services: string;
  phone: string;
  address: string;
  hours: string;
}

export default function LocationHero({ bgImage, name, services, phone, address, hours }: LocationHeroProps) {
  return (
    <section className="locationHero" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="locationHeroText">
        <h1>{name}</h1>
        <p className="locationServices">{services}</p>
        <p>Phone: {phone}</p>
        <p>Address: {address}</p>
        <p>Hours: {hours}</p>
      </div>
    </section>
  );
}
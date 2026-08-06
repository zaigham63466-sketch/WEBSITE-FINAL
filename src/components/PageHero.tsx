export default function PageHero({ image, tracker, title, subtitle }: {
  image?: string;
  tracker: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative w-full h-[50vh] min-h-[360px] flex items-center justify-center">
      {image ? (
        <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-muted to-background" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
      <div className="relative text-center px-6">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">{tracker}</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">{title}</h1>
        <p className="text-muted-foreground mt-3 max-w-md mx-auto">{subtitle}</p>
      </div>
    </section>
  );
}

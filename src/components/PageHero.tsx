export default function PageHero({ image, tracker, title, subtitle }: {
  image?: string;
  tracker: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative w-full h-[32vh] min-h-[220px] pt-12 flex items-center justify-center">
      {image ? (
        <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-muted to-background" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
      <div className="relative text-center px-6">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">{tracker}</p>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">{title}</h1>
        <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">{subtitle}</p>
      </div>
    </section>
  );
}

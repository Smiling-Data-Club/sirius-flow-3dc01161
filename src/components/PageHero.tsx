interface PageHeroProps {
  topLine: string;
  keyword: string;
  subtitle: string;
}

const PageHero = ({ topLine, keyword, subtitle }: PageHeroProps) => (
  <div className="pt-12 pb-0 px-8 max-w-7xl mx-auto mb-16">
    <div>
      {topLine.split(" ").map((word, i) => (
        <span
          key={i}
          className="inline-block animate-hero-fade-up text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight"
          style={{ animationDelay: `${i * 200}ms` }}
        >
          {word}&nbsp;
        </span>
      ))}
      <br />
      <span
        className="inline-block animate-hero-fade-up text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-primary"
        style={{ animationDelay: `${topLine.split(" ").length * 200}ms` }}
      >
        {keyword}
      </span>
      <span
        className="inline-block animate-hero-fade-up text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight"
        style={{ animationDelay: `${(topLine.split(" ").length + 1) * 200}ms` }}
      >
        .
      </span>
    </div>
    <p
      className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl leading-relaxed animate-hero-fade-up font-light"
      style={{ animationDelay: `${(topLine.split(" ").length + 2) * 200}ms` }}
    >
      {subtitle}
    </p>
  </div>
);

export default PageHero;

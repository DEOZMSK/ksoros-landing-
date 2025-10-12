import type { Metadata } from "next";

import { ArticleTeaser } from "./components/ArticleTeaser";
import { AuthorCard } from "./components/AuthorCard";
import { BenefitsList } from "./components/BenefitsList";
import { Hero } from "./components/Hero";
import { LeadMagnet } from "./components/LeadMagnet";
import { SectionHeading } from "./components/SectionHeading";
import { Footer } from "./components/Footer";
import { siteConfig } from "../content/site-config";

export const metadata: Metadata = {
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
  openGraph: {
    title: siteConfig.meta.title,
    description: siteConfig.meta.description
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.meta.title,
    description: siteConfig.meta.description
  }
};

export default function HomePage() {
  const { hero, articleTeaser, author, benefits, leadMagnet, telegramLink, footer } = siteConfig;

  return (
    <main className="mx-auto flex min-h-screen max-w-content flex-col gap-16 px-4 pb-16 pt-12 sm:px-6 lg:px-0">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-10">
          <Hero
            title={hero.title}
            subtitle={hero.subtitle}
            highlights={hero.highlights}
            telegramLink={telegramLink}
            ctaLabel={hero.ctaLabel}
          />
          <ArticleTeaser
            title={articleTeaser.title}
            summary={articleTeaser.summary}
            telegramLink={telegramLink}
            label={articleTeaser.ctaLabel}
          />
        </div>
        <AuthorCard
          name={author.name}
          alias={author.alias}
          roles={author.roles}
          bio={author.bio}
          stats={author.stats}
          photo={author.photo}
        />
      </div>

      <section className="space-y-8">
        <SectionHeading kicker="Польза" title={benefits.title} />
        <BenefitsList items={benefits.items} />
      </section>

      <LeadMagnet
        title={leadMagnet.title}
        description={leadMagnet.description}
        webhookUrl={leadMagnet.webhookUrl}
      />

      <Footer telegramLink={telegramLink} email={footer.email} />
    </main>
  );
}

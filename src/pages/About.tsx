import { motion } from "framer-motion";
import { ChevronLeft, Hammer, Heart, Target, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border bg-gradient-to-b from-brand-muted/30 to-background py-16 lg:py-24">
          <div className="container-wide">
            <Link
              to="/"
              className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
              Terug naar home
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <h1 className="font-sora text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                Over mij
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                De mens achter Structuur in je Schuur — en waarom ik geloof dat 
                iedereen zijn eigen opbergoplossing kan bouwen.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 lg:py-24">
          <div className="container-wide">
            <div className="mx-auto max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="prose prose-lg max-w-none"
              >
                <h2 className="font-sora text-2xl font-bold text-foreground">
                  Van chaos naar structuur
                </h2>
                <p className="text-muted-foreground">
                  Het begon in mijn eigen schuur. Dozen die omvielen, gereedschap dat 
                  zoek was, en kerstversiering die ik pas in februari terugvond. Ik 
                  had genoeg van de rommel en besloot er iets aan te doen.
                </p>
                <p className="text-muted-foreground">
                  Na weken zoeken vond ik geen betaalbare oplossing die bij mijn 
                  ruimte paste. Dus deed ik wat elke Nederlander zou doen: ik bouwde 
                  het zelf. Met mijn basisgereedschap en wat YouTube-video's maakte 
                  ik mijn eerste krattenkast.
                </p>
                <p className="text-muted-foreground">
                  Het resultaat? Een opgeruimde schuur, meer ruimte, en buren die 
                  vroegen: <em>"Waar heb je die gekocht?"</em>
                </p>
              </motion.div>

              {/* Values */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-16"
              >
                <h2 className="mb-8 font-sora text-2xl font-bold text-foreground">
                  Waar ik voor sta
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-card p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-muted">
                      <Target className="h-6 w-6 text-brand" />
                    </div>
                    <h3 className="mb-2 font-sora font-semibold text-foreground">
                      Praktisch & haalbaar
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Geen ingewikkelde technieken of duur gereedschap. Mijn 
                      bouwplannen zijn ontworpen voor gewone mensen met een 
                      basisgereedschapset.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-card p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-muted">
                      <Heart className="h-6 w-6 text-brand" />
                    </div>
                    <h3 className="mb-2 font-sora font-semibold text-foreground">
                      Eerlijk & transparant
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Geen verborgen kosten of misleidende beloftes. Ik vertel 
                      precies wat je nodig hebt en wat het kost — inclusief 
                      geld-terug-garantie.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-card p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-muted">
                      <Hammer className="h-6 w-6 text-brand" />
                    </div>
                    <h3 className="mb-2 font-sora font-semibold text-foreground">
                      Zelf doen = voldoening
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Er gaat niets boven het gevoel iets met je eigen handen te 
                      maken. Dat gevoel wil ik met zoveel mogelijk mensen delen.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-card p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-muted">
                      <Lightbulb className="h-6 w-6 text-brand" />
                    </div>
                    <h3 className="mb-2 font-sora font-semibold text-foreground">
                      Altijd aan het verbeteren
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Op basis van feedback van bouwers verbeter ik mijn plannen 
                      continu. Kocht je een plan? Dan krijg je alle updates gratis.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-16 rounded-2xl border-2 border-brand bg-gradient-to-br from-brand-muted/50 to-background p-8"
              >
                <h2 className="mb-4 font-sora text-xl font-bold text-foreground">
                  Mijn missie
                </h2>
                <p className="text-lg text-muted-foreground">
                  Ik wil dat elke Nederlander met een schuur, garage of berging 
                  weet dat je geen timmerman hoeft te zijn om structuur te creëren. 
                  Met de juiste instructies en een vrij weekend bouw je iets waar 
                  je jarenlang plezier van hebt.
                </p>
                <p className="mt-4 font-semibold text-foreground">
                  Van chaos naar controle — en dat gevoel gun ik iedereen.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-brand-muted/30 py-16">
          <div className="container-wide text-center">
            <h2 className="mb-4 font-sora text-2xl font-bold text-foreground">
              Klaar om te beginnen?
            </h2>
            <p className="mb-6 text-muted-foreground">
              Bekijk mijn bouwplannen en geef je schuur de structuur die het verdient.
            </p>
            <Link
              to="/"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-brand px-6 font-medium text-brand-foreground transition-colors hover:bg-brand/90"
            >
              Bekijk bouwplannen
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

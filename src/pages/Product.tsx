import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ShoppingCart, 
  Download, 
  Check, 
  Star, 
  FileText, 
  Ruler, 
  Box, 
  Hammer,
  ChevronLeft,
  Package,
  Shield,
  Users,
  Award
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import krattenKastImage from "@/assets/krattenkast-hero.png";

const ProductPage = () => {
  const features = [
    {
      icon: FileText,
      title: "Complete zaaglijst",
      description: "Exacte maten voor al het hout, klaar om mee te nemen naar de bouwmarkt",
    },
    {
      icon: Package,
      title: "Materiaallijst",
      description: "Alle benodigde materialen met artikelnummers voor Gamma, Praxis & Hornbach",
    },
    {
      icon: Ruler,
      title: "Stap-voor-stap instructies",
      description: "Duidelijke foto's en uitleg bij elke stap van het bouwproces",
    },
    {
      icon: Box,
      title: "Meerdere configuraties",
      description: "Van 2x2 tot 4x4 kratten - kies wat past in jouw ruimte",
    },
  ];

  const specs = [
    { label: "Geschikt voor", value: "IKEA Samla 45L boxen" },
    { label: "Configuraties", value: "2x2, 2x3, 3x3, 3x4, 4x4" },
    { label: "Benodigde tijd", value: "2-4 uur" },
    { label: "Moeilijkheidsgraad", value: "Beginner" },
    { label: "Gereedschap", value: "Accuboormachine, zaag, meetlint" },
    { label: "Bestandsformaat", value: "PDF (direct downloaden)" },
  ];

  const reviews = [
    {
      name: "Peter V.",
      rating: 5,
      date: "2 weken geleden",
      text: "Super duidelijk bouwplan! In een middag gebouwd en nu heb ik eindelijk overzicht in mijn garage.",
    },
    {
      name: "Sandra M.",
      rating: 5,
      date: "1 maand geleden",
      text: "Precies wat ik zocht. De zaaglijst is heel handig, de medewerker bij Gamma kon alles direct voor me zagen.",
    },
    {
      name: "Mark de J.",
      rating: 4,
      date: "3 weken geleden",
      text: "Goed bouwplan, stevig resultaat. Enige tip: neem iets meer schroeven mee dan aangegeven.",
    },
    {
      name: "Lisa K.",
      rating: 5,
      date: "1 week geleden",
      text: "Als beginner was dit perfect. Alle stappen zijn duidelijk uitgelegd met foto's.",
    },
  ];

  const faqs = [
    {
      question: "Welke IKEA boxen passen in dit rek?",
      answer: "Het rek is specifiek ontworpen voor de IKEA Samla 45 liter boxen (39x57x28 cm). Dit zijn de populairste opbergboxen en perfect voor garage-opslag.",
    },
    {
      question: "Welk hout heb ik nodig?",
      answer: "Het bouwplan specificeert standaard vurenhout dat je bij elke bouwmarkt kunt kopen. We geven exacte maten en zelfs artikelnummers voor Gamma, Praxis en Hornbach.",
    },
    {
      question: "Hoeveel kost het hout ongeveer?",
      answer: "Afhankelijk van de configuratie kost het hout tussen de €40 en €100. Een 3x3 configuratie kost gemiddeld €65 aan materiaal.",
    },
    {
      question: "Kan ik het rek later uitbreiden?",
      answer: "Ja! Het ontwerp is modulair. Je kunt later extra secties toevoegen zonder het bestaande rek aan te passen.",
    },
    {
      question: "Wat als ik niet tevreden ben?",
      answer: "We bieden 100% geld-terug-garantie. Niet tevreden? Stuur een mail en je krijgt je geld binnen 24 uur terug.",
    },
  ];

  const relatedProducts = [
    {
      title: "Gereedschapswand",
      description: "Overzichtelijke opslag voor al je gereedschap",
      status: "Binnenkort",
      icon: Hammer,
    },
    {
      title: "Werkbank",
      description: "Stevige doe-het-zelf werkbank",
      status: "Binnenkort",
      icon: Ruler,
    },
  ];

  const averageRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="container-wide py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Terug naar home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square rounded-2xl bg-secondary/50 p-8 lg:p-12"
            >
              <img
                src={krattenKastImage}
                alt="Krattenkast Bouwplan"
                className="h-full w-full object-contain"
              />
              <div className="absolute right-4 top-4 rounded-lg bg-brand px-4 py-2">
                <span className="font-sora text-xl font-bold text-brand-foreground">
                  €19
                </span>
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col justify-center"
            >
              <span className="mb-3 inline-block w-fit rounded-full bg-brand-muted px-3 py-1 text-sm font-medium text-brand-foreground">
                Bouwplan
              </span>
              <h1 className="mb-4 font-sora text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                Krattenkast Bouwplan
              </h1>
              
              {/* Rating */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.round(averageRating)
                          ? "fill-brand text-brand"
                          : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {averageRating.toFixed(1)} ({reviews.length} reviews)
                </span>
              </div>

              <p className="mb-6 text-lg text-muted-foreground">
                Bouw je eigen stevige krattenkast voor IKEA Samla 45L boxen. 
                Perfect voor het organiseren van gereedschap, seizoensspullen 
                en meer in je garage of schuur.
              </p>

              {/* What's included */}
              <div className="mb-8 rounded-xl border border-border bg-card p-5">
                <h3 className="mb-3 font-sora font-semibold text-foreground">
                  Dit krijg je:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Check className="h-4 w-4 text-brand" />
                    Complete zaaglijst & materiaallijst (PDF)
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Check className="h-4 w-4 text-brand" />
                    Stap-voor-stap instructies met foto's
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Check className="h-4 w-4 text-brand" />
                    5 configuraties (2x2 tot 4x4)
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Check className="h-4 w-4 text-brand" />
                    Levenslange updates
                  </li>
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" variant="brand" className="text-base">
                  <ShoppingCart className="h-5 w-5" />
                  Koop nu voor €19
                </Button>
                <Button size="lg" variant="outline" className="text-base">
                  <Download className="h-5 w-5" />
                  Gratis preview
                </Button>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">
                ✓ Direct downloaden • ✓ 100% geld-terug-garantie
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-border bg-secondary/30 py-16 lg:py-24">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 font-sora text-2xl font-bold text-foreground md:text-3xl">
              Wat zit er in het bouwplan?
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Alles wat je nodig hebt om direct aan de slag te gaan
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-muted">
                  <feature.icon className="h-6 w-6 text-brand" />
                </div>
                <h3 className="mb-2 font-sora font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 100% Success Guarantee Section */}
      <section className="border-t border-border py-16 lg:py-24">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl"
          >
            <div className="rounded-2xl border-2 border-brand bg-gradient-to-br from-brand-muted/50 to-background p-8 lg:p-12">
              <div className="mb-8 flex items-center justify-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand">
                  <Shield className="h-7 w-7 text-brand-foreground" />
                </div>
                <h2 className="font-sora text-2xl font-bold text-foreground md:text-3xl">
                  100% Slagingsgarantie
                </h2>
              </div>
              
              <p className="mb-8 text-center text-lg text-muted-foreground">
                We begrijpen dat een doe-het-zelf project spannend kan zijn. Daarom hebben we 
                dit bouwplan zo ontworpen dat <strong className="text-foreground">iedereen succesvol kan bouwen</strong> — 
                van complete beginner tot ervaren klusser.
              </p>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-muted">
                    <Users className="h-6 w-6 text-brand" />
                  </div>
                  <h3 className="mb-2 font-sora font-semibold text-foreground">
                    Voor beginners
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Nooit eerder geklusd? Geen probleem. Elke stap is uitgelegd alsof het je eerste project is.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-muted">
                    <Hammer className="h-6 w-6 text-brand" />
                  </div>
                  <h3 className="mb-2 font-sora font-semibold text-foreground">
                    Voor ervaren klussers
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Snelle overzichten en directe zaaglijsten zodat je meteen aan de slag kunt.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-muted">
                    <Award className="h-6 w-6 text-brand" />
                  </div>
                  <h3 className="mb-2 font-sora font-semibold text-foreground">
                    Gegarandeerd succes
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Lukt het niet? 100% geld terug, geen vragen. Maar dat is nog nooit gebeurd.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="border-t border-border py-16 lg:py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 text-center"
            >
              <h2 className="mb-4 font-sora text-2xl font-bold text-foreground md:text-3xl">
                Specificaties
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-border bg-card overflow-hidden"
            >
              {specs.map((spec, i) => (
                <div
                  key={spec.label}
                  className={`flex items-center justify-between p-4 ${
                    i !== specs.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="text-muted-foreground">{spec.label}</span>
                  <span className="font-medium text-foreground">{spec.value}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="border-t border-border bg-secondary/30 py-16 lg:py-24">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 font-sora text-2xl font-bold text-foreground md:text-3xl">
              Wat klanten zeggen
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.round(averageRating)
                        ? "fill-brand text-brand"
                        : "text-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <span className="text-muted-foreground">
                {averageRating.toFixed(1)} gemiddeld uit {reviews.length} reviews
              </span>
            </div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className={`h-4 w-4 ${
                          j < review.rating
                            ? "fill-brand text-brand"
                            : "text-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </div>
                <p className="mb-3 text-foreground">{review.text}</p>
                <p className="text-sm font-medium text-muted-foreground">
                  — {review.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-border py-16 lg:py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 text-center"
            >
              <h2 className="mb-4 font-sora text-2xl font-bold text-foreground md:text-3xl">
                Veelgestelde vragen
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left font-sora font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="border-t border-border bg-secondary/30 py-16 lg:py-24">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 font-sora text-2xl font-bold text-foreground md:text-3xl">
              Andere bouwplannen
            </h2>
            <p className="text-muted-foreground">
              Binnenkort beschikbaar
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-2xl gap-6 md:grid-cols-2">
            {relatedProducts.map((product, i) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 rounded-xl border-2 border-dashed border-border bg-card/50 p-6"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-muted">
                  <product.icon className="h-7 w-7 text-muted-foreground/50" />
                </div>
                <div>
                  <h3 className="font-sora font-semibold text-muted-foreground">
                    {product.title}
                  </h3>
                  <p className="text-sm text-muted-foreground/70">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-border py-16">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-gradient-to-br from-muted to-muted/50 border border-border p-10 text-center"
          >
            <h2 className="mb-4 font-sora text-2xl font-bold text-foreground md:text-3xl">
              Klaar om te bouwen?
            </h2>
            <p className="mb-6 text-muted-foreground">
              Download het bouwplan en begin dit weekend nog.
            </p>
            <Button size="lg" variant="brand" className="text-base">
              <ShoppingCart className="h-5 w-5" />
              Koop nu voor €19
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductPage;

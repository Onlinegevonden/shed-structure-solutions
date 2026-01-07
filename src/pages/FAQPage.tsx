import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: "Over het bouwplan",
    questions: [
      {
        question: "Welk gereedschap heb ik nodig?",
        answer:
          "Basis gereedschap is voldoende: een cirkelzaag of decoupeerzaag, boormachine, meetlint, winkelhaak en schroevendraaier. Geen professionele werkplaats nodig.",
      },
      {
        question: "Hoeveel kost het materiaal?",
        answer:
          "Gemiddeld €80-120 aan materiaal bij de bouwmarkt, afhankelijk van de gekozen configuratie (3, 4 of 5 bakken). Veel goedkoper dan kant-en-klare alternatieven.",
      },
      {
        question: "Hoelang duurt het bouwen?",
        answer:
          "Met het complete bouwplan kun je de krattenkast in één weekend bouwen. Gemiddeld 4-6 uur voor beginners, 2-3 uur voor ervaren klussers.",
      },
    ],
  },
  {
    category: "Afmetingen & Aanpassingen",
    questions: [
      {
        question: "Past de kast in elke schuur?",
        answer:
          "De standaard maten zijn 60 × 40 × 180 cm, maar het bouwplan bevat instructies om de afmetingen aan te passen aan jouw ruimte. Zo past het altijd.",
      },
      {
        question: "Kan ik andere bakken gebruiken dan IKEA Samla?",
        answer:
          "De standaardmaten zijn geoptimaliseerd voor IKEA Samla 45L bakken, maar het plan bevat ook instructies om aan te passen voor andere bakformaten.",
      },
      {
        question: "Kan ik de kast groter of kleiner maken?",
        answer:
          "Absoluut! Het bouwplan bevat een calculator waarmee je eenvoudig alle maten kunt aanpassen. Perfect voor ongebruikelijke ruimtes.",
      },
    ],
  },
  {
    category: "Bestelling & Levering",
    questions: [
      {
        question: "Hoe ontvang ik het bouwplan?",
        answer:
          "Direct na betaling ontvang je een e-mail met een downloadlink. Het bouwplan is een PDF die je kunt printen of op je tablet bekijken.",
      },
      {
        question: "Kan ik het bouwplan meerdere keren downloaden?",
        answer:
          "Ja, je hebt levenslange toegang tot het bouwplan. Je kunt het zo vaak downloaden als je wilt.",
      },
      {
        question: "Wat als ik niet tevreden ben?",
        answer:
          "100% geld-terug-garantie. Stuur binnen 14 dagen een mailtje en je krijgt je geld terug. Geen vragen, geen gedoe.",
      },
    ],
  },
  {
    category: "Support",
    questions: [
      {
        question: "Krijg ik support als ik vastloop?",
        answer:
          "Ja! Bij elke aankoop krijg je toegang tot e-mail support. Stuur je vraag (inclusief foto's) en je krijgt binnen 24 uur antwoord.",
      },
      {
        question: "Is er een community van bouwers?",
        answer:
          "Ja! Na aankoop krijg je toegang tot onze besloten Facebook-groep waar je vragen kunt stellen en je resultaten kunt delen.",
      },
      {
        question: "Worden de bouwplannen ge-update?",
        answer:
          "Ja, we verbeteren onze bouwplannen continu op basis van feedback. Als je het plan hebt gekocht, krijg je alle updates gratis.",
      },
    ],
  },
];

const FAQPage = () => {
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
            >
              <h1 className="font-sora text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                Veelgestelde vragen
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Alles wat je wilt weten over onze bouwplannen. Staat je vraag er niet bij? 
                Neem gerust contact met ons op.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16 lg:py-24">
          <div className="container-wide">
            <div className="mx-auto max-w-3xl space-y-12">
              {faqs.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                >
                  <h2 className="mb-6 font-sora text-xl font-bold text-foreground">
                    {category.category}
                  </h2>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, index) => (
                      <AccordionItem key={index} value={`${categoryIndex}-${index}`}>
                        <AccordionTrigger className="text-left font-semibold">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="border-t border-border bg-brand-muted/30 py-16">
          <div className="container-wide text-center">
            <h2 className="mb-4 font-sora text-2xl font-bold text-foreground">
              Vraag niet beantwoord?
            </h2>
            <p className="mb-6 text-muted-foreground">
              Stuur ons een bericht en we helpen je graag verder.
            </p>
            <Link
              to="/contact"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-brand px-6 font-medium text-brand-foreground transition-colors hover:bg-brand/90"
            >
              Neem contact op
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Welk gereedschap heb ik nodig?",
    answer:
      "Basis gereedschap is voldoende: een cirkelzaag of decoupeerzaag, boormachine, meetlint, winkelhaak en schroevendraaier. Geen professionele werkplaats nodig.",
  },
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
    question: "Hoeveel kost het materiaal?",
    answer:
      "Gemiddeld €80-120 aan materiaal bij de bouwmarkt, afhankelijk van de gekozen configuratie (3, 4 of 5 bakken). Veel goedkoper dan kant-en-klare alternatieven.",
  },
  {
    question: "Wat als ik niet tevreden ben?",
    answer:
      "100% geld-terug-garantie. Stuur binnen 14 dagen een mailtje en je krijgt je geld terug. Geen vragen, geen gedoe.",
  },
  {
    question: "Krijg ik support als ik vastloop?",
    answer:
      "Ja! Bij elke aankoop krijg je toegang tot e-mail support. Stuur je vraag (inclusief foto's) en je krijgt binnen 24 uur antwoord.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Veelgestelde vragen
          </h2>
          <p className="text-muted-foreground">
            Alles wat je wilt weten over de bouwplannen
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
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
      </div>
    </section>
  );
};

export default FAQ;

import { motion } from "framer-motion";
import { Download, ShoppingBag, Hammer, PartyPopper } from "lucide-react";

const steps = [
  {
    icon: ShoppingBag,
    title: "1. Kies je bouwplan",
    description: "Selecteer het bouwplan dat past bij jouw situatie en wensen.",
  },
  {
    icon: Download,
    title: "2. Direct downloaden",
    description: "Na betaling ontvang je direct je PDF met alle instructies.",
  },
  {
    icon: Hammer,
    title: "3. Bouw het zelf",
    description: "Volg de stap-voor-stap instructies met onze duidelijke handleiding.",
  },
  {
    icon: PartyPopper,
    title: "4. Geniet van je resultaat",
    description: "Een opgeruimde schuur binnen één weekend - gegarandeerd!",
  },
];

const HowItWorks = () => {
  return (
    <section id="hoe-werkt-het" className="bg-background py-20 lg:py-28">
      <div className="container-wide">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-brand-muted px-4 py-1.5 text-sm font-medium text-brand-foreground">
            Zo simpel is het
          </span>
          <h2 className="mb-4 font-sora text-3xl font-bold text-foreground md:text-4xl">
            Hoe werkt het?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Van aankoop tot opgeruimde schuur in vier eenvoudige stappen.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-8 hidden h-[calc(100%-64px)] w-px -translate-x-1/2 bg-gradient-to-b from-brand via-brand/50 to-transparent lg:block" />
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative text-center"
              >
                {/* Icon */}
                <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand shadow-brand">
                  <step.icon className="h-7 w-7 text-brand-foreground" />
                </div>

                {/* Content */}
                <h3 className="mb-2 font-sora text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

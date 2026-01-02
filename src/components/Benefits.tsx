import { motion } from "framer-motion";
import { CheckCircle, MapPin, Lightbulb, Shield, Clock, Users } from "lucide-react";

const benefits = [
  {
    icon: MapPin,
    title: "100% Nederlands",
    description: "Alle materialen zijn verkrijgbaar bij Gamma, Praxis en Hornbach. Geen gedoe met Amerikaanse maten.",
  },
  {
    icon: Lightbulb,
    title: "Beginner-vriendelijk",
    description: "Duidelijke stap-voor-stap instructies met foto's. Geen ervaring nodig, basisgereedschap volstaat.",
  },
  {
    icon: Clock,
    title: "Weekend project",
    description: "Elk project is ontworpen om in één weekend af te ronden. Van chaos naar controle in 48 uur.",
  },
  {
    icon: Shield,
    title: "100% Garantie",
    description: "Niet tevreden? Je krijgt je geld terug. Geen vragen, geen gedoe. Wij geloven in onze bouwplannen.",
  },
  {
    icon: Users,
    title: "IKEA compatible",
    description: "Speciaal ontworpen voor IKEA Samla boxen. De perfecte combinatie van kwaliteit en prijs.",
  },
  {
    icon: CheckCircle,
    title: "Direct starten",
    description: "Na aankoop direct downloaden en beginnen. Print de zaaglijst en ga naar de bouwmarkt.",
  },
];

const Benefits = () => {
  return (
    <section className="bg-secondary/30 py-20 lg:py-28">
      <div className="container-wide">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-brand-muted px-4 py-1.5 text-sm font-medium text-brand-foreground">
            Waarom onze bouwplannen
          </span>
          <h2 className="mb-4 font-sora text-3xl font-bold text-foreground md:text-4xl">
            Ontworpen voor succes
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Onze bouwplannen zijn door honderden Nederlandse klussers getest en verfijnd.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-brand/30 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-muted transition-colors group-hover:bg-brand">
                <benefit.icon className="h-6 w-6 text-brand-foreground transition-colors group-hover:text-brand-foreground" />
              </div>
              <h3 className="mb-2 font-sora text-lg font-semibold text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

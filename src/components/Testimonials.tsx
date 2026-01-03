import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Eindelijk een bouwplan dat echt werkt! Zaterdagochtend begonnen, zondagmiddag stond ie. Mijn vrouw was verbaasd dat ik het gefikst had.",
    name: "Peter van Dijk",
    location: "Almere",
    initial: "P",
  },
  {
    quote: "De materiaallijst was perfect. Alles in één keer bij de Gamma gehaald. Geen gedoe met omrekenen of zoeken naar alternatieven.",
    name: "Sandra Bakker",
    location: "Rotterdam",
    initial: "S",
  },
  {
    quote: "Nooit eerder iets gebouwd, maar met deze instructies lukte het prima. De stap-voor-stap uitleg is echt idiot-proof.",
    name: "Mark Jansen",
    location: "Utrecht",
    initial: "M",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-brand uppercase tracking-wider">
            Klanten aan het woord
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Wat anderen zeggen
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Honderden Nederlanders gingen je voor. Dit is wat ze ervan vonden.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-2xl p-6 shadow-soft"
            >
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-brand-foreground font-semibold">
                  {testimonial.initial}
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

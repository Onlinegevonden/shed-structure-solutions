import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const examples = [
  {
    id: 1,
    title: "Compacte Tuinschuur",
    description: "Van rommelige schuur naar georganiseerde opslag met plaats voor al het tuingereedschap.",
    before: "Chaos met losse kratjes en gereedschap door elkaar",
    after: "Overzichtelijke opslag met 12 kratjes en werkbank",
    rating: 5,
    author: "Peter uit Amersfoort",
    quote: "In één weekend gebouwd, nu vind ik alles binnen 10 seconden!",
  },
  {
    id: 2,
    title: "Grote Werkplaats",
    description: "Een complete werkplaats met krattenkast, gereedschapswand en werkblad.",
    before: "Gereedschap overal, geen werkruimte",
    after: "Professionele werkplek met 24 kratjes en extra opbergruimte",
    rating: 5,
    author: "Mark uit Rotterdam",
    quote: "Mijn buren zijn jaloers op mijn georganiseerde werkplaats.",
  },
  {
    id: 3,
    title: "Garage Organisatie",
    description: "Slimme indeling van een kleine garage met maximale opslagcapaciteit.",
    before: "Geen ruimte voor de auto, alles op de grond",
    after: "Auto past weer in de garage, 18 kratjes netjes opgesteld",
    rating: 5,
    author: "Sandra uit Utrecht",
    quote: "Eindelijk past de auto weer in de garage!",
  },
  {
    id: 4,
    title: "Hobbyruimte",
    description: "Een georganiseerde ruimte voor hobby's en knutselprojecten.",
    before: "Hobby spullen verspreid door het hele huis",
    after: "Alles op één plek met 16 kratjes voor verschillende categorieën",
    rating: 5,
    author: "Annemiek uit Eindhoven",
    quote: "Mijn man is super blij dat mijn hobby spullen nu een vaste plek hebben.",
  },
  {
    id: 5,
    title: "Tuinhuis Upgrade",
    description: "Van vergeten tuinhuis naar praktische opslagruimte.",
    before: "Spinnenwebben en vergeten spullen",
    after: "Schone, georganiseerde ruimte met 20 kratjes en planken",
    rating: 5,
    author: "Johan uit Groningen",
    quote: "Het tuinhuis is nu mijn favoriete plek in de tuin.",
  },
  {
    id: 6,
    title: "Schuur Makeover",
    description: "Complete transformatie van een oude schuur naar moderne opslag.",
    before: "Oude rommel en geen structuur",
    after: "Moderne look met 14 kratjes en LED verlichting",
    rating: 5,
    author: "Lisa uit Den Haag",
    quote: "Gasten denken dat ik het professioneel heb laten doen!",
  },
];

const Examples = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand/10 text-brand text-sm font-medium mb-6">
              Inspiratie
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Bekijk wat anderen hebben gebouwd
            </h1>
            <p className="text-lg text-muted-foreground">
              Ontdek hoe anderen hun schuur, garage of werkplaats hebben getransformeerd 
              met het Krattenkast bouwplan. Van beginner tot ervaren klussers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Examples Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {examples.map((example, index) => (
              <motion.div
                key={example.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Placeholder image area */}
                <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="w-16 h-16 bg-brand/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-2xl">🏠</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Klantproject #{example.id}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{example.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{example.description}</p>
                  
                  {/* Before/After */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2">
                      <span className="text-xs font-medium text-destructive bg-destructive/10 px-2 py-0.5 rounded">Voor</span>
                      <p className="text-xs text-muted-foreground">{example.before}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-xs font-medium text-brand bg-brand/10 px-2 py-0.5 rounded">Na</span>
                      <p className="text-xs text-muted-foreground">{example.after}</p>
                    </div>
                  </div>
                  
                  {/* Quote */}
                  <div className="bg-muted/50 rounded-lg p-4 mb-4">
                    <Quote className="w-4 h-4 text-brand mb-2" />
                    <p className="text-sm italic text-foreground mb-2">"{example.quote}"</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{example.author}</span>
                      <div className="flex gap-0.5">
                        {[...Array(example.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-brand text-brand" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand mb-2">500+</div>
              <p className="text-muted-foreground">Tevreden klanten</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand mb-2">100%</div>
              <p className="text-muted-foreground">Slagingsgarantie</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand mb-2">4.9/5</div>
              <p className="text-muted-foreground">Gemiddelde beoordeling</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand mb-2">1 weekend</div>
              <p className="text-muted-foreground">Gemiddelde bouwtijd</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl bg-gradient-to-br from-muted to-muted/50 border border-border p-10 md:p-14 text-center overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground relative z-10">
              Klaar om zelf te beginnen?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto relative z-10">
              Sluit je aan bij 500+ tevreden klanten en bouw dit weekend nog je eigen krattenkast.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link to="/product/krattenkast">
                <Button size="lg" variant="brand" className="text-base">
                  Bekijk het bouwplan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Examples;

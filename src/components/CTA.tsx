import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand via-brand/80 to-orange-400" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
      
      <div className="container max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Klaar om je schuur te transformeren?
          </h2>
          <p className="text-foreground/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Begin dit weekend nog. Download het bouwplan en maak een einde aan
            de chaos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button 
              size="lg" 
              className="text-base bg-foreground text-background hover:bg-foreground/90 shadow-xl hover:shadow-2xl transition-all"
            >
              Download voor €19
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base border-foreground/40 text-foreground hover:bg-foreground/10 backdrop-blur-sm"
            >
              Bekijk voorbeelden
            </Button>
          </div>

          <p className="text-foreground/70 text-sm font-medium">
            ✓ 500+ tevreden klanten • ✓ Direct downloaden • ✓ 100% garantie
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

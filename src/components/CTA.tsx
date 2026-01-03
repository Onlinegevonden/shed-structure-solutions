import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl bg-gradient-to-br from-muted to-muted/50 border border-border p-10 md:p-14 text-center overflow-hidden"
        >
          {/* Subtle accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-foreground relative z-10">
            Klaar om je schuur te transformeren?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto relative z-10">
            Begin dit weekend nog. Download het bouwplan en maak een einde aan
            de chaos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 relative z-10">
            <Button size="lg" variant="brand" className="text-base">
              Download voor €19
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base"
            >
              Bekijk voorbeelden
            </Button>
          </div>

          <p className="text-muted-foreground text-sm relative z-10">
            ✓ 500+ tevreden klanten • ✓ Direct downloaden • ✓ 100% garantie
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

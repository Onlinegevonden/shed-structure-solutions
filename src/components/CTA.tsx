import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-foreground text-background">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Klaar om je schuur te transformeren?
          </h2>
          <p className="text-background/70 text-lg mb-8 max-w-2xl mx-auto">
            Begin dit weekend nog. Download het bouwplan en maak een einde aan
            de chaos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" variant="brand" className="text-base">
              Download voor €19
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base border-background/30 text-background hover:bg-background/10"
            >
              Bekijk voorbeelden
            </Button>
          </div>

          <p className="text-background/50 text-sm">
            Meer dan 500+ tevreden klanten • Direct downloaden • 100% garantie
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

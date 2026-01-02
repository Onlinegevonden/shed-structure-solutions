import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Download, CheckCircle } from "lucide-react";
import krattenKastImage from "@/assets/krattenkast-hero.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--brand-muted))_0%,transparent_50%)]" />
      
      <div className="container-wide relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand bg-brand-muted px-4 py-1.5"
            >
              <Download className="h-4 w-4 text-brand-foreground" />
              <span className="text-sm font-medium text-brand-foreground">
                Digitale bouwplannen
              </span>
            </motion.div>

            <h1 className="mb-6 font-sora text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Van chaos naar controle{" "}
              <span className="relative inline-block">
                <span className="relative z-10">in één weekend</span>
                <span className="absolute bottom-2 left-0 -z-0 h-3 w-full bg-brand/30" />
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground lg:mx-0 lg:text-xl">
              Praktische bouwplannen voor je schuur of garage. Speciaal ontworpen 
              voor Nederlandse bouwmarkten en IKEA opbergboxen.
            </p>

            {/* Features */}
            <div className="mb-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              {[
                { icon: Clock, text: "Klaar in 1 weekend" },
                { icon: Download, text: "Direct downloaden" },
                { icon: CheckCircle, text: "Beginner-vriendelijk" },
              ].map((feature, i) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <feature.icon className="h-4 w-4 text-brand" />
                  {feature.text}
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Button variant="brand" size="xl" className="group">
                Bekijk bouwplannen
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="brand-outline" size="xl">
                Hoe werkt het?
              </Button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative elements */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-brand/20 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-brand/10 blur-3xl" />
              
              {/* Main image */}
              <div className="relative rounded-2xl bg-secondary/50 p-6 lg:p-8">
                <img
                  src={krattenKastImage}
                  alt="Krattenkast bouwplan - houten opbergrek met IKEA Samla boxen"
                  className="w-full animate-float"
                />
              </div>

              {/* Price tag */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                className="absolute -bottom-4 -right-4 rounded-xl bg-card p-4 shadow-lg lg:-bottom-6 lg:-right-6"
              >
                <p className="text-xs text-muted-foreground">Vanaf</p>
                <p className="font-sora text-2xl font-bold text-foreground">€19</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Placeholder photos - in reality these would be real customer photos
const photos = [
  { id: 1, likes: 47 },
  { id: 2, likes: 32 },
  { id: 3, likes: 58 },
  { id: 4, likes: 41 },
  { id: 5, likes: 29 },
  { id: 6, likes: 63 },
  { id: 7, likes: 38 },
  { id: 8, likes: 52 },
  { id: 9, likes: 44 },
];

const Examples = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-muted/50 to-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand/10 text-brand text-sm font-medium mb-6">
              #krattenkast
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Foto's van klanten
            </h1>
            <p className="text-lg text-muted-foreground">
              Bekijk wat anderen hebben gebouwd met het bouwplan
            </p>
          </motion.div>
        </div>
      </section>

      {/* Photo Grid - Instagram style */}
      <section className="py-8">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-3 gap-1 md:gap-3">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="aspect-square bg-gradient-to-br from-muted to-muted/50 relative group cursor-pointer overflow-hidden rounded-sm md:rounded-lg"
              >
                {/* Placeholder content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="w-8 h-8 md:w-12 md:h-12 text-muted-foreground/30 mx-auto" />
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex items-center gap-2 text-white">
                    <Heart className="w-5 h-5 fill-white" />
                    <span className="font-semibold">{photo.likes}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Load more placeholder */}
          <div className="text-center mt-8">
            <p className="text-muted-foreground text-sm">
              Binnenkort meer foto's van tevreden klanten
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-t border-border">
        <div className="container">
          <div className="flex justify-center gap-12 md:gap-20 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-brand">500+</div>
              <p className="text-sm text-muted-foreground">Klanten</p>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-brand">100%</div>
              <p className="text-sm text-muted-foreground">Garantie</p>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-brand">4.9★</div>
              <p className="text-sm text-muted-foreground">Beoordeling</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Zelf aan de slag?
            </h2>
            <p className="text-muted-foreground mb-6">
              Download het bouwplan en deel straks jouw resultaat!
            </p>
            <Link to="/product/krattenkast">
              <Button size="lg" variant="brand">
                Bekijk het bouwplan
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Examples;

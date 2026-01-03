import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart, FileText, Ruler } from "lucide-react";
import { Link } from "react-router-dom";
import krattenKastImage from "@/assets/krattenkast-hero.png";

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  features: string[];
  image: string;
  slug?: string;
  delay?: number;
}

const ProductCard = ({
  title,
  description,
  price,
  features,
  image,
  delay = 0,
}: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-brand/50 hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-secondary/50 p-8">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
        {/* Price badge */}
        <div className="absolute right-4 top-4 rounded-lg bg-brand px-3 py-1.5">
          <span className="font-sora text-lg font-bold text-brand-foreground">
            €{price}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-2 font-sora text-xl font-semibold text-foreground">
          {title}
        </h3>
        <p className="mb-4 text-muted-foreground">{description}</p>

        {/* Features */}
        <ul className="mb-6 space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="h-1.5 w-1.5 rounded-full bg-brand" />
              {feature}
            </li>
          ))}
        </ul>

        <Link to="/product/krattenkast">
          <Button variant="brand" className="w-full">
            <ShoppingCart className="h-4 w-4" />
            Bekijk bouwplan
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

const ProductSection = () => {
  const products = [
    {
      title: "Krattenkast Bouwplan",
      description: "Stevig houten rek voor IKEA Samla 45L boxen. Perfect voor gereedschap, seizoensspullen en meer.",
      price: 19,
      features: [
        "Complete zaaglijst & materiaallijst",
        "Stap-voor-stap instructies met foto's",
        "Meerdere configuraties (2x2 tot 4x4)",
        "Past bij Gamma, Praxis & Hornbach hout",
      ],
      image: krattenKastImage,
    },
  ];

  return (
    <section id="producten" className="bg-secondary/30 py-20 lg:py-28">
      <div className="container-wide">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-brand-muted px-4 py-1.5 text-sm font-medium text-brand-foreground">
            Bouwplannen
          </span>
          <h2 className="mb-4 font-sora text-3xl font-bold text-foreground md:text-4xl">
            Onze populairste bouwplannen
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Elk bouwplan is uitgebreid getest en bevat alles wat je nodig hebt 
            om direct aan de slag te gaan.
          </p>
        </motion.div>

        {/* Products grid */}
        <div className="mx-auto grid max-w-lg gap-8 lg:max-w-none lg:grid-cols-3">
          {products.map((product, i) => (
            <ProductCard key={product.title} {...product} delay={i * 0.1} />
          ))}
          
          {/* Coming soon cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex items-center justify-center rounded-2xl border-2 border-dashed border-border bg-card/50 p-8"
          >
            <div className="text-center">
              <FileText className="mx-auto mb-4 h-12 w-12 text-muted-foreground/50" />
              <h3 className="mb-2 font-sora text-lg font-semibold text-muted-foreground">
                Gereedschapswand
              </h3>
              <p className="text-sm text-muted-foreground/70">Binnenkort beschikbaar</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center justify-center rounded-2xl border-2 border-dashed border-border bg-card/50 p-8"
          >
            <div className="text-center">
              <Ruler className="mx-auto mb-4 h-12 w-12 text-muted-foreground/50" />
              <h3 className="mb-2 font-sora text-lg font-semibold text-muted-foreground">
                Werkbank
              </h3>
              <p className="text-sm text-muted-foreground/70">Binnenkort beschikbaar</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

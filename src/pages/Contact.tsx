import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, Mail, MessageCircle, Clock, Send } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Bericht verzonden!",
      description: "We nemen zo snel mogelijk contact met je op.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border bg-gradient-to-b from-brand-muted/30 to-background py-16 lg:py-24">
          <div className="container-wide">
            <Link
              to="/"
              className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
              Terug naar home
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-sora text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                Contact
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Heb je een vraag of wil je meer weten? We staan voor je klaar en 
                reageren meestal binnen 24 uur.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 lg:py-24">
          <div className="container-wide">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="mb-6 font-sora text-2xl font-bold text-foreground">
                  Hoe kunnen we helpen?
                </h2>
                <p className="mb-8 text-muted-foreground">
                  Of je nu een vraag hebt over een bouwplan, hulp nodig hebt tijdens 
                  het bouwen, of gewoon wilt sparren over je project — we horen graag 
                  van je.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-muted">
                      <Mail className="h-5 w-5 text-brand" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">E-mail</h3>
                      <a
                        href="mailto:info@structuurinjeschuur.nl"
                        className="text-muted-foreground transition-colors hover:text-brand"
                      >
                        info@structuurinjeschuur.nl
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-muted">
                      <MessageCircle className="h-5 w-5 text-brand" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Social Media</h3>
                      <p className="text-muted-foreground">
                        Volg ons op Instagram voor inspiratie en tips
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-muted">
                      <Clock className="h-5 w-5 text-brand" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Reactietijd</h3>
                      <p className="text-muted-foreground">
                        We reageren binnen 24 uur op werkdagen
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-border bg-card p-6 lg:p-8"
                >
                  <h3 className="mb-6 font-sora text-xl font-bold text-foreground">
                    Stuur een bericht
                  </h3>

                  <div className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="name">Naam</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Je naam"
                          required
                          className="mt-1.5"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">E-mail</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="je@email.nl"
                          required
                          className="mt-1.5"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Onderwerp</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Waar gaat je vraag over?"
                        required
                        className="mt-1.5"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Bericht</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Vertel ons meer..."
                        rows={5}
                        required
                        className="mt-1.5"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="brand"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Verzenden..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Verstuur bericht
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

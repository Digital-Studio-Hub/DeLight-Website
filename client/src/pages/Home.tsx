import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Film, Tv, Music, Sparkles } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

import cameraImage from "@assets/WhatsApp_Image_2026-01-29_at_12.55.40_(1)_1770195619191.jpeg";
import crewImage from "@assets/WhatsApp_Image_2026-01-29_at_12.55.42_(1)_1770195640759.jpeg";
import productionImage from "@assets/WhatsApp_Image_2026-01-29_at_12.44.07_(4)_1770195541763.jpeg";

const services = [
  {
    icon: Film,
    title: "Movies & Series",
    description: "Cinematic storytelling that captivates audiences and brings narratives to life on screen.",
  },
  {
    icon: Tv,
    title: "Commercials",
    description: "High-impact visual content that elevates your brand and drives engagement.",
  },
  {
    icon: Music,
    title: "Music Videos",
    description: "Creative visual experiences that amplify the power of music and artist vision.",
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    description: "Dynamic animations and visual effects that transform ideas into stunning visuals.",
  },
];

export default function Home() {
  return (
    <Layout>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={cameraImage}
            alt="Cinematic camera setup at sunset"
            className="w-full h-full object-cover"
            data-testid="img-hero"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fadeIn"
            data-testid="text-hero-title"
          >
            Crafting Stories Through{" "}
            <span className="text-gradient">Cinematic Visuals</span>
          </h1>
          <p
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fadeIn"
            style={{ animationDelay: "0.2s" }}
            data-testid="text-hero-subtitle"
          >
            Professional film production, commercials, music videos & motion graphics.
            We bring your vision to life with artistry and precision.
          </p>
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeIn"
            style={{ animationDelay: "0.4s" }}
          >
            <Link href="/portfolio">
              <Button size="lg" className="min-w-[180px]" data-testid="button-view-portfolio">
                View Portfolio
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="min-w-[180px]" data-testid="button-work-with-us-hero">
                Work With Us
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="py-24 bg-background" data-testid="section-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="text-services-title">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From concept to final cut, we deliver exceptional visual content that exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="bg-card hover-elevate transition-all duration-300 group"
                data-testid={`card-service-${index}`}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" data-testid="button-all-services">
                Explore All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card" data-testid="section-philosophy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6" data-testid="text-philosophy-title">
                The Art of <span className="text-gradient">Visual Storytelling</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At DeLight Films, we believe every frame tells a story. Our passion for
                cinematography drives us to create visual experiences that resonate with
                audiences and leave lasting impressions.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                With a team of dedicated professionals and state-of-the-art equipment,
                we transform creative visions into cinematic reality. From intimate
                narratives to grand productions, we approach every project with the same
                commitment to excellence.
              </p>
              <Link href="/about">
                <Button variant="outline" data-testid="button-learn-more">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-md overflow-hidden">
                <img
                  src={crewImage}
                  alt="Film crew on location"
                  className="w-full h-full object-cover"
                  data-testid="img-philosophy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-2/3 aspect-video rounded-md overflow-hidden border-4 border-background shadow-xl">
                <img
                  src={productionImage}
                  alt="Professional camera equipment"
                  className="w-full h-full object-cover"
                  data-testid="img-philosophy-secondary"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background" data-testid="section-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" data-testid="text-cta-title">
            Ready to Bring Your <span className="text-gradient">Vision to Life?</span>
          </h2>
          <p className="text-muted-foreground mb-10 text-lg">
            Let's collaborate on your next project. Our team is ready to transform your
            ideas into stunning visual content.
          </p>
          <Link href="/contact">
            <Button size="lg" className="min-w-[200px]" data-testid="button-start-project">
              Start a Project
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
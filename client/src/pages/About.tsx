import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Target, Eye, Heart, Award } from "lucide-react";

import teamImage from "@assets/WhatsApp_Image_2026-01-29_at_12.56.43_1770195680424.jpeg";
import behindScenesImage from "@assets/WhatsApp_Image_2026-01-29_at_12.44.08_(3)_1770195565153.jpeg";
import productionImage from "@assets/WhatsApp_Image_2026-01-29_at_12.56.43_(1)_1770195671059.jpeg";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for perfection in every frame, ensuring exceptional quality in all our productions.",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "We see beyond the ordinary, transforming creative concepts into cinematic masterpieces.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Our love for storytelling drives us to create content that moves and inspires audiences.",
  },
  {
    icon: Award,
    title: "Professionalism",
    description: "We deliver on our promises with integrity, reliability, and industry-leading standards.",
  },
];

export default function About() {
  return (
    <Layout>
      <section className="pt-12 pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6" data-testid="text-about-title">
              About <span className="text-gradient">DeLight Films</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A professional film production and visual storytelling company dedicated
              to bringing creative visions to life through cinematic excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6" data-testid="text-story-title">
                Our Story
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                DeLight Films was born from a deep passion for visual storytelling and a
                commitment to elevating the art of cinematography in South Africa. What
                started as a creative vision has grown into a full-service production
                house trusted by brands, artists, and filmmakers alike.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our journey has been defined by a relentless pursuit of excellence,
                pushing boundaries in every project we undertake. From intimate
                narratives to large-scale commercial productions, we approach each
                opportunity with the same dedication and creative fire.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, DeLight Films stands as a beacon of quality in the South African
                film industry, known for our distinctive visual style, professional
                approach, and ability to transform concepts into compelling visual
                experiences.
              </p>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-[4/3] rounded-md overflow-hidden">
                <img
                  src={teamImage}
                  alt="DeLight Films team"
                  className="w-full h-full object-cover"
                  data-testid="img-team"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative">
              <div className="aspect-video rounded-md overflow-hidden">
                <img
                  src={behindScenesImage}
                  alt="Behind the scenes"
                  className="w-full h-full object-cover"
                  data-testid="img-behind-scenes"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6" data-testid="text-mission-title">
                Our Mission
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                To create visual content that transcends expectations, tells powerful
                stories, and leaves lasting impressions on audiences. We are committed
                to being a trusted creative partner for clients who demand excellence.
              </p>
              <h3 className="text-xl font-semibold mb-4 mt-8">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be recognized as the premier film production company in South Africa,
                setting the standard for cinematic quality, creative innovation, and
                professional excellence in the visual storytelling industry.
              </p>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12" data-testid="text-values-title">
              Our <span className="text-gradient">Core Values</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card
                  key={value.title}
                  className="bg-card hover-elevate"
                  data-testid={`card-value-${index}`}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6" data-testid="text-quality-title">
                Commitment to <span className="text-gradient">Quality</span>
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                At DeLight Films, quality isn't just a goal—it's our foundation. We
                invest in top-tier equipment, work with talented professionals, and
                maintain rigorous standards throughout every phase of production.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                From pre-production planning to post-production finishing, every detail
                receives our full attention. We believe that excellence in the small
                things leads to greatness in the final product.
              </p>
              <Link href="/contact">
                <Button data-testid="button-work-together">
                  Work With Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-md overflow-hidden">
                <img
                  src={productionImage}
                  alt="Professional production equipment"
                  className="w-full h-full object-cover"
                  data-testid="img-equipment"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
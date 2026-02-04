import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Film, Tv, Music, Sparkles, Check } from "lucide-react";

import filmImage from "@assets/WhatsApp_Image_2026-01-29_at_12.44.07_(5)_1770195546779.jpeg";
import commercialImage from "@assets/WhatsApp_Image_2026-01-29_at_12.55.41_1770195627607.jpeg";
import musicVideoImage from "@assets/WhatsApp_Image_2026-01-29_at_12.55.42_1770195655081.jpeg";
import motionImage from "@assets/WhatsApp_Image_2026-01-29_at_12.44.08_(2)_1770195556825.jpeg";

const services = [
  {
    id: "films",
    icon: Film,
    title: "Movies & Series",
    description: "From concept to screen, we bring stories to life with cinematic excellence. Our film production services cover every aspect of creating compelling narratives that captivate audiences.",
    image: filmImage,
    features: [
      "Full-length feature films",
      "Television series production",
      "Short films and documentaries",
      "Script development and storyboarding",
      "Professional cinematography",
      "Post-production and editing",
    ],
  },
  {
    id: "commercials",
    icon: Tv,
    title: "Commercials",
    description: "High-impact advertising content that elevates your brand and connects with your target audience. We create commercials that leave lasting impressions and drive results.",
    image: commercialImage,
    features: [
      "Television commercials",
      "Digital advertising content",
      "Brand films and corporate videos",
      "Product launches",
      "Social media campaigns",
      "Broadcast-quality production",
    ],
  },
  {
    id: "music-videos",
    icon: Music,
    title: "Music Videos",
    description: "Visual storytelling that amplifies the power of music. We collaborate with artists to create stunning music videos that capture the essence of their sound and vision.",
    image: musicVideoImage,
    features: [
      "Concept development",
      "Artist-focused storytelling",
      "Creative direction",
      "Choreography integration",
      "Performance capture",
      "Color grading and effects",
    ],
  },
  {
    id: "motion-graphics",
    icon: Sparkles,
    title: "Motion Graphics",
    description: "Dynamic visual content that brings ideas to life through animation and effects. Our motion graphics elevate presentations, enhance videos, and create memorable visual experiences.",
    image: motionImage,
    features: [
      "2D and 3D animation",
      "Title sequences and intros",
      "Visual effects (VFX)",
      "Explainer videos",
      "Logo animations",
      "Infographics and data visualization",
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      <section className="pt-12 pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6" data-testid="text-services-title">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From concept to final cut, we offer comprehensive production services
              that transform creative visions into stunning visual content.
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                data-testid={`section-service-${service.id}`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact">
                    <Button data-testid={`button-discuss-${service.id}`}>
                      Discuss Your Project
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="aspect-[4/3] rounded-md overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      data-testid={`img-service-${service.id}`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Card className="mt-24 bg-card border-primary/20" data-testid="card-cta">
            <CardContent className="p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Have a <span className="text-gradient">Project in Mind?</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Let's discuss how we can bring your vision to life. Our team is ready
                to collaborate on your next production.
              </p>
              <Link href="/contact">
                <Button size="lg" data-testid="button-start-project">
                  Start a Project
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
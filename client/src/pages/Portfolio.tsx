import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import image1 from "@assets/WhatsApp_Image_2026-01-29_at_12.44.06_(1)_1770195526013.jpeg";
import image2 from "@assets/WhatsApp_Image_2026-01-29_at_12.44.07_(3)_1770195534167.jpeg";
import image3 from "@assets/WhatsApp_Image_2026-01-29_at_12.44.07_(4)_1770195541763.jpeg";
import image4 from "@assets/WhatsApp_Image_2026-01-29_at_12.44.07_(5)_1770195546779.jpeg";
import image5 from "@assets/WhatsApp_Image_2026-01-29_at_12.44.08_(2)_1770195556825.jpeg";
import image6 from "@assets/WhatsApp_Image_2026-01-29_at_12.44.08_(3)_1770195565153.jpeg";
import image7 from "@assets/WhatsApp_Image_2026-01-29_at_12.55.40_(1)_1770195619191.jpeg";
import image8 from "@assets/WhatsApp_Image_2026-01-29_at_12.55.41_1770195627607.jpeg";
import image9 from "@assets/WhatsApp_Image_2026-01-29_at_12.55.42_(1)_1770195640759.jpeg";
import image10 from "@assets/WhatsApp_Image_2026-01-29_at_12.55.42_1770195655081.jpeg";
import image11 from "@assets/WhatsApp_Image_2026-01-29_at_12.55.43_1770195662994.jpeg";
import image12 from "@assets/WhatsApp_Image_2026-01-29_at_12.56.43_(1)_1770195671059.jpeg";
import image13 from "@assets/WhatsApp_Image_2026-01-29_at_12.56.43_1770195680424.jpeg";

type Category = "all" | "production" | "behind-scenes" | "equipment";

interface GalleryImage {
  src: string;
  alt: string;
  category: Category;
}

const galleryImages: GalleryImage[] = [
  { src: image1, alt: "Film production setup", category: "production" },
  { src: image2, alt: "Behind the scenes filming", category: "behind-scenes" },
  { src: image3, alt: "Professional camera work", category: "equipment" },
  { src: image4, alt: "Production on set", category: "production" },
  { src: image5, alt: "Interior filming setup", category: "behind-scenes" },
  { src: image6, alt: "Film crew at work", category: "production" },
  { src: image7, alt: "Professional camera at sunset", category: "equipment" },
  { src: image8, alt: "Studio lighting setup", category: "equipment" },
  { src: image9, alt: "Location filming", category: "behind-scenes" },
  { src: image10, alt: "Indoor scene filming", category: "production" },
  { src: image11, alt: "Portrait photography", category: "behind-scenes" },
  { src: image12, alt: "Equipment setup outdoor", category: "equipment" },
  { src: image13, alt: "Team meeting", category: "behind-scenes" },
];

const categories = [
  { value: "all" as Category, label: "All Work" },
  { value: "production" as Category, label: "Production" },
  { value: "behind-scenes" as Category, label: "Behind the Scenes" },
  { value: "equipment" as Category, label: "Equipment" },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1
      );
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1
      );
    }
  };

  return (
    <Layout>
      <section className="pt-12 pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6" data-testid="text-portfolio-title">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our body of work showcasing professional film production,
              behind-the-scenes moments, and the equipment that brings our vision to life.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12" data-testid="filter-categories">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={activeCategory === category.value ? "default" : "outline"}
                onClick={() => setActiveCategory(category.value)}
                data-testid={`button-filter-${category.value}`}
              >
                {category.label}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" data-testid="gallery-grid">
            {filteredImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className="group relative aspect-square overflow-hidden rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                data-testid={`button-gallery-image-${index}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm text-white font-medium">{image.alt}</p>
                </div>
              </button>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl w-full p-0 bg-black border-none">
          <div className="relative">
            <Button
              size="icon"
              variant="ghost"
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
              data-testid="button-close-lightbox"
            >
              <X className="w-5 h-5" />
            </Button>

            <Button
              size="icon"
              variant="ghost"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
              onClick={handlePrevious}
              data-testid="button-lightbox-previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button
              size="icon"
              variant="ghost"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
              onClick={handleNext}
              data-testid="button-lightbox-next"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {selectedImage !== null && (
              <div className="flex items-center justify-center min-h-[60vh] max-h-[85vh]">
                <img
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].alt}
                  className="max-w-full max-h-[85vh] object-contain"
                  data-testid="img-lightbox-current"
                />
              </div>
            )}

            {selectedImage !== null && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-center">{filteredImages[selectedImage].alt}</p>
                <p className="text-white/60 text-sm text-center mt-1">
                  {selectedImage + 1} / {filteredImages.length}
                </p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
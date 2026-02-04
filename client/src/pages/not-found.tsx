import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <section className="min-h-[60vh] flex items-center justify-center bg-background">
        <div className="text-center px-4">
          <h1 className="text-8xl font-bold text-gradient mb-4" data-testid="text-404">
            404
          </h1>
          <h2 className="text-2xl font-semibold mb-4" data-testid="text-not-found-title">
            Scene Not Found
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <Button data-testid="button-go-home">
                <Home className="mr-2 w-4 h-4" />
                Go Home
              </Button>
            </Link>
            <Button
              variant="outline"
              onClick={() => window.history.back()}
              data-testid="button-go-back"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Go Back
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">
            404
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Page Not Found
          </h2>
          
          <p className="text-muted-foreground mb-8">
            Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/">
                <Home className="h-4 w-4 mr-2" />
                Go Home
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">
                <ArrowLeft className="h-4 w-4 mr-2" />
                View Projects
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

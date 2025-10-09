import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { scenarios } from '@/lib/scenarios';
import { ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const scenarioImages = PlaceHolderImages.reduce((acc, img) => {
  acc[img.id] = img;
  return acc;
}, {} as Record<string, (typeof PlaceHolderImages)[0]>);

export default function Home() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary">Welcome to FinShenz!</h1>
        <p className="mt-1 text-sm text-muted-foreground">Financial Conscience for the young adult</p>
        <p className="mt-4 text-lg text-muted-foreground">Your journey to financial literacy starts here. Select a scenario to begin.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {scenarios.map((scenario) => {
          const image = scenarioImages[scenario.slug];
          return (
            <Link href={`/scenario/${scenario.slug}`} key={scenario.slug} className="group">
              <Card className="h-full transition-all duration-300 hover:border-primary hover:shadow-lg hover:-translate-y-1 flex flex-col overflow-hidden">
                {image && (
                   <div className="relative w-full h-40">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      style={{ objectFit: 'cover' }}
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                )}
                <CardHeader className="flex-grow">
                  <CardTitle className="font-headline text-base leading-snug">{scenario.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-end text-sm text-muted-foreground">
                        <span>Explore</span>
                        <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

       <div>
        <h2 className="text-2xl font-bold text-center mb-6 font-headline text-primary">Explore All Scenarios</h2>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {scenarios.map((scenario) => {
              const image = scenarioImages[scenario.slug];
              return (
              <CarouselItem key={scenario.slug} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Link href={`/scenario/${scenario.slug}`} className="group">
                    <Card className="h-full transition-all duration-300 hover:border-primary hover:shadow-lg hover:-translate-y-1 flex flex-col overflow-hidden">
                       {image && (
                        <div className="relative w-full h-40">
                          <Image
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            style={{ objectFit: 'cover' }}
                            data-ai-hint={image.imageHint}
                          />
                        </div>
                      )}
                      <CardHeader className="flex-grow">
                        <CardTitle className="font-headline text-base leading-snug">{scenario.title}</CardTitle>
                      </CardHeader>
                       <CardContent>
                        <div className="flex items-center justify-end text-sm text-muted-foreground">
                            <span>Explore</span>
                            <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </div>
                    </CardContent>
                    </Card>
                  </Link>
                </div>
              </CarouselItem>
            )})}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </div>
  );
}

import Link from 'next/link';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { scenarios } from '@/lib/scenarios';
import { ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary">Welcome to FinShenz!</h1>
        <p className="mt-2 text-lg text-muted-foreground">Your journey to financial literacy starts here. Select a scenario to begin.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {scenarios.map((scenario) => (
          <Link href={`/scenario/${scenario.slug}`} key={scenario.slug} className="group">
            <Card className="h-full transition-all duration-300 hover:border-primary hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="space-y-1">
                  <CardTitle className="font-headline text-base leading-snug">{scenario.title}</CardTitle>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

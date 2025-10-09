"use client";

import { useEffect } from 'react';
import { useParams, notFound, useRouter } from 'next/navigation';
import { scenarios } from '@/lib/scenarios';
import { useUserData } from '@/hooks/useUserData';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle2, ArrowLeft, PartyPopper } from 'lucide-react';

export default function ScenarioPage() {
  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const slug = typeof params.slug === 'string' ? params.slug : '';
  const scenario = scenarios.find((s) => s.slug === slug);
  
  const { userData, setCheckedState, completeScenario, isLoaded } = useUserData();
  
  const checkedItems = userData.checkedItems[slug] || [];
  const isCompleted = userData.completedScenarios.includes(slug);

  useEffect(() => {
    if (!scenario || !isLoaded) return;

    const allItemsChecked = scenario.checklist.every(item => checkedItems.includes(item.id));
    const scenarioAlreadyCompleted = userData.completedScenarios.includes(slug);

    if (allItemsChecked && !scenarioAlreadyCompleted) {
      completeScenario(slug);
      toast({
        title: "Scenario Complete!",
        description: "You've earned 100 points.",
        action: (
          <div className="flex items-center font-bold text-accent">
            <PartyPopper className="mr-2 h-5 w-5" />
            +100 Points
          </div>
        )
      });
    }
  }, [checkedItems, scenario, slug, completeScenario, userData.completedScenarios, toast, isLoaded]);

  if (!isLoaded) {
    return (
        <div className="flex justify-center items-center h-full pt-16">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary"></div>
        </div>
    );
  }

  if (!scenario) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Button variant="ghost" onClick={() => router.back()} className="mb-4 -ml-4">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Scenarios
      </Button>

      <Card className="mb-6 overflow-hidden">
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-2xl font-headline text-primary">{scenario.title}</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <h2 className="text-xl font-bold mb-2 font-headline">The Lowdown</h2>
          <p className="text-muted-foreground">{scenario.lowdown}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-headline flex items-center">
            Your Action Plan
            {isCompleted && <CheckCircle2 className="ml-3 h-6 w-6 text-accent" />}
          </CardTitle>
          <CardDescription>Complete the checklist to master this topic.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          {scenario.checklist.map((item, index) => (
            <div key={item.id}>
              <div className="flex items-start space-x-3 rounded-md p-3 transition-colors hover:bg-secondary/50">
                <Checkbox
                  id={`${slug}-${item.id}`}
                  checked={checkedItems.includes(item.id)}
                  onCheckedChange={(checked) => {
                    setCheckedState(slug, item.id, !!checked);
                  }}
                  className="mt-1 h-5 w-5 data-[state=checked]:bg-accent data-[state=checked]:border-accent-foreground/50 border-muted-foreground"
                  aria-labelledby={`label-${slug}-${item.id}`}
                />
                <Label
                  htmlFor={`${slug}-${item.id}`}
                  id={`label-${slug}-${item.id}`}
                  className={`flex-1 text-sm font-medium leading-relaxed peer-disabled:cursor-not-allowed peer-disabled:opacity-70 transition-colors ${
                    checkedItems.includes(item.id) ? 'line-through text-muted-foreground' : ''
                  }`}
                >
                  {item.text}
                </Label>
              </div>
              {index < scenario.checklist.length - 1 && <Separator />}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

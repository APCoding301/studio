"use client";

import { useUserData } from '@/hooks/useUserData';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { scenarios } from '@/lib/scenarios';
import { Trophy, Star, ListChecks } from 'lucide-react';

export default function ProfilePage() {
  const { userData, isLoaded } = useUserData();

  const masteredScenarios = scenarios.filter(s => userData.completedScenarios.includes(s.slug));

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-full pt-16">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary">Fin-Explorer</h1>
        <p className="mt-2 text-lg text-muted-foreground">Your Financial Progress</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="flex flex-col items-center justify-center text-center p-8 bg-primary/10">
          <Trophy className="w-16 h-16 text-primary mb-4" />
          <CardTitle className="text-5xl font-bold text-primary">{userData.points}</CardTitle>
          <CardDescription className="text-lg text-primary/80">Total Points</CardDescription>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline">
              <ListChecks className="w-6 h-6 text-muted-foreground" />
              Topics Mastered
            </CardTitle>
            <CardDescription>You've completed {masteredScenarios.length} scenario(s).</CardDescription>
          </CardHeader>
          <CardContent>
            {masteredScenarios.length > 0 ? (
              <ul className="space-y-3">
                {masteredScenarios.map(scenario => (
                  <li key={scenario.slug} className="flex items-center gap-3 p-2 rounded-md bg-secondary/50">
                    <Star className="w-5 h-5 text-accent" />
                    <span className="font-medium">{scenario.title}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center text-muted-foreground py-8">
                <p>No topics mastered yet.</p>
                <p className="text-sm">Complete your first checklist to see it here!</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

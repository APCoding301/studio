import Link from 'next/link';
import { User, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary">
          <Rocket className="w-6 h-6" />
          <span className='font-headline'>FinShenz</span>
        </Link>
        <nav>
          <Link href="/profile">
            <Button variant="ghost" size="icon" aria-label="Profile">
              <User className="w-6 h-6" />
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}

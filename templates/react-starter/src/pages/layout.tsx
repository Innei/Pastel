import { Link, Outlet } from 'react-router';

import { ThemeToggle } from '~/features/theme';

export function Component() {
  return (
    <div className="min-h-dvh">
      <header className="border-b border-border">
        <nav className="mx-auto flex max-w-3xl items-center justify-between p-4">
          <div className="flex items-center gap-4 text-sm">
            <Link className="font-semibold text-text" to="/">
              Pastel Starter
            </Link>
            <Link className="text-text-secondary hover:text-text" to="/design">
              Design
            </Link>
            <Link className="text-text-secondary hover:text-text" to="/about">
              About
            </Link>
          </div>
          <ThemeToggle />
        </nav>
      </header>
      <main className="mx-auto max-w-3xl p-6">
        <Outlet />
      </main>
    </div>
  );
}

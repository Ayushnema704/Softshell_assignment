import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="fixed top-4 right-4 p-3 rounded-full bg-glass dark:bg-glassDark text-dark dark:text-light hover:bg-primary hover:text-white transition-colors z-50 shadow-lg"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <SunIcon className="h-7 w-7" />
      ) : (
        <MoonIcon className="h-7 w-7" />
      )}
    </button>
  );
};

export default ThemeToggle; 
import './globals.css';

export const metadata = {
  title: 'The Parker Collective',
  description: 'Social media strategy and content creation in Louisville, Kentucky.',
  // Keep the unfinished setup out of search results. Remove before launch.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}

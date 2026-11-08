import './globals.css';

export const metadata = {
  title: 'The Parker Collective | Louisville Social Media Management',
  description: 'Social media management, content creation, and strategy for Louisville businesses. Explore The Parker Collective’s packages and work with Parker Wheatley.',
  // Keep the unfinished setup out of search results. Remove before launch.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}

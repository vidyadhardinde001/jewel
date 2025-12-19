import { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router'; // Import next router for route change handling
import LoadingSpinner from '../components/loadingSpinner'; // Import the loading spinner
import '../styles/globals.css'; // Assuming you have a global stylesheet
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }: AppProps) {
  const [loading, setLoading] = useState(false); // State for loading status

  useEffect(() => {
    // Show the loading spinner when the route starts changing
    const handleRouteChangeStart = () => setLoading(true);

    // Hide the loading spinner when the route has changed
    const handleRouteChangeComplete = () => setLoading(false);
    const handleRouteChangeError = () => setLoading(false);

    // Add event listeners to detect route change
    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeError);

    // Clean up the event listeners
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, [router]);

  useEffect(() => {
    // Scroll to top on page change
    const handleRouteChange = () => window.scrollTo(0, 0);
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return (
    <>
      {/* Show the loading spinner when loading is true */}
      {loading && <LoadingSpinner />}

      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;

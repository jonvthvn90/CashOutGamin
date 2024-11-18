import React, { useEffect } from 'react';
import { initialize, trackPageView } from 'react-ga';

const trackingId = 'UA-123456789-1';

const GoogleAnalytics = () => {
  useEffect(() => {
    initialize(trackingId);
    trackPageView(window.location.pathname);
  }, []);

  return null;
};

export default GoogleAnalytics;
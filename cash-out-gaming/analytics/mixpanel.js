import Mixpanel from 'mixpanel';

const mixpanel = new Mixpanel('YOUR_MIXPANEL_TOKEN');

const trackEvent = (event, properties) => {
  mixpanel.track(event, properties);
};

const trackPageView = () => {
  mixpanel.track('Page View', {
    page: window.location.pathname,
  });
};

const identifyUser = (userId, traits) => {
  mixpanel.identify(userId, traits);
};

export { trackEvent, trackPageView, identifyUser };
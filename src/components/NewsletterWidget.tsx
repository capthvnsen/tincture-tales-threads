import { useEffect, useState } from 'react';

const NewsletterWidget = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
    
    if (existingScript) {
      setScriptLoaded(true);
      return;
    }

    // Load the GoHighLevel form embed script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);

    // Don't remove script on unmount - it needs to persist for the widget
  }, []);

  return (
    <iframe
      src="https://api.leadconnectorhq.com/widget/form/3Ye0n2MxDHqsB8SyDv1h"
      style={{
        width: '100%',
        height: '100%',
        border: 'none',
        borderRadius: '30px'
      }}
      id="polite-slide-in-right-3Ye0n2MxDHqsB8SyDv1h"
      data-layout='{"id":"POLITE_SLIDE_IN","minimizedTitle":"Join the Newsletter","isLeftAligned":false,"isRightAligned":true,"allowMinimize":true}'
      data-trigger-type="showAfter"
      data-trigger-value="5"
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="Email newsletter"
      data-height="340"
      data-layout-iframe-id="polite-slide-in-right-3Ye0n2MxDHqsB8SyDv1h"
      data-form-id="3Ye0n2MxDHqsB8SyDv1h"
      title="Email newsletter"
    />
  );
};

export default NewsletterWidget;

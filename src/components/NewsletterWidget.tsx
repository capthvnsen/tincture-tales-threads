import { useEffect } from 'react';

const NewsletterWidget = () => {
  useEffect(() => {
    // Load the GoHighLevel form embed script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <iframe
      src="https://api.leadconnectorhq.com/widget/form/3Ye0n2MxDHqsB8SyDv1h"
      style={{ display: 'none', width: '100%', height: '100%', border: 'none', borderRadius: '30px' }}
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

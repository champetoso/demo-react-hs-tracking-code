import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    console.log("contact ready");
    if (window.HubSpotConversations) {
      console.log("convos true");
      window.history.pushState({}, "hs_bot1", "?hs_bot1=true");
      window.HubSpotConversations.widget.load();
      //window.HubSpotConversations.widget.refresh({ openToNewThread: true });
    } else {
      console.log("convos false");
    }
    return () => {
      console.log("contact unmounted");
      if (window.HubSpotConversations) {
        window.HubSpotConversations.widget.remove();
      }
    };
  }, []);

  return (
    <div>
      <h1>Contact Me</h1>
      <p>Click the widget below! &#x2B07;</p>
    </div>
  );
};

export default Contact;

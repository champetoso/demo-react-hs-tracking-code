import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  useEffect(() => {
    const PORTAL_ID = "20414112";

    window.hsConversationsSettings = {
      loadImmediately: false,
    };

    // Add event listener.
    window.hsConversationsOnReady = [
      () => {
        console.log("HubSpot Conversations", "READY");
      },
    ];

    // Create script component.
    let script = document.createElement("script");
    script.src = `//js.hs-scripts.com/${PORTAL_ID}.js`;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      window.hsConversationsOnReady = [];
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

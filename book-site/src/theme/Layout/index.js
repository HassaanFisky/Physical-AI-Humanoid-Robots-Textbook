import React from "react";
import Layout from "@theme-original/Layout";
import ChatWidget from "@site/src/components/ChatWidget";
import SnowOverlay from "@site/src/components/SnowOverlay";

export default function LayoutWrapper(props) {
  return (
    <>
      <Layout {...props} />
      <SnowOverlay />
      <ChatWidget />
    </>
  );
}

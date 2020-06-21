import Gallery from "./home-components/Gallery";
import Overview from "./home-components/Overview";
import Bio from "./home-components/Bio";
import React from "react";

export default function HomePage() {
  return (
    <React.Fragment>
      <Gallery />
      <Overview />
      <Bio />
    </React.Fragment>
  );
}

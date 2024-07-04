import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import "./Carousel.css";

const items = [
  {
    src:
      "https://images.ctfassets.net/rporu91m20dc/1eqiJ8nGs0sJcPwl92eqjc/5fc75a0474ee2c81efab3e42221c2199/fallout-76-hero-img?q=70&fm=webp",
    altText: "Slide 1",
    header: "Fallout 76",
    key: "1",
  },
  {
    src:
      "https://images.ctfassets.net/rporu91m20dc/5aPw1eUd6J5g49XbwxXKmb/fc396b6f4f60437fa2e5e4ca9083a05c/the-elder-scrolls--online--greymoor-hero-img?q=70&fm=webp",
    altText: "Slide 2",
    header: "The Elder Scrolls",
    key: "2",
  },
  {
    src:
      "https://images.ctfassets.net/rporu91m20dc/4fyPIj2zpEPPazHhMiaJ5M/c1093faf3ed923225169dd3b7b78d74b/prey-hero-img?q=70&fm=webp",
    altText: "Slide 3",
    header: "Prey",
    key: "3",
  },
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;

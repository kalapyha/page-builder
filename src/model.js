import image from "./assets/image.png";
import {
  TitleBlock,
  TextBlock,
  ColumnsBlock,
  ImageBlock,
} from "./classes/blocks";
export const model = [
  new TitleBlock("Vanilla JS Website Builder", {
    tag: "h2",
    styles: {
      color: "#fff",
      background:
        "linear-gradient(90deg, rgba(20,150,35,0.9444152661064426) 38%, rgba(0,212,255,1) 100%)",
      padding: "1.2rem",
      "text-align": "center",
    },
  }),
  new TextBlock("All these elements are made using JS model.", {
    styles: {
      padding: "1.2rem",
    },
  }),
  new ColumnsBlock(
    ["My first column", "My second column", "My third column", "My 4th column"],
    {
      styles: {
        padding: "1.2rem",
      },
    }
  ),
  new ImageBlock(image, {
    styles: {
      display: "flex",
      "justify-content": "center",
      "margin-top": "1.2rem",
    },
  }),
];

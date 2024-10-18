import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon";

it("renders Card", () => {
  render(<Card caption={TEST_IMAGES.caption} src={TEST_IMAGES.src} />);
});

it("matches snapshot", () => {
  const { asFragment } = render(
    <Card
      caption={TEST_IMAGES.caption}
      src={TEST_IMAGES.src}
      cardNum={1}
      totalNum={1}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

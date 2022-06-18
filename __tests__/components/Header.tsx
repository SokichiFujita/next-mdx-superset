import Header from "@/components/Header";
import { render, screen } from "@testing-library/react";

describe("Header component", () => {
  test("should have service name", () => {
    const title = "ServiceName";
    render(<Header service_title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});

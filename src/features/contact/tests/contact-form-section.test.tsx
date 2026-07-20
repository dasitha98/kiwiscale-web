import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactFormSection from "../contact-page";

describe("ContactFormSection", () => {
  test("shows success message after valid form submission", async () => {
    const user = userEvent.setup();

    render(<ContactFormSection />);

    await user.type(
      screen.getByPlaceholderText("Your Name *"),
      "Dasitha"
    );

    await user.type(
      screen.getByPlaceholderText("Email *"),
      "dasitha@example.com"
    );

    await user.type(
      screen.getByPlaceholderText("Tell us about your project *"),
      "I need a new website"
    );

    await user.click(
      screen.getByRole("button", {
        name: /send message/i,
      })
    );

    expect(
      screen.getByText("Thank you!")
    ).toBeInTheDocument();
  });

  test("does not submit when required fields are empty", async () => {
    const user = userEvent.setup();

    render(<ContactFormSection />);

    await user.click(
      screen.getByRole("button", {
        name: /send message/i,
      })
    );

    expect(
      screen.queryByText("Thank you!")
    ).not.toBeInTheDocument();
  });
});
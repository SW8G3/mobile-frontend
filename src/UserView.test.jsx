// UserView.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import UserView from "./UserView";
jest.mock("swiper/react");
jest.mock("swiper/modules");

// Mock swiper at the top of the file
jest.mock("swiper/react", () => ({
  Swiper: ({ children }) => <div data-testid="carousel-container">{children}</div>,
  SwiperSlide: ({ children }) => <div>{children}</div>,
}));

describe("UserView Component", () => {
  it("renders the start button initially", () => {
    render(<UserView />);
    const startButton = screen.getByText(/Start Guide/i);
    expect(startButton).toBeInTheDocument();
  });

  it("starts the guide when the start button is clicked", () => {
    render(<UserView />);
    const startButton = screen.getByText(/Start Guide/i);

    // Click the start button
    fireEvent.click(startButton);

    // Check if the carousel is rendered
    const carousel = screen.getByTestId("carousel-container");
    expect(carousel).toBeInTheDocument();
  });

  it("displays the correct step instructions", () => {
    render(<UserView />);
    const startButton = screen.getByText(/Start Guide/i);

    // Start the guide
    fireEvent.click(startButton);

    // Check if the first step instruction is displayed
    const stepInstruction = screen.getByText(/Step 1: Go straight from the entrance/i);
    expect(stepInstruction).toBeInTheDocument();
  });

  // Optional: Test Swiper navigation (next/prev buttons)
  it("navigates to the next step when the next button is clicked", () => {
    render(<UserView />);
    const startButton = screen.getByText(/Start Guide/i);

    // Start the guide
    fireEvent.click(startButton);

    // Find the next button (you may need to add a test ID to the button in your component)
    const nextButton = screen.getByTestId("swiper-button-next");
    fireEvent.click(nextButton);

    // Check if the second step instruction is displayed
    const stepInstruction = screen.getByText(/Step 2: Turn left at the first corridor/i);
    expect(stepInstruction).toBeInTheDocument();
  });
});
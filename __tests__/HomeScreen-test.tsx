import { render, screen } from "@testing-library/react-native";
import HomeScreen from "@/app/index";

describe("<HomeScreen />", () => {
  test("HomeScreen renders correctly", () => {
    // Arrange & Act
    render(<HomeScreen />);

    // Assert
    expect(screen.toJSON()).toMatchSnapshot();
  });
});

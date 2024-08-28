import { render } from "@testing-library/react-native";

import TransactionsScreen from "@/app/transactions";

jest.mock("@/utils/transactionsService", () => {
  return {
    getTransactions: jest
      .fn()
      .mockReturnValueOnce([
        {
          id: "tx001",
          amount: 150.75,
          date: "2024-08-01",
          description: "Grocery Shopping",
          type: "debit",
          status: "closed",
          sender: "Master of puppets",
          receiver: "Current user",
        },
        {
          id: "tx002",
          amount: 2500.0,
          date: "2024-08-03",
          description: "Salary",
          type: "credit",
          status: "closed",
          sender: "Master of puppets",
          receiver: "Current user",
        },
      ])
      .mockReturnValueOnce([]),
  };
});

describe("<TransactionsScreen />", () => {
  test("TransactionsScreen renders correctly", () => {
    // Arrange & Act
    const screen = render(<TransactionsScreen />);

    // Assert
    expect(screen.toJSON()).toMatchSnapshot();
  });

  test("TransactionsScreen without data", () => {
    // Arrange & Act
    const screen = render(<TransactionsScreen />);

    // Assert
    expect(screen.getByText("No items")).toBeTruthy(); // to be on screen
  });
});

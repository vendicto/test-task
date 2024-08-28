import transactionsService, { transactions } from "../transactionsService";

describe("transactionsService", () => {
  describe("getTransactions", () => {
    test("should return transactions", () => {
      // Arrange & Act
      const result = transactionsService.getTransactions();

      // Assert
      expect(result).toStrictEqual(transactions);
    });
  });

  describe("getTransactionById", () => {
    test("should return transaction", () => {
      // Arrange & Act
      const transaction = transactions.find((item) => item.id === "tx002");
      const result = transactionsService.getTransactionById("tx002");

      // Assert
      expect(result).toStrictEqual(transaction);
    });

    test("should return null if could not find transaction by id", () => {
      // Arrange & Act
      const result = transactionsService.getTransactionById("tx0021");

      // Assert
      expect(result).toBeNull();
    });
  });
});

import { TFilter } from "../../../../types";
import { mockTransactionData } from "../../../../utils/testMockData";
import { filterByDays } from "../utils/filterByDays";
import { filterByDateRange } from "../utils/filterByRange";
import { filterByStatus } from "../utils/filterByStatus";
import { filterByType } from "../utils/filterByType";

describe("test utility functions", () => {
  const mockFilterByDaysCriteria: TFilter = {
    days: "Last 7 days",
    endDate: "",
    startDate: "",
    status: [""],
    type: [""],
  };

  const mockFilterBytypeCriteria: TFilter = {
    type: ["Withdrawals"],
    days: "",
    endDate: "",
    startDate: "",
    status: [""],
  };

  const mockFilterByStatusCriteria: TFilter = {
    status: ["Successful"],
    days: "",
    endDate: "",
    startDate: "",
    type: [""],
  };
  const mockFilterByRangeCriteria: TFilter = {
    status: [""],
    days: "",
    endDate: "Wed Nov 28 2023 00:00:00 GMT+0100 (West Africa Standard Time)",
    startDate: "Wed Oct 04 2023 00:00:00 GMT+0100 (West Africa Standard Time)",
    type: [""],
  };

  test("filterByDays filters data correctly for Last 7 days", () => {
    const filteredData = filterByDays(
      mockTransactionData,
      mockFilterByDaysCriteria
    );
    expect(filteredData?.length).toBe(2);
  });

  test("filterByDateRange filters data correctly for the given date range", () => {
    const filteredData = filterByDateRange(
      mockTransactionData,
      mockFilterByRangeCriteria
    );
    expect(filteredData?.length).toBe(3);
  });

  test("filterByType filters data correctly for the given type", () => {
    const filteredData = filterByType(
      mockTransactionData,
      mockFilterBytypeCriteria
    );
    expect(filteredData?.length).toBe(2);
  });
  test("filterByStatus filters data correctly for the given status", () => {
    const filteredData = filterByStatus(
      mockTransactionData,
      mockFilterByStatusCriteria
    );
    expect(filteredData?.length).toBe(3);
  });
});

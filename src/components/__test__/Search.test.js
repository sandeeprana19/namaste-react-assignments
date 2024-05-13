import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import RESTAURANT_CARD_MOCK_DATA from "../mocks/restaurantCardMockData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(RESTAURANT_CARD_MOCK_DATA),
  })
);

describe("Should initialize all search feature text cases in home page below", () => {
  it("Should render restaurant cards before search", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const restaurantCardsBeforeSearch = screen.getAllByTestId("restaurantCard");

    expect(restaurantCardsBeforeSearch.length).toBe(9);
  });

  it("Should render restaurant cards after search", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "pizza hut" } });

    fireEvent.keyDown(searchInput, {
      key: "Enter",
    });

    const restaurantCardsAfterSearch = screen.getAllByTestId("restaurantCard");

    expect(restaurantCardsAfterSearch.length).toBe(1);
  });
});

import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import RESTAURANT_LIST_MOCK_DATA from "../mocks/restaurantListMockData.json";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(RESTAURANT_LIST_MOCK_DATA),
  })
);

describe("Should initialize all cart flow text cases below", () => {
  it("Should render food item list", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );

    const accordionHeader = screen.getByText("Recommended (20)");

    fireEvent.click(accordionHeader);

    const foodItems = screen.getAllByTestId("foodItem");

    expect(foodItems.length).toBe(20);
  });

  it("Should render with no added food item in cart", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
          </Provider>
        </BrowserRouter>
      )
    );

    const cartWrap = screen.getByTestId("cartWrap");

    expect(cartWrap.textContent).toBe("Cart");
  });

  it("Should add one food item in cart", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
          </Provider>
        </BrowserRouter>
      )
    );

    const accordionHeader = screen.getByText("Recommended (20)");

    fireEvent.click(accordionHeader);

    const addButton = screen.getAllByRole("button", { name: "Add +" });
    fireEvent.click(addButton[0]);

    const cart = screen.getByTestId("cart");

    expect(cart.textContent).toBe("1");
  });

  it("Should add two food item in cart", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
          </Provider>
        </BrowserRouter>
      )
    );

    const accordionHeader = screen.getByText("Recommended (20)");
    fireEvent.click(accordionHeader);

    const addButton = screen.getAllByRole("button", { name: "Add +" });
    fireEvent.click(addButton[1]);

    const cart = screen.getByTestId("cart");

    expect(cart.textContent).toBe("2");
  });

  it("Should render cart page with added food items list", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );

    const foodItems = screen.getAllByTestId("foodItem");

    expect(foodItems.length).toBe(2);
  });

  it("Should render empty cart with message", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );

    const clearCartButton = screen.getByRole("button", { name: "Clear Cart" });

    fireEvent.click(clearCartButton);

    const emptyCartMessage = screen.getByText(
      "Your cart is empty. You can go to the home page to view more restaurant and add food to your cart."
    );

    expect(emptyCartMessage).toBeInTheDocument();
  });
});

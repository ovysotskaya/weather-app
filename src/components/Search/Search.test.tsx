import {render, screen, act} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"
import Search from "./Search"
import store from "../../redux/store";
import {Provider} from "react-redux";
import {QueryClient, QueryClientProvider} from "react-query";

test("Type empty value and check suggestions", async () => {

    render(
        <Provider store={store}>
            <QueryClientProvider client={new QueryClient()}>
                <Search/>
            </QueryClientProvider>
        </Provider>
    )

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act( async () => {
        userEvent.type(screen.getByTestId("geosearch"), " ")
    })

    expect(screen.getByText("No locations")).toBeVisible()
})

test("Type city name and check suggestions", async () => {

    render(
        <Provider store={store}>
            <QueryClientProvider client={new QueryClient()}>
                <Search/>
            </QueryClientProvider>
        </Provider>
    )

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act( async () => {
        userEvent.type(screen.getByTestId("geosearch"), "Minsk")
    })

    const listItems = await screen.findAllByRole("option")

    expect(listItems.length).toBe(1)
    expect(listItems[0]).toHaveTextContent("Minsk, , BY")
})

test("Type and select unique city", async () => {

    render(
        <Provider store={store}>
            <QueryClientProvider client={new QueryClient()}>
                <Search/>
            </QueryClientProvider>
        </Provider>
    )

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act( async () => {
        userEvent.type(screen.getByTestId("geosearch"), "Minsk")
    })

    const listItems = await screen.findAllByRole("option")

    expect(listItems.length).toBe(1)

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act( async () => {
        userEvent.click(listItems[0])
    })

    expect(screen.queryByRole("option")).toBeNull()
})
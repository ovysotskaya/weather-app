import {render, screen, act} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Search from './Search'
import store from "../../redux/store";
import {Provider} from "react-redux";
import {QueryClient, QueryClientProvider} from "react-query";

test('Type city name and check suggestions', async () => {
    render(
        <Provider store={store}>
            <QueryClientProvider client={new QueryClient()}>
                <Search/>
            </QueryClientProvider>
        </Provider>
    )

    userEvent.type(screen.getByTestId('geosearch'), " ")

    //expect(screen.getByText("No locations")).toBeInTheDocument()
})
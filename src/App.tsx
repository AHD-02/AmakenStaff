import { RouterProvider } from "react-router-dom";
import router from "routes";
import ThemeCustomization from "theme";
import { IntlProvider } from "react-intl";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import advancedFormat from "dayjs/plugin/advancedFormat";
import "react-toastify/dist/ReactToastify.css";

import utc from "dayjs/plugin/utc";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { ToastContainer } from "react-toastify";
import RTLLayout from "componentsss/RTLLayout";
import ScrollTop from "componentsss/ScrollTop";
dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.extend(advancedFormat);

const App = () => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
          <IntlProvider locale="en" defaultLocale="en">
            <ThemeCustomization>
              <RTLLayout>
                <ScrollTop>
                  <>
                    <ToastContainer
                      position="top-right"
                      autoClose={2000}
                      hideProgressBar={true}
                      newestOnTop
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss={false}
                      draggable
                      pauseOnHover
                    />
                    <RouterProvider router={router} />
                  </>
                </ScrollTop>
              </RTLLayout>
            </ThemeCustomization>
          </IntlProvider>
      </LocalizationProvider>
    </>
  );
};

export default App;

import { RouterProvider } from "react-router-dom";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import advancedFormat from "dayjs/plugin/advancedFormat";
import "react-toastify/dist/ReactToastify.css";
import utc from "dayjs/plugin/utc";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { ToastContainer } from "react-toastify";
import { ScrollTop } from "./Components";
import router from "./routes";
import ThemeCustomization from "./theme";

dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.extend(advancedFormat);

const App = () => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeCustomization>
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
        </ThemeCustomization>
      </LocalizationProvider>
    </>
  );
};

export default App;

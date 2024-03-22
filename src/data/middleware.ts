import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { Mutex } from "async-mutex";
import { toast } from "react-toastify";
import ENV from "env";
import { RootState } from "state/store";
import { setTokens, logout } from "state/user";

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: `${ENV.AMAKEN_API_BASE_URL}`,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).user.accessToken;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const customFetchBase: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {

  await mutex.waitForUnlock();

  let result = (await baseQuery(args, api, {})) as any;
  const state: any = api.getState() as RootState;

  if (
    result.meta.request.method === "POST" &&
    result.meta.response.status === 200
  )
    toast.success("Action successful");
  if (result.meta.response.status === 500) toast.error("Something went wrong");
  if (
    (result.meta.request.method === "POST" ||
      (result.meta.request.method === "GET" &&
        state?.user?.accessToken != null)) &&
    result.meta.response.status >= 400 &&
    result.meta.response.status < 500
  ) {
    toast.error(result.error?.data);
  }

  if (result?.error?.data?.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const state: any = api.getState() as RootState;
        const refreshToken = state.user?.refreshToken;
        if (refreshToken) {
          const refreshResult = (await baseQuery(
            {
              url: "Users/login",
              method: "POST",
              body: {
                refreshToken,
              },
            },
            api,
            extraOptions
          )) as any;
          if (refreshResult?.data?.jwt) {
            const isBlocked = refreshResult?.data?.isBlocked;
            const accessToken = refreshResult.data?.jwt;
            const refreshToken = refreshResult?.data?.refreshToken;

            api.dispatch(
              setTokens({
                accessToken,
                refreshToken,
                isBlocked,
              })
            );
          }

          if (refreshResult?.data) {
            result = await baseQuery(args, api, extraOptions);
          } else {
            api.dispatch(logout());
          }
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};

export default customFetchBase;

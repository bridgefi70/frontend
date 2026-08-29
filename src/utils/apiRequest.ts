import { toast } from "react-hot-toast";
import { API_URL } from "../confiq";



type ApiResponse<T = any> = {
  success: boolean;
  data: T | null;
};

type ApiOptions = {
  method?: string;
  body?: Record<string, any> | FormData;
  headers?: Record<string, string>;
  showSuccess?: boolean;
  showLoading?: boolean;
  showError?: boolean;
  isFormData?: boolean;
  timeout?: number;
  redirectOnAuthError?: boolean;
};

export const apiRequest = async <T = any>(
  endpoint: string,
  {
    method = "GET",
    body,
    headers = {},
    showSuccess = false,
    showLoading = true,
    showError = true,
    isFormData = false,
    redirectOnAuthError = true,
    timeout = 60000,
  }: ApiOptions = {}
): Promise<ApiResponse<T>> => {

  // console.log(endpoint)

  const toastId = showLoading
    ? toast.loading("Please wait...")
    : undefined;

  const controller = new AbortController();

  const timeoutId = setTimeout(() => {
    // console.log("ABORTING REQUEST:", endpoint);
    controller.abort();
  }, timeout);

  try {
    const requestHeaders: Record<string, string> = {
      ...headers,
    };

    if (!isFormData) {
      requestHeaders["Content-Type"] = "application/json";
    }

    const response = await fetch(`${API_URL}${endpoint}`, {
      method,
      credentials: "include", // Cookie auth
      headers: requestHeaders,
      signal: controller.signal,
      body: isFormData
        ? (body as FormData)
        : body
          ? JSON.stringify(body ?? {})
          : undefined,
    });

    clearTimeout(timeoutId);

    const text = await response.text();

    // console.log("RAW RESPONSE:", text);
    const data = text ? JSON.parse(text) : null;

    if (toastId) toast.dismiss(toastId);

    // console.log({
    //   endpoint,
    //   status: response.status,
    //   data,
    // });



    if (
      response.status === 401 ||
      data?.message === "No token provided"
    ) {

      localStorage.removeItem("user");
      localStorage.removeItem("tutorToken");
      localStorage.removeItem("academy_data");


      if (showError) {

        toast.error(
          data?.message || "Session expired"
        );

      }


      // =========================================
      // ONLY REDIRECT IF ALLOWED
      // =========================================

      if (
        redirectOnAuthError &&
        !window.location.pathname.includes("/auth")
      ) {

        window.location.href =
          `${API_URL}/auth/auth/twitter?source=website`;

      }


      return {
        success: false,
        data,
      };
    }

    if (!response.ok) {
      if (showError) {
        toast.error(
          data?.msg ||
          data?.message ||
          data?.error ||
          "Something went wrong!"
        );
      }

      return {
        success: false,
        data,
      };
    }

    if (
      showSuccess &&
      (data?.msg || data?.message)
    ) {
      toast.success(data.msg || data.message);
    }

    return {
      success: true,
      data,
    };


  } catch (error: any) {

    clearTimeout(timeoutId);

    if (toastId) {
      toast.dismiss(toastId);
    }

    if (showError) {

      if (error.name === "AbortError") {
        toast.error("Request timeout.");
      } else {
        toast.error("Network error! Please try again.");
      }

    }

    console.error("API Error:", error);

    return {
      success: false,
      data: null,
    };
  }
};

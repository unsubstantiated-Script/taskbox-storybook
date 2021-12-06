import env from "../environment";
import { apiPath } from "./apiPath";

/**
 * Wraps a native fetch call with some predefined headers and
 * a resolved API path (if using a relative URL).
 *
 * @example
 * makeRequest("/example/items", { method: "get" })
 *  .then(res => {
 *    // Do something with res
 *  });
 *
 * @param {string} input - The path or URL to request.
 * @param {object} init - Options object forwarded to `fetch` function.
 * @param {string} apiBase - Base URL for API calls.
 */
export function makeRequest(input, init = {}, apiBase) {
  let path = input instanceof URL ? input.toString() : input;
  let headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  apiBase = apiBase || (env && env.apiBase) || null;

  // Resolve relative paths against apiBase
  path = apiPath(path, apiBase);

  // Add credentials if needed
  // if (path.startsWith(apiBase)) {
  //   headers["token/scheme"] = token;
  // }

  // Make the request with some preset headers.
  return fetch(path, {
    ...init,
    headers: {
      ...headers,
      ...(init.headers || {}),
    },
  });
}

/**
 * Resolves relative URLs against API base URL. Returns absolute URLs as-is.
 *
 * @param {string} path - The path to resolve.
 */
export function apiPath(path, apiBase) {
  // Return absolute URLs as-is.
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  // Make sure path doesn't start with /
  if (path.startsWith("/")) {
    path = path.slice(1);
  }

  // Make sure base does end with /
  if (apiBase) {
    if (apiBase[apiBase.length - 1] !== "/") {
      apiBase += "/";
    }

    // Format and append path to the API base URL.
    return apiBase + path;
  }

  return "/" + path;
}

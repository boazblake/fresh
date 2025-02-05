export interface PageProps {
  /** The URL of the request that resulted in this page being rendered. */
  url: URL;

  /** The route matcher (e.g. /blog/:id) that the request matched for this page
   * to be rendered. */
  route: string;

  /**
   * The paramteres that were matched from the route.
   *
   * For the `/foo/:bar` route with url `/foo/123`, `params` would be
   * `{ bar: '123' }`. For a route with no matchers, `params` would be `{}`. For
   * a wildcard route, like `/foo/:path*` with url `/foo/bar/baz`, `params` would
   * be `{ path: [ 'bar', 'baz' ] }`.
   */
  params: Record<string, string | string[]>;
}

export interface PageConfig {
  /**
   * By default, runtime JS is disabled. This means that interactivity on the
   * client that depends on Preact or other JS code will not function.
   *
   * Runtime JS can be enabled by setting `runtimeJS` to `true`.
   *
   * It is recommended to keep runtime JavaScript disabled for static pages that
   * do not require interactivity, like marketing or blog pages.
   *
   * Note that the runtime JS feature will likely be overhauled in the future to
   * provide more granular control over which components need to be hydrated on
   * the client.
   */
  runtimeJS?: boolean;

  /**
   * A route override for the page. This is useful for pages where the route
   * can not be expressed through the filesystem routing capabilities.
   *
   * The route override must be a path-to-regexp compatible route matcher.
   */
  routeOverride?: string;

  /**
   * If Content-Security-Policy should be enabled for this page. If 'true', a
   * locked down policy will be used that allows only the scripts and styles
   * that are generated by fresh. Additional scripts and styles can be added
   * using `useCSP` hook.
   */
  csp?: boolean;
}

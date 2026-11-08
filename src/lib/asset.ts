/**
 * Prefix a /public asset path with the deploy base path.
 * Empty on your own server; "/alga" on GitHub Pages (set by NEXT_PUBLIC_BASE_PATH).
 * next/image does not add basePath to string srcs, so every public asset goes through this.
 */
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

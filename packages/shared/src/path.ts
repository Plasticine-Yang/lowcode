import { resolve } from "path";

export const ROOT_PATH = process.cwd();

export const resolvePath = (...pathSegments: string[]) =>
  resolve(ROOT_PATH, ...pathSegments);

export const srcPath = resolvePath("src");

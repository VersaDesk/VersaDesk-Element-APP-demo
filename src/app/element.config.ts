export const ELEMENT_PACKAGE_NAME = 'element-app-hello-world';

export const ELEMENT_ASSETS_BASE_PATH = `/assets/elements/${ELEMENT_PACKAGE_NAME}/assets`;

export function elementAsset(path: string): string {
  const normalizedPath = path.replace(/^\/+/, '');
  return `${ELEMENT_ASSETS_BASE_PATH}/${normalizedPath}`;
}

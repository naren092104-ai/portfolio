export function getThumbnailSrc(src: string): string {
  if (!src.startsWith('/assets/')) {
    return src;
  }

  return src
    .replace(/\/([^/]+)$/, '/optimized/$1')
    .replace(/\.[^.]+$/, '.webp');
}
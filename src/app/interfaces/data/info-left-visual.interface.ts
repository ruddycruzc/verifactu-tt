export type InfoLeftVisualType = 'image' | 'video';

export interface InfoLeftVisual {
  type: InfoLeftVisualType;
  src: string;
  alt: string;
}

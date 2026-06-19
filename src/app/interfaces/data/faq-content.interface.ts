export interface FaqItem {
  question: string;
  answer: string;
  isOpen?: boolean;
}
export interface FaqContent {
  title: string;
  titleHighlight: string;
  subtitle: string;
  items: FaqItem[];
}
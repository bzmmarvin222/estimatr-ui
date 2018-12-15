export interface PromptDialog<T> {
  header?: string;
  description?: string;
  placeholder?: string;
  promptData: T;
}

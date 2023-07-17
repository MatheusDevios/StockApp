export type NewsCardParams = {
  title: string;
  content: string;
};
export interface SearchBarParams {
  handleSearchChange: (e: any) => void;
}
export interface ButtonParams {
  title: string;
  onPress: () => void;
}

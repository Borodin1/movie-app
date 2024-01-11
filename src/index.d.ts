declare module "*.png" {
    const path: string;
    export default path;
}

declare module '*.scss' {
    const content: { [className: string]: string };
    export default content;
  }
  
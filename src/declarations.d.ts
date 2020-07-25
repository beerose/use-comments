declare module '!!raw-loader!*' {
  const src: string;
  export default src;
}

declare module '*.mdx' {
  const component: React.FC;
  export default component;
}

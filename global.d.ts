import en from './messages/en.json';
import type { StaticImport } from 'next/image';

type Messages = typeof en;

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}
}

declare module '*.svg?url' {
  const content: StaticImport | string;
  export default content;
}
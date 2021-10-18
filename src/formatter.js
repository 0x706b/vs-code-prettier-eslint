import { format } from '@0x706b/prettier-eslint-8';

export default function formatText({ text, filePath }) {
  return format({ text, filePath });
}

const getAnnotateClassName = ({
  bold,
  code,
  italic,
  strikethrough,
  underline,
}: {
  bold?: boolean;
  italic?: boolean;
  strikethrough?: boolean;
  underline?: boolean;
  code?: boolean;
}) => {
  if (code) return 'px-1 py-0.5 rounded text-code bg-default-light dark:bg-default-dark transition-colors';
  if (bold) return 'font-bold';
  if (italic) return 'italic';
  if (strikethrough) return 'line-through';
  if (underline) return 'underline';
  return '';
};

export default getAnnotateClassName;

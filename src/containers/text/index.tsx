import React from 'react';

interface TextProps {
  color: string;
  fontWeight: number;
  fontSize: string;
  lineHeight: string;
  children: React.ReactNode;
  className?: string
  testId?: string
}

const Text: React.FC<TextProps> = ({
  color,
  fontWeight,
  fontSize,
  lineHeight,
  children,
  testId,
  className = ''
}: TextProps) => {

  return <div data-testid = {testId} className={className} style={{
    color,
    fontWeight,
    lineHeight,
    fontSize
  }}>{children}</div>;
};

export default Text;
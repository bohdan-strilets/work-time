export type ReferenceProps = {
  path: string;
  label: string;
  margin?: string;
};

export type StyledLinkProps = Pick<ReferenceProps, 'margin'>;

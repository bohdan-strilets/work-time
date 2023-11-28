export type QuickTimingProps = {
  getQuickTime: (time: string | null) => void;
  margin?: string;
};

export type HookProps = Pick<QuickTimingProps, 'getQuickTime'>;

export type ListProps = Pick<QuickTimingProps, 'margin'>;

export type DiagramData = {
  label: string;
  data: number[];
  backgroundColor: string[];
  borderColor?: string[];
  borderWidth: number;
};

export type DiagramProps = {
  labels: string[];
  datasets: DiagramData[];
  width?: string;
};

export type WrapperProps = Pick<DiagramProps, 'width'>;

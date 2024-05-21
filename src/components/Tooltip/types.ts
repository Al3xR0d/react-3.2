import { ReactNode } from 'react';

export type TPosition = { x: number; y: number };

export type PropsType = {
  text: string;
  children: ReactNode;
};

export type StateType = {
  showTooltip: boolean;
  tooltipPosition: TPosition;
};

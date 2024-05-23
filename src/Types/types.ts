export interface TodoObject {
  label: string;
  done: boolean;
  id: number;
  isEditing: boolean;
  createTime: Date;
  newName: string;
  diffInMinutes: number;
}

export interface Tfiltres {
  [key: string]: (val?: TodoObject) => boolean;
}

export interface TPosition {
  x: number;
  y: number;
}

export enum Filtres {
  All = 'all',
  Active = 'active',
  Done = 'done',
}

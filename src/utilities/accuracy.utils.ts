export enum AccuracyEnum {
  correct,
  wrongPosition,
  doesNotExist,
  none,
}

export const accuracyColorMap = new Map<AccuracyEnum, string>([
  [AccuracyEnum.correct, "#6CA965"],
  [AccuracyEnum.wrongPosition, "#C8B653"],
  [AccuracyEnum.none, "black"],
  [AccuracyEnum.doesNotExist, "#787C7F"],
]);

export const accuracyKeyColorMap = new Map<AccuracyEnum, string>([
  [AccuracyEnum.correct, "#6CA965"],
  [AccuracyEnum.wrongPosition, "#C8B653"],
  [AccuracyEnum.none, "#D3D6DA"],
  [AccuracyEnum.doesNotExist, "#787C7F"],
]);

export const accuracyKeyForegroundColorMap = new Map<AccuracyEnum, string>([
  [AccuracyEnum.correct, "white"],
  [AccuracyEnum.wrongPosition, "white"],
  [AccuracyEnum.none, "black"],
  [AccuracyEnum.doesNotExist, "white"],
]);

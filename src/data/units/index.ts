import { UnitData } from '../types';
import { UNIT_1 } from './unit1';
import { UNIT_2 } from './unit2';
import { UNIT_3 } from './unit3';
import { UNIT_4 } from './unit4';
import { UNIT_5 } from './unit5';
import { UNIT_6 } from './unit6';

export const EGYPT_PREP3_TERM1_UNITS: UnitData[] = [
  UNIT_1,
  UNIT_2,
  UNIT_3,
  UNIT_4,
  UNIT_5,
  UNIT_6,
];

export const ALL_LESSONS = EGYPT_PREP3_TERM1_UNITS.flatMap((u) => u.lessons);

export function getUnitById(unitId: string): UnitData | undefined {
  return EGYPT_PREP3_TERM1_UNITS.find((u) => u.id === unitId);
}

export function getLessonById(lessonId: string) {
  return ALL_LESSONS.find((l) => l.id === lessonId);
}

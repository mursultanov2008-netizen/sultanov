import { AppType } from '../types';
import { apps as mockApps } from '../data/apps';

export async function fetchApps(): Promise<AppType[]> {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockApps;
}
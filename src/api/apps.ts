import { App } from "../types";
import { apps as mockApps } from "../data/apps";

export async function fetchApps(): Promise<App[]> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return mockApps;
  } catch (error) {
    console.error("Ошибка при загрузке приложений:", error);
    throw error;
  }
}
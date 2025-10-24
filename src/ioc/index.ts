import IoCContainer from "ioc-lite";
import { Logger } from "../services/logger";
import { HTTP } from "../services/http";
import { Users } from "../services/users";
import type { ApiConfig } from "../types";

type Registry = Record<string, unknown>;

let container: IoCContainer<Registry> | null = null;

export const initIoC = (apiConfig: ApiConfig) => {
  if (container) return container;

  const ioc = new IoCContainer<Registry>();

  ioc.registerClass("Logger", Logger);
  ioc.registerClass("HTTP", HTTP);
  ioc.registerClass("Users", Users);

  ioc.register("ApiConfig", apiConfig);

  container = ioc;
  return container;
};

export const getContainer = () => {
  if (!container)
    throw new Error("IoC container not initialized. Call initIoC() first.");
  return container;
};

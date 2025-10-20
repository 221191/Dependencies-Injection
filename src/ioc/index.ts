import IoCContainer from "ioc-lite";
import { Logger } from "../services/logger";
import { HTTP } from "../services/http";
import { Users } from "../services/users";
import { getConfig } from "../../server/getConfig";

export const createIoCContainer = () => {
  const ioc = new IoCContainer();

  ioc.register("Logger", Logger);
  ioc.register("HTTP", HTTP);
  ioc.register("Users", Users);
  ioc.register("ApiConfig", getConfig());

  return ioc;
};

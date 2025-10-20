import { createIoCContainer } from "./ioc";
import type { ApiConfig, User } from "./types";

const renderUsers = async (config: ApiConfig) => {
  const ioc = createIoCContainer();
  const usersService = ioc.resolve("Users");
  const users = await usersService.getUsers();

  const listNode = document.getElementById("users-list");

  users.forEach((user: User) => {
    const listItemNode = document.createElement("li");
    listItemNode.innerHTML = user.name;
    listNode.appendChild(listItemNode);
  });
};

const app = () => {
  const config = (window as any).__CONFIG__;
  delete (window as any).__CONFIG__;

  renderUsers(config.api);
};

window.onload = (event: Event) => {
  const ioc = createIoCContainer();
  const logger = ioc.resolve("Logger");

  logger.info("Page is loaded.");
  app();
};

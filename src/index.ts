import { initIoC, getContainer } from "./ioc";
import type { User } from "./types";

const renderUsers = async () => {
  const ioc = getContainer();
  const usersService = ioc.resolve("Users");
  const users = await usersService.getUsers();

  const listNode = document.getElementById("users-list");
  if (!listNode) return;

  users.forEach((user: User) => {
    const li = document.createElement("li");
    li.textContent = user.name;
    listNode.appendChild(li);
  });
};

const bootstrap = () => {
  const cfg = (window as any).__CONFIG__;
  delete (window as any).__CONFIG__;

  initIoC(cfg.api);

  // Reuse the same container everywhere
  const ioc = getContainer();
  const logger = ioc.resolve("Logger") as any;
  logger.info("Page is loaded.");

  void renderUsers();
};

window.addEventListener("load", bootstrap);

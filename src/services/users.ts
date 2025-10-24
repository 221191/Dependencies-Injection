import { HTTP } from "./http";
import type { ApiConfig, User } from "../types";

export class Users {
  static $inject = ["HTTP", "ApiConfig"];

  constructor(public http: HTTP, public apiConfig: ApiConfig) {}

  getUsers(): Promise<User[]> {
    return this.http.get<User[]>(this.apiConfig.resources.users);
  }
}

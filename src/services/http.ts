import { Logger } from "./logger";
import type { ApiConfig } from "../types";

export class HTTP {
  static $inject = ["ApiConfig", "Logger"];

  constructor(public apiConfig: ApiConfig, public logger: Logger) {}

  async get<T = unknown>(url: string): Promise<T> {
    const response = await fetch(`${this.apiConfig.path}${url}`);
    if (response.ok) {
      const data = (await response.json()) as T;
      this.logger.info(
        `Status: ${response.status}. Response: ${JSON.stringify(data)}`
      );
      return data;
    }
    this.logger.error(
      `Status: ${response.status}. Status Text: ${response.statusText}`
    );
    throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
  }
}

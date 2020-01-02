//configuration
import config from "./config.json";

//configurations
export const $db = () => config.db;
export const $security = () => config.security;
export const $serverPort = () => config.severPort;

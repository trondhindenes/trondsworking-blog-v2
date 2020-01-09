let _LOG_LEVEL = "";

switch (window.location.hostname) {
  case "localhost":
    _LOG_LEVEL = process.env.LOG_LEVEL || "debug";
    break;

  default:
    _LOG_LEVEL = "warn";
}


export const LOG_LEVEL = _LOG_LEVEL
import { hasCookie, setCookie, getCookie, deleteCookie } from "cookies-next";
import type { CookieValueTypes } from "cookies-next";

const WEEK_IN_SECONDS = 604800;

export default class Storage {
  set(key: string, value: CookieValueTypes) {
    return setCookie(key, value, {
      maxAge: WEEK_IN_SECONDS,
    });
  }

  get(key: string) {
    return getCookie(key);
  }

  check(key: string) {
    return hasCookie(key);
  }

  remove(key: string) {
    deleteCookie(key);
  }
}

import { server } from "../bff/bff";
import { selectUserSession } from "../selectors/select-user-session";
import { useCallback } from "react";
import { useSelector } from "react-redux";

export const useServer = () => {
  const session = useSelector(selectUserSession);

  return useCallback(
    (operation, ...params) => {
      const request = ["register", "authorize", "fetchPost"].includes(operation)
        ? params
        : [session, ...params];
      if (typeof server[operation] !== "function") {
        throw new Error(`Server operation "${operation}" is not a function`);
      }
      return server[operation](...request);
    },
    [session]
  );
};

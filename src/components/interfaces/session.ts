import { SessionExpireSession } from "./content/session/session.expireSession-0";
import { SessionGetAuthData } from "./content/session/session.getAuthData-1";

type session = SessionExpireSession | SessionGetAuthData;

export default session;

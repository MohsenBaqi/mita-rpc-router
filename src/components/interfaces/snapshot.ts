import { SnapshotGetBWSnapShot } from "./content/snapshot/snapshot.getBWSnapShot-3";
import { SnapshotGetBWSnapShotForUserAjax } from "./content/snapshot/snapshot.getBWSnapShotForUserAjax-0";
import { SnapshotGetBWSnapShotForUserAjax as SnapshotGetBWSnapShotForUserAjax2 } from "./content/snapshot/snapshot.getBWSnapShotForUserAjax-1";
import { SnapshotGetGroupBWSnapShot } from "./content/snapshot/snapshot.getGroupBWSnapShot-4";
import { SnapshotGetISPBWSnapShot } from "./content/snapshot/snapshot.getISPBWSnapShot-5";
import { SnapshotGetOnlinesSnapShot } from "./content/snapshot/snapshot.getOnlinesSnapShot-2";
import { SnapshotGetRasBWSnapShot } from "./content/snapshot/snapshot.getRasBWSnapShot-6";

type snapshot =
  | SnapshotGetBWSnapShot
  | SnapshotGetBWSnapShotForUserAjax
  | SnapshotGetBWSnapShotForUserAjax2
  | SnapshotGetGroupBWSnapShot
  | SnapshotGetISPBWSnapShot
  | SnapshotGetOnlinesSnapShot
  | SnapshotGetRasBWSnapShot;

export default snapshot;

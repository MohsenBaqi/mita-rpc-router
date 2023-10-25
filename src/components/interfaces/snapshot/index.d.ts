import { SnapshotGetBWSnapShot } from './snapshot.getBWSnapShot-3'
import { SnapshotGetBWSnapShotForUserAjax } from './snapshot.getBWSnapShotForUserAjax-0'
import { SnapshotGetBWSnapShotForUserAjax as SnapshotGetBWSnapShotForUserAjax2 } from './snapshot.getBWSnapShotForUserAjax-1'
import { SnapshotGetGroupBWSnapShot } from './snapshot.getGroupBWSnapShot-4'
import { SnapshotGetISPBWSnapShot } from './snapshot.getISPBWSnapShot-5'
import { SnapshotGetOnlinesSnapShot } from './snapshot.getOnlinesSnapShot-2'
import { SnapshotGetRasBWSnapShot } from './snapshot.getRasBWSnapShot-6'

type snapshot =
  | SnapshotGetBWSnapShot
  | SnapshotGetBWSnapShotForUserAjax
  | SnapshotGetBWSnapShotForUserAjax2
  | SnapshotGetGroupBWSnapShot
  | SnapshotGetISPBWSnapShot
  | SnapshotGetOnlinesSnapShot
  | SnapshotGetRasBWSnapShot

export default snapshot

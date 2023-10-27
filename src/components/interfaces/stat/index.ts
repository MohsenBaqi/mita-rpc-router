import { StatGetAllStatsByStatCategory } from './stat.getAllStatsByStatCategory-1'
import { StatGetStatistics } from './stat.getStatistics-0'
import { StatGetUserQueueStats } from './stat.getUserQueueStats-2'

type stat = StatGetAllStatsByStatCategory | StatGetStatistics | StatGetUserQueueStats

export default stat

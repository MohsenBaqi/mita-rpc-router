import { StatGetAllStatsByStatCategory } from './content/stat/stat.getAllStatsByStatCategory-1'
import { StatGetStatistics } from './content/stat/stat.getStatistics-0'
import { StatGetUserQueueStats } from './content/stat/stat.getUserQueueStats-2'

type stat = StatGetAllStatsByStatCategory | StatGetStatistics | StatGetUserQueueStats

export default stat

import key from './keyScheduler/key'
import keyScheduler from './keyScheduler/keyScheduler'
import pool from './keyScheduler/pool'
import roundKey from './keyScheduler/roundKey'

const defaultWidth = 256

interface ArcSeedInput {
  width?: number
}

export default function arcSeed(
  { width = defaultWidth }: ArcSeedInput = { width: defaultWidth }
) {
  const keyScheduled = keyScheduler({
    key: key([1, 2, 3, 4, 5, 6, 7, 8]),
    pool: pool({ width }),
    roundKey: roundKey({ width }),
  })

  console.log(keyScheduled.state)

  return keyScheduled.state
}

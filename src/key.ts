import atIndexUtil, { AtIndexProperty } from './utilities/atIndex'
import length from './utilities/length'
import remainder, { RemainderCallback } from './utilities/remainder'
import toCharCodes from './utilities/toCharCodes'

export interface Key extends AtIndexProperty {}

type KeyInput = number[] | string

export default function key(seed: KeyInput): Key {
  if (typeof seed === 'string') seed = toCharCodes(seed)

  const atOverflowableIndex: Key['atIndex'] = atIndexUtil(seed),
    remainderLength: RemainderCallback = remainder(length(seed))

  function atIndex(n: number): number {
    return atOverflowableIndex(remainderLength(n))
  }

  return { atIndex }
}

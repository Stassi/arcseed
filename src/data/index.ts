import maximumSafeBinary from './maximumSafeBinary'
import { numberRange as numberRangeErrorMessages } from './errorMessages.json'
import {
  bitsInOctet,
  defaultDrop,
  maximumSafeBinaryLength,
  poolWidth,
} from './metrics.json'

const {
  underflow: {
    integer: integerRangeUnderflowErrorMessage,
    interval: intervalRangeUnderflowErrorMessage,
  },
} = numberRangeErrorMessages

export {
  bitsInOctet,
  defaultDrop,
  integerRangeUnderflowErrorMessage,
  intervalRangeUnderflowErrorMessage,
  maximumSafeBinary,
  maximumSafeBinaryLength,
  poolWidth,
}

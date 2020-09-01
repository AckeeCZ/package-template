import {
  danger,
  warn,
  message,
  fail,
  markdown,
  schedule,
  peril,
  results,
} from 'danger'
import { runDangerRules } from '@ackee/styleguide-backend-config/danger'

void runDangerRules(
  { danger, warn, message, fail, markdown, schedule, peril, results },
  {
    /* pass options */
  }
)

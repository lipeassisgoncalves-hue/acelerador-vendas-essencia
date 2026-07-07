import { profiles } from '../data/quiz'

export function getProfile(totalScore) {
  return Object.values(profiles).find(({ range }) => totalScore >= range[0] && totalScore <= range[1])
}

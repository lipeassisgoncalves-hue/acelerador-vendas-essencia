const KEY = 'essencia-diagnostico'

export function saveDiagnosis(data) {
  localStorage.setItem(KEY, JSON.stringify({ ...data, savedAt: new Date().toISOString() }))
}

export function loadDiagnosis() {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

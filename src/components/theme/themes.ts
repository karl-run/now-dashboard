const base = {
  'global-background': 'white',
  'font-color': 'black',
  'contrast-background': 'black',
  'contrast-font-color': 'white',
  'accent-color': 'green',
  'accent-contrast-color': 'lightgray',

  'positive-color': 'green',
  'negative-color': 'red',
  'positive-color-contrast': 'white',
  'negative-color-contrast': 'white',
}

const light = {}

const dark = {
  'global-background': 'darkslategray',
  'font-color': 'white',
  'contrast-background': 'white',
  'contrast-font-color': 'darkslategray',
}

const black = {
  'global-background': 'black',
  'font-color': 'gray',
  'contrast-background': '#1b1b1b',
  'contrast-font-color': 'darkslategray',
  'accent-color': 'darkslategray',
  'accent-contrast-color': 'lightgray',
  'positive-color': 'darkslategray',
  'negative-color': 'darkred',
  'positive-color-contrast': 'black',
  'negative-color-contrast': 'black',
}

const validateTheme = (theme: { [key: string]: string }) => {
  const baseKeys: string[] = Object.keys(base)
  const themeKeys: string[] = Object.keys(theme)

  const duplicates: string[] = []

  baseKeys.forEach(value => {
    if (themeKeys.indexOf(value) === -1) duplicates.push(value)
  })

  return duplicates.join('\n')
}

console.info('Theme completeness:')
console.info('light:\n', validateTheme(light))
console.info('dark:\n', validateTheme(dark))
console.info('black:\n', validateTheme(black))

export const availableThemes = ['dark', 'light', 'black']

export default (theme: string | null) => {
  switch (theme) {
    case 'dark':
      return { ...base, ...dark }
    case 'light':
      return { ...base, ...light }
    case 'black':
      return { ...base, ...black }
    default:
      throw Error('Oops: Invalid theme')
  }
}

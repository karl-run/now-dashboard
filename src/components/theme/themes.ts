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

const light = {
  ...base,
}

const dark = {
  ...base,
  'global-background': 'darkslategray',
  'font-color': 'white',
  'contrast-background': 'white',
  'contrast-font-color': 'darkslategray',
}

export const availableThemes = ['dark', 'light']

export default (theme: 'light' | 'dark' | null) => {
  switch (theme) {
    case 'dark':
      return dark
    case 'light':
      return light
    default:
      throw Error('Oops: Invalid theme')
  }
}

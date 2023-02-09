import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: "border-box"
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$marineBlue',
    color: '$orange600',
    width:'100vw',
    height:'100vh',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400
  }
})
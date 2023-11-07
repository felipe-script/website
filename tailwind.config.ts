import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        greend1: '#01260A',
        greend2: '#12732A',
        greenl1: '#44F24F',
        greenl2: '#36BF4A',
        black: '#0D0D0D',
      }
    }
  }
}

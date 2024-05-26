import {
  defineConfig,
  presetUno,
  presetWind,
  presetWebFonts,
  presetTypography,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetWind(),
    presetWebFonts({
      fonts: {
        'Red Hat Display': 'Red Hat Display:400,500,700,900'
      },
    }),
    presetTypography(),
  ]
})

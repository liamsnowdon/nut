import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetWind,
} from 'unocss'

export default defineConfig({
  presets: [
    presetWind(),
    presetAttributify(),
    presetIcons({}),
  ],

  preflights: [{
    getCSS: ({ theme }: { theme: any }) => `
      html, body {
        height: 100%;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        background-color: ${theme.colors.neutral[900]};
        color: ${theme.colors.neutral[400]};
      }
    `,
  }],
})

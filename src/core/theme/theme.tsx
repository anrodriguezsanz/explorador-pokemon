const colorPrimary = '#1A4B83'
const colorPrimaryFont = '#fff'
const colorSecondary = '#595959'
const colorSecondaryFont = '#fff'
const colorGreyPrimary = "#595959"
const colorgreyBGPrimary = "#F0F0F0"
const colorGreyBGSecodnary = "#FAFAFA"
const colorBgGradient = 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)'

export const themeConfig = {
  token: {
    colorPrimary: colorPrimary,
    colorPrimaryFont: colorPrimaryFont,
    colorSecondary: colorSecondary,
    colorSecondaryFont: colorSecondaryFont,
    colorBgLayout: '#f5f7fa',
    colorGreyPrimary: colorGreyPrimary,
    colorgreyBGPrimary: colorgreyBGPrimary,
    colorGreyBGSecodnary: colorGreyBGSecodnary,
    colorTextHeading: colorPrimary,
    colorBgGradient: colorBgGradient,
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    borderRadius: 8,
  },
  components: {
    Table: {
      headerBorderRadius: 8,
      borderRadius: 8,
    },
    Card: {
      borderRadius: 12,
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    },
    Button: {
      borderRadius: 6,
      controlHeight: 40,
    },
    Input: {
      borderRadius: 6,
      controlHeight: 40,
    },
    Select: {
      borderRadius: 6,
      controlHeight: 40,
    }
  }
}
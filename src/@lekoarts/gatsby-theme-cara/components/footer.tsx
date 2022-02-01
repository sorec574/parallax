/** @jsx jsx */

import { Box, Flex, useColorMode, jsx, Link } from 'theme-ui'

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <Box as="footer" variant="footer">
      <button
        sx={{
          variant: `buttons.toggle`,
          fontWeight: `semibold`,
          display: `block`,
          mx: `auto`,
          mb: 3,
        }}
        onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
      >
        {isDark ? `Light` : `Dark`}
      </button>
      {/*Edit your footer Here */}
      This project is open source and available on{' '}
      <span className="contact-link">
        <a href="https://github.com/stevenorechow/parallax">Github</a>
      </span>
      {/*Edit your footer Here */}
      <br />
    </Box>
  )
}

export default Footer

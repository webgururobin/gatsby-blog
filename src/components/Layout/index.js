import React from "react"
import { ThemeProvider } from "styled-components"

// Components
import Header from "components/Header"

//Hooks
import { useMetaDataQuery } from "hooks/useMetaDataQuery"

// Styles
import { GlobalStyles, lightTheme, darkTheme } from "styles/GlobalStyles"

const Layout = ({ children }) => {
  const data = useMetaDataQuery()

  console.log(data)

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Header siteTitle={data.title} />
      Layout Component
      {children}
    </ThemeProvider>
  )
}

export default Layout

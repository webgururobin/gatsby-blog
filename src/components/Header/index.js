import React from "react"
import { Link } from "gatsby"

// Hooks
import { useSiteConfigQuery } from "hooks/useSiteConfigQuery"

// Styles
import { Wrapper, Logo } from "./Header.styles"

const Header = ({ siteTite = `` }) => {
  const siteConfig = useSiteConfigQuery()

  console.log(siteConfig)
  return (
    <Wrapper>
      <Link to="/">
        <Logo src={siteConfig.logo.publicURL} alt={siteTite} />
      </Link>
    </Wrapper>
  )
}

export default Header

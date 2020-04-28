import React from "react"
import { Link } from "gatsby"

// Components
import Menu from "components/Menu"

// Hooks
import { useSiteConfigQuery } from "hooks/useSiteConfigQuery"

// Styles
import { Wrapper, Logo } from "./Header.styles"

const Header = ({ siteTite = `` }) => {
  const siteConfig = useSiteConfigQuery()
  return (
    <Wrapper>
      <Menu items={siteConfig.menu} />
      <Link to="/">
        <Logo src={siteConfig.logo.publicURL} alt={siteTite} />
      </Link>
      <div>Mode Button</div>
    </Wrapper>
  )
}

export default Header

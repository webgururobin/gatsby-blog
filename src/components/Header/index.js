import React from "react"
import { Link } from "gatsby"

// Hooks
import { useSiteConfigQuery } from "hooks/useSiteConfigQuery"

const Header = ({ siteTite = `` }) => {
  const siteConfig = useSiteConfigQuery()

  console.log(siteConfig)
  return (
    <div>
      <Link to="/">
        <img src={siteConfig.logo.publicURL} alt={siteTite} />
      </Link>
    </div>
  )
}

export default Header

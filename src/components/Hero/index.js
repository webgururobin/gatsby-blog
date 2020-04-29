import React from "react"
import { Link } from "gatsby"

// Component

// Hooks
import { useHeroQuery } from "hooks/useHeroQuery"
// Styles

const Hero = () => {
  const {
    heroImage,
    heroImageText,
    heroImageBtnText,
    heroImageBtnLink,
  } = useHeroQuery()
  console.log(heroImage)
  return (
    <div>
      <div>
        BG image
        <div>
          <h2>{heroImageText}</h2>
          <Link to={heroImageBtnLink}>
            <button>{heroImageBtnText}</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero

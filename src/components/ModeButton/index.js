import React from "react"

// Images
import DayIcon from "images/daymode.svg"
import NightIcon from "images/nightmode.svg"

// Styles
import { ImgButton } from "./ModeButton.styles"

const ModeButton = ({ darkMode, setDarkMode }) => {
  return (
    <div>
      <ImgButton
        src={darkMode ? NightIcon : DayIcon}
        alt="mode"
        onClick={() => setDarkMode(prev => !prev)}
      />
    </div>
  )
}

export default ModeButton

import React from "react"

// Styles

const BGImage = ({ fluid, title, className, children }) => {
  return (
    <div>
      <div>FakeBG Compoenent</div>
      <div className={className}>{children}</div>
    </div>
  )
}

export default BGImage

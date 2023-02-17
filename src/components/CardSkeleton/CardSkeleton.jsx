import React from "react"
import ContentLoader from "react-content-loader"

const CardSkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={1200}
    height={700}
    viewBox="0 0 1200 700"
    backgroundColor="#f3f3f3"
    foregroundColor="#605252"
    {...props}
  >
    <rect x="21" y="351" rx="0" ry="0" width="242" height="352" /> 
    <rect x="309" y="356" rx="0" ry="0" width="252" height="352" /> 
    <rect x="202" y="4" rx="0" ry="0" width="227" height="299" />
  </ContentLoader>
)

export default CardSkeleton
import React from "react"

import Be from "../images/svg/icons/be.svg"
import Ig from "../images/svg/icons/ig.svg"
import Tw from "../images/svg/icons/twitter.svg"
import email from "../images/svg/icons/email.svg"

export default (typename, url) => {
  return (
    <div className="uc-social-network-icon">
      {" "}
      <a href={url ? url : '#'}>
        {React.createElement(
          { behance: Be, instagram: Ig, twitter: Tw, email: email }[typename]
        )}
      </a>
    </div>
  )
}

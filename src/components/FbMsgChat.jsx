import React from 'react'
import { FacebookProvider, CustomChat } from 'react-facebook';

const FbMsgChat = () => {
  return (
    <FacebookProvider appId="261217793292489" chatSupport>
    <CustomChat pageId="112561170394707" minimized={true}/>
  </FacebookProvider>    
  )
}

export default FbMsgChat
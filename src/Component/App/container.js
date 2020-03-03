import React from 'react'
import App from "./presenter";
import "./styles.scss"

const Container = props => (
  <>
    <App {...props} />
  </>
)

export default Container;
import React from 'react'
import Router from 'next/router'

export default class CreditCardRegistration extends React.Component {
  static async getInitialProps({ res }) {
    if (res) {
      res.writeHead(302, {
        Location:
          'http://localhost:3000/credit-card'
      })
      res.end()
    } else {
      Router.push(
        'http://localhost:3000/credit-card'
      )
    }
    return {}
  }
}

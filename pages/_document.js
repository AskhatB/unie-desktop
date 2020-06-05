import Document, { Head, Main, NextScript } from 'next/document'
import { extractCritical } from 'emotion-server'
import { injectGlobal } from 'emotion'

// Add global styles
injectGlobal`
  * {
  font-family: 'Open Sans', sans-serif;
  }
  html{
    scroll-behavior: smooth
  }
  body {
    margin: 0;
    padding: 0;
    background: #f8f8f8;
    font-family: 'Open Sans', sans-serif;
  }
  a {
    color: #22BAD9;
    text-decoration: none;
  }

  footer {
    backgroundColor: rgba(255, 255, 255, .95);
    bottom: 0;
    font-size: 12px;
    left: 0;
    padding: 15px 0;
    position: fixed;
    text-align: center;
    width: 100%;
  }

  p {
    font-size: 14px;
    line-height: 24px;
  }

  article {
    margin: 0 auto;
    max-width: 650px;
  }
`

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage()
    const styles = extractCritical(page.html)
    return { ...page, ...styles }
  }

  // static async getInitialProps({ res }) {
  //   if (res) {
  //     res.writeHead(302, {
  //       Location: 'http://unie.kz/dev'
  //     })
  //     res.end()
  //   } else {
  //     Router.push('http://unie.kz/dev')
  //   }
  //   return {}
  // }

  constructor(props) {
    super(props)
    const { __NEXT_DATA__, ids } = props
    if (ids) {
      __NEXT_DATA__.ids = ids
    }
  }

  googleAnalytics() {
    return "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KX9L29S');"
  }

  googleAnalyticsNo() {
    return "<iframe src='https://www.googletagmanager.com/ns.html?id=GTM-KX9L29S'height='0' width='0' style='display:none;visibility:hidden'></iframe>"
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="yandex-verification" content="e96889d6dab45097" />
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&amp;subset=cyrillic"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700&amp;subset=cyrillic"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          <script
            dangerouslySetInnerHTML={{ __html: this.googleAnalytics() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <noscript
            dangerouslySetInnerHTML={{ __html: this.googleAnalyticsNo() }}
          />
        </body>
      </html>
    )
  }
}

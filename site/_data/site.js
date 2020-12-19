const production = process.env.NODE_ENV === "production"

const host = production ? "https://example.com" : "http://0.0.0.0:8080"

// For modifying the <base> tag
const baseurl = ""

module.exports = {
  name: "11ty Starter Kit",
  title: "11ty Starter Kit",
  description: "Starter kit for a basic 11ty site",
  type: "website",
  baseurl,
  url: `${host}${baseurl}`,
  production,
  robots: production,
  googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
  locale: "en-us",
  nav: [{ url: "/about/", label: "About" }],
}

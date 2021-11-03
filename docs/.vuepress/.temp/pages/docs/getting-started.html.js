export const data = {
  "key": "v-baa76148",
  "path": "/docs/getting-started.html",
  "title": "Getting Started",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Install",
      "slug": "install",
      "children": []
    },
    {
      "level": 2,
      "title": "Add Credentials",
      "slug": "add-credentials",
      "children": []
    },
    {
      "level": 2,
      "title": "Email/Password SignIn",
      "slug": "email-password-signin",
      "children": [
        {
          "level": 3,
          "title": "Enabling SignIn with Firebase",
          "slug": "enabling-signin-with-firebase",
          "children": []
        },
        {
          "level": 3,
          "title": "Using useEmailSignIn",
          "slug": "using-useemailsignin",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "docs/getting-started.md",
  "git": {
    "updatedTime": 1635980582000,
    "contributors": [
      {
        "name": "Luke Diebold",
        "email": "lukediebold@agripath.com.au",
        "commits": 1
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

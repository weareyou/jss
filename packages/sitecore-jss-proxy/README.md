# WeAreYou Sitecore JavaScript Services Proxy

This module is provided as a part of Sitecore JavaScript Services. It contains the headless-mode SSR proxy implementation with some critical defects and new features.
You can find Sitecore JSS source code [here](https://github.com/Sitecore/jss).

## The **2.3.0** version includes the following defects:

- [301 is not valid response](https://github.com/Sitecore/jss/issues/138)
- [Query string aren't transferred properly](https://github.com/Sitecore/jss/issues/140)
- [CURL URL returns 500 OK](https://github.com/Sitecore/jss/issues/160)

## The **2.3.0** version includes the following features:

- Build LayoutService url with **sc_site** and **sc_lang** params during rendering page (no github bug)
- Build LayoutService url for unsupported languages(new **supportedLanguages** param is available in proxy configuration)


You can find the Sitecore JSS documentation [here](https://jss.sitecore.net).


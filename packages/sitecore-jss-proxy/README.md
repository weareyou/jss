# Sitecore JavaScript Services Proxy

This module is provided as a part of Sitecore JavaScript Services. It contains the headless-mode SSR proxy implementation with some critical defects.

The **2.1.0** version includes the following defects:

1. [301 is not valid response](https://github.com/Sitecore/jss/issues/138)
2. [Query string aren't transferred properly](https://github.com/Sitecore/jss/issues/140)
3. ```CURL https://APP_URL -IL``` returns (500 OK)(no bug on github yet)


Consult the [Sitecore JSS documentation](https://jss.sitecore.net) for further details.


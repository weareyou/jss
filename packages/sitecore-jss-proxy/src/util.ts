export const tryParseJson = (jsonString: string) => {
  try {
    const json = JSON.parse(jsonString);
    // handle non-exception-throwing cases
    if (json && typeof json === 'object' && json !== null) {
      return json;
    }
  } catch (e) {
    console.error(`error parsing json string '${jsonString}'`, e);
  }

  return null;
};

export const buildQueryString = (params: any) =>
  Object.keys(params)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join('&');

/** Builds layout service URL for site resolver with sc_site and sc_lang params */
export const buildLayoutServiceUrl = (path: string, lang: string): string => {
  let finalLang = 'nl-NL';
  let scSiteLang = '';
  if (lang === 'en') {
    scSiteLang = '_en';
    finalLang = lang;
  }
  const result = `${path}&sc_lang=${finalLang}&sc_site=weareyou${scSiteLang}`;

  return result;
};

export const buildLayoutServiceUrlForLang = (layoutServiceRoute: string, lang: string, apiKey: string): string => {
  const url = `${layoutServiceRoute}?item=${lang}&sc_apikey=${apiKey}`;

  return url;
};

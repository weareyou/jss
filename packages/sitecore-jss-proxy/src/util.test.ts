import { expect } from 'chai';
import { buildQueryString, tryParseJson, buildLayoutServiceUrl } from './util';

describe('tryParseJson', () => {
  it('should return parsed object when the string is json', () => {
    const expected = { test: 'test' };
    const actual = tryParseJson('{ "test": "test" }');
    expect(actual.test).to.equal(expected.test);
  });

  it('should return false when the string is not json', () => {
    expect(tryParseJson('<html />')).to.be.null;
  });
});

describe('buildQueryString', () => {
  it('should return querystring format for object', () => {
    const data = {
      param1: 'value1',
      param2: 'value2',
      param3: 'value3',
    };

    const expected = 'param1=value1&param2=value2&param3=value3';

    const actual = buildQueryString(data);

    expect(actual).to.eql(expected);
  });
});

describe('buildLayoutServiceUrl', () => {
  it('should return layoutservice URL with _en for sc_site for en language', () => {
    const lang = 'en';
    const path = 'weareyouurl';
    const expected = 'weareyouurl&sc_lang=en&sc_site=weareyou_en';

    const actual = buildLayoutServiceUrl(path, lang);

    expect(actual).to.equal(expected);
  });
  it('should return layoutservice URL with correct sc_site for nl language', () => {
    const lang = 'nl';
    const path = 'weareyouurl';
    const expected = 'weareyouurl&sc_lang=nl-NL&sc_site=weareyou';

    const actual = buildLayoutServiceUrl(path, lang);

    expect(actual).to.equal(expected);
  });
  it('should return layoutservice URL with default sc_site without defined language', () => {
    const lang = '';
    const path = 'weareyouurl';
    const expected = 'weareyouurl&sc_lang=nl-NL&sc_site=weareyou';

    const actual = buildLayoutServiceUrl(path, lang);

    expect(actual).to.equal(expected);
  });
});

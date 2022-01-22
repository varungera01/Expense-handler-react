const defaultConfig = require('./.eslintrc.js');
const [_severity, ...oldNamingConventions] = defaultConfig.rules['@typescript-eslint/naming-convention'];
module.exports = {
  ...defaultConfig,
  rules: {
    ...defaultConfig.rules,
    '@typescript-eslint/naming-convention': ['warn',
    ...oldNamingConventions,
    {
      'selector': ['variable', 'parameter', 'classProperty', 'objectLiteralProperty'],
      'types': ['boolean'],
      'format': ['PascalCase'],
      'prefix': ['is', 'should', 'has', 'can', 'did', 'will']
    }],
  }
}

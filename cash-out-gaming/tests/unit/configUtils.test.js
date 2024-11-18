const configUtils = require('../../utils/configUtils');

describe('configUtils', () => {
  it('should get the config', () => {
    const config = configUtils.getConfig();
    expect(config).toBeInstanceOf(Object);
  });

  it('should set the config', () => {
    const config = { a: 1, b: 2 };
    configUtils.setConfig(config);
  });
});
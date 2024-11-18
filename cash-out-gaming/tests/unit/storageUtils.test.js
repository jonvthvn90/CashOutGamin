const storageUtils = require('../../utils/storageUtils');

describe('storageUtils', () => {
  it('should save data to storage', async () => {
    const data = { foo: 'bar' };
    await storageUtils.saveData(data);
    expect(storageUtils.loadData()).toEqual(data);
  });

  it('should load data from storage', async () => {
    const data = { foo: 'bar' };
    await storageUtils.saveData(data);
    const loadedData = await storageUtils.loadData();
    expect(loadedData).toEqual(data);
  });
});
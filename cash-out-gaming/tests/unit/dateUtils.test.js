const dateUtils = require('../../utils/dateUtils');

describe('dateUtils', () => {
  it('should get the current date', () => {
    const currentDate = dateUtils.getCurrentDate();
    expect(currentDate).toBeInstanceOf(Date);
  });

  it('should format a date string', () => {
    const date = new Date('2022-01-01T00:00:00.000Z');
    const formattedDate = dateUtils.formatDateString(date);
    expect(formattedDate).toBe('2022-01-01T00:00:00.000Z');
  });

  it('should add days to a date', () => {
    const date = new Date('2022-01-01T00:00:00.000Z');
    const addedDaysDate = dateUtils.addDaysToDate(date, 5);
    expect(addedDaysDate).toBeInstanceOf(Date);
  });
});
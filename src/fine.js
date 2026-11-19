function calculateFine(daysLate, ratePerDay = 100) {
  if (daysLate <= 0) return 0;
  return daysLate * ratePerDay;
}

module.exports = { calculateFine };

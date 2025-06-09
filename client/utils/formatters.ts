const formatCurrencyGbp = (
  numberInPence: number,
) => `£${(numberInPence / 100).toFixed(2)}`;
// I would probably use react Intl if formatting in multple currencies

export default formatCurrencyGbp;

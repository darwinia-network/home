import BigNumber from "bignumber.js";

export const formatBalance = (balance: string, minDecimals = 0, maxDecimals = 20) => {
  try {
    const result = new BigNumber(balance).toFormat();
    const hasDecimal = result.includes(".");
    if (!hasDecimal) {
      if (minDecimals === 0) {
        // no unnecessary decimal needed to be appended
        return result;
      }
      // some zeros need to be appended after the decimal
      return `${result}.${"0".repeat(minDecimals)}`;
    }
    /* there are some decimals, check if they are the enough decimal points */
    const decimalPoints = result.split(".")[1].length;
    if (decimalPoints < minDecimals) {
      // some more zeros need to be appended after the decimal
      const requiredZeros = minDecimals - decimalPoints;
      return `${result}${"0".repeat(requiredZeros)}`;
    }

    if (decimalPoints > maxDecimals) {
      /* round it to the required decimal points */
      return new BigNumber(balance).toFormat(maxDecimals);
    }

    return result;
  } catch (error) {
    // console.log("formatBalance", error);
    return "-";
  }
};

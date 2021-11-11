import { decodeAddress, encodeAddress } from "@polkadot/keyring";
import { hexToU8a, isHex, formatBalance } from "@polkadot/util";
import BN from "bn.js";

export const DOT_TO_ORIG = new BN("10000000000");

export const shortAddress = (address = "") => {
  if (address.length && address.length > 12) {
    return `${address.slice(0, 5)}...${address.slice(address.length - 5)}`;
  }
  return address;
};

export const isValidAddressPolkadotAddress = (address) => {
  try {
    encodeAddress(isHex(address) ? hexToU8a(address) : decodeAddress(address));

    return true;
  } catch (error) {
    return false;
  }
};

export const formatBalanceFromOrigToDOT = (origBalance) =>
  formatBalance(BN.isBN(origBalance) ? origBalance : new BN(origBalance), {
    forceUnit: true,
    withUnit: false,
    withSi: false,
    decimals: 10,
  });

export const formatBalanceFromDOTToOrig = (dotBalance) => new BN(dotBalance).mul(DOT_TO_ORIG).toString();

// export const isValidReferralCode = (referralCode) => {
//   try {
//     const address = encodeAddress(hexToU8a(`0x${referralCode}`));
//     return isValidAddressPolkadotAddress(address);
//   } catch (error) {
//     return false;
//   }
// }

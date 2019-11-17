export interface GimmeCreditOptions {
  digits: number;
  format?: string;
}

class GimmeCredit {
  public credit = (options?: GimmeCreditOptions): string => {
    const opts = !options ? { digits: 15 } : options;
    const { digits, format } = opts;

    let r: number = Math.random();
    while (r < 0.1) {
      /* istanbul ignore next */
      r = Math.random();
    }
    const rand: string = Math.floor(r * Math.pow(10, digits)).toString();
    const checkSum: string = this.getCheckSumNumber(rand);
    const credit: string = rand
      .toString()
      .split('')
      .concat(checkSum)
      .join('');

    switch (format) {
      case 'visa':
        return credit
          .split('')
          .map((char, idx) => ((idx + 1) % 4 === 0 && idx !== digits ? `${char} ` : char))
          .join('');
      default:
        break;
    }

    return credit;
  };

  public verifyCheckSum = (numStr: string): boolean => {
    // unformat string
    const uStr = numStr.replace(/\s/g, '');
    const length = uStr.length;
    const checkSum = uStr.slice(length - 1);
    const expectedCheckSum = this.getCheckSumNumber(uStr.slice(0, length - 1));
    return checkSum === expectedCheckSum;
  };

  /**
   * Generates the Luhn formula check digit value that matches the number
   * generated by the generateRandom() method. The Luhn formula is a simple
   * checksum formula used to validate a variety of identification numbers,
   * including credit cards, which is why we're using it here.
   * https://en.wikipedia.org/wiki/Luhn_algorithm
   *
   * @since 0.0.1
   * @param { string } numStr - the random number.
   * @return { string } Returns the check digit value.
   */
  private getCheckSumNumber = (numStr: string) => {
    return (
      numStr
        .split('')
        .map((digit: string, idx: number): number =>
          idx % 2 === 0 ? Number(digit) : Number(digit) * 2
        )
        .map((digit: number): number => (digit > 10 ? digit - 9 : digit))
        .reduce((digit, total) => digit + total) % 10
    ).toString();
  };
}

export default GimmeCredit;

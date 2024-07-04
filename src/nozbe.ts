/**
 * Joins string parameters with a space, ignoring non-string values.
 */

export interface ClassNames {
  (...classes: (string | undefined)[]): string;
}

const nozbe: ClassNames = (...classes) => {
  return classes.filter((c) => typeof c === "string").join(" ");
};

export { nozbe }; // Named export
export default nozbe; // Default export

/**
 * Joins string parameters with a space, ignoring non-string values.
 */

import { ClassNames } from "./type";

const nozbe: ClassNames = (...classes) => {
  return classes.filter((c) => typeof c === "string").join(" ");
};

export default nozbe;

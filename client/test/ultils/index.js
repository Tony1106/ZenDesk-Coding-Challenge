export const findTestByAttr = (wrapper, attr) => {
  return wrapper.find(`[data-test='${attr}']`);
};

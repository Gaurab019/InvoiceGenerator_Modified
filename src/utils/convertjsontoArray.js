export const convertbillbreakuptoArray = (billbreakup) => {
  let breakuparray = [];

  Object.keys(billbreakup).map((keyname, idx) => {
    let breakitem = billbreakup[keyname];
    for (let item of breakitem) {
      breakuparray.push(item);
    }
  });

  return breakuparray;
};

import React from "react";

export const useGetRating = (currentBanner, ganyuData, kleeData) => {
  let [total, setTotal] = React.useState(0);
  let [rate5star, setRate5star] = React.useState(0);
  let [rate4star, setRate4star] = React.useState(0);

  React.useEffect(() => {
    if (currentBanner === "ganyu") {
      let banner = ganyuData.filter((item) => item.percentX !== undefined);
      let percentArray = banner.map((item) => item.percentX);
      let sum = percentArray.reduce((prev, next) => prev + next, 0);

      let purpleOnly = banner.filter((item) => item.rating === 4);
      let percentPurple = purpleOnly.map((item) => item.percentX);
      let sumPurple = percentPurple.reduce((prev, next) => prev + next, 0);
      setRate5star(percentArray[0]);
      setRate4star(sumPurple);
      setTotal(sum * 10);
      return;
    }
    let banner = kleeData.filter((item) => item.percentX !== undefined);
    let percentArray = banner.map((item) => item.percentX);
    let sum = percentArray.reduce((prev, next) => prev + next, 0);

    let purpleOnly = banner.filter((item) => item.rating === 4);
    let percentPurple = purpleOnly.map((item) => item.percentX);
    let sumPurple = percentPurple.reduce((prev, next) => prev + next, 0);
    setRate5star(percentArray[0]);
    setRate4star(sumPurple);
    setTotal(sum * 10);
  }, [currentBanner, ganyuData, kleeData]);

  return { total, rate5star, rate4star }
};

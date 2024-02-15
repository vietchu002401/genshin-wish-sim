import React from "react";

export const useGet4star = (currentBanner, ganyuData, kleeData) => {
  let [current4star, setCurrent4star] = React.useState([])
  let [current5star, setCurrent5star] = React.useState([])
  let [current3star, setCurrent3star] = React.useState([])

  React.useEffect(() => {
    if (currentBanner === "ganyu") {
        let array4star = ganyuData.filter((item)=> item.rating === 4)
        let array3star = ganyuData.filter((item)=> item.rating === 3)
        let array5star = ganyuData.filter((item)=> item.rating === 5)

        setCurrent5star(array5star)
        setCurrent3star(array3star)
        setCurrent4star(array4star)
        return
    }
        let array4star = kleeData.filter((item)=> item.rating === 4)
        let array3star = kleeData.filter((item)=> item.rating === 3)
        let array5star = kleeData.filter((item)=> item.rating === 5)

        setCurrent5star(array5star)
        setCurrent3star(array3star)
        setCurrent4star(array4star)
     
  }, [currentBanner, ganyuData, kleeData]);

  return { current5star, current4star, current3star }
};

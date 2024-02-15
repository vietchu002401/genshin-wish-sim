import React from "react";
import Background from "./components/background/Background";
import Ui from "./components/ui/Ui";

import Banner from "./components/banner/Banner";
import WishButton from "./components/wish-button/WishButton";
import WishAnimation from "./components/wish-animation/WishAnimation";
import History from "./components/history/History";

import ganyuData from "./data/adrift-in-the-harbor.json";
import kleeData from "./data/drifting-luminescence.json";

import { getCharacter, getCharacter10 } from "./utils/getCharacter";
import { useGetRating } from "./hooks/useGetRating";
import { useGet4star }from "./hooks/useGet4star"
import Cookies from "js-cookie";
import WishResult from "./components/wish-result/WishResult";

const App = () => {
  let [currentBanner, setCurrentBanner] = React.useState("ganyu");

  let [is5Star10, setIs5Star10] = React.useState(false);
  let [is4star10, setIs4Star10] = React.useState(false);

  let [is5Star1, setIs5Star1] = React.useState(false);
  let [is4star1, setIs4Star1] = React.useState(false);
  let [is3Star, setIs3Star] = React.useState(false);

  let [display10, setDisplay10] = React.useState("none");
  let [display1, setDisplay1] = React.useState("none");

  let { total, rate5star, rate4star } = useGetRating(currentBanner, ganyuData, kleeData)
  let {current5star, current4star, current3star} = useGet4star(currentBanner, ganyuData, kleeData)

  let [countGold, setCountGold] = React.useState(0);
  let [countPurple, setCountPurple] = React.useState(0);
  let [baoHiem5sao, setBaoHiem5sao] = React.useState(false)
  let [baoHiem4sao, setBaoHiem4sao] = React.useState(false)

  let [displayResult, setDisplayResult] = React.useState("none")
  let [srcResult, setSrcResult] = React.useState([])

  let [showHistory, setShowHistory] = React.useState(false)
  let [history, setHistory] = React.useState([])

  const setDefault = () => {
    setTimeout(() => {
      setDisplay10("none");
      setDisplay1("none");
      setIs5Star10(false);
      setIs4Star10(false);
      setIs5Star1(false);
      setIs4Star1(false);
      setIs3Star(false);
      setDisplayResult("flex")
    }, 7000);
  };

  // React.useEffect(()=>{
  //   setCountGold(Number(Cookies.get("countGold")))
  //   setCountPurple(Number(Cookies.get("countPurple")))
  // },[])

  const wish10 = () => {
    const {result, a, b} = getCharacter10(total, rate5star, rate4star, countGold, countPurple, baoHiem5sao, baoHiem4sao, current5star, current4star, current3star)
    setCountGold(a)
    setCountPurple(b)
    setBaoHiem5sao(result[result.length-1].baoHiem5sao)
    setBaoHiem4sao(result[result.length-1].baoHiem4sao)
    const have5star = result.some((item)=> item.maxRating > 4)
    setSrcResult(result.sort((a, b)=> -a.maxRating + b.maxRating).map(item=> item.src[0]))
    const newHistory = history.concat(result)
    setHistory(newHistory)
    setDisplay10("flex");
    if(have5star){
      setIs5Star10(true)
      setDefault()
      return
    }
    setIs4Star10(true)
    setDefault()
  };

  const wish1 = () => {
    const src = getCharacter(total, rate5star, rate4star, countGold, countPurple, baoHiem5sao, baoHiem4sao, current5star, current4star, current3star)
    setCountGold(countGold + src.countGoldPlus)
    setCountPurple(countPurple + src.countPurplePlus)
    setBaoHiem5sao(src.baoHiem5sao)
    setBaoHiem4sao(src.baoHiem4sao)
    setSrcResult(src.src)
    const newHistory = history.concat(src)
    setHistory(newHistory)
    setDisplay1("flex");
    if(src.maxRating === 5){
      setIs5Star1(true)
      setDefault();
      return
    }
    if(src.maxRating === 4){
      setIs4Star1(true)
      setDefault();
      return
    }
    setIs3Star(true)
    setDefault();
  };

  const changeBanner = React.useCallback((banner) => {
    setCurrentBanner(banner);
  }, []);

  const closeResult=()=>{
    setDisplayResult("none")
  }

  const closeHistory=()=>{
    setShowHistory(false)
  }
  const openHistory = ()=>{
    setShowHistory(true)
  }

  return (
    <div>
      <Ui changeBanner={changeBanner} />
      <Banner image={currentBanner} count={countGold} />
      <WishButton wish10={wish10} wish1={wish1} openHistory={openHistory}/>

      <div style={{ display: display10 }}>
        <WishAnimation
          is5Star10={is5Star10}
          is4Star10={is4star10}
          is3Star={is3Star}
        />
      </div>

      {/* don't complete yet */}
      <div style={{ display: display1 }}>
        <WishAnimation
          is5Star1={is5Star1}
          is4Star1={is4star1}
          is3Star={is3Star}
        />
      </div>
      <WishResult displayProp={displayResult} src={srcResult} closeResult={closeResult}/>
      <History showHistory={showHistory} closeHistory={closeHistory} history={history}/>
      <Background/>
    </div>
  );
};

export default App;

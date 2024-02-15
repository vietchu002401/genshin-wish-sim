import React from "react";
import "./history.scss";
import closingBtn from "../../assets/ui/closing-button.png";
import arrowRight from "../../assets/ui/arrow-right.png"
import arrowLeft from "../../assets/ui/arrow-left.png"

const History = ({ showHistory, closeHistory, history }) => {
    
    let [trueHistory, setTrueHistory] = React.useState([])
    let [page, setPage] = React.useState(1)
    let [currentPage, setCurrentPage] = React.useState(1)

    React.useEffect(()=>{

        let totalPage = (history.length - (history.length%5))/5 + 1
        setPage(totalPage)
        setTrueHistory([...history])
    },[currentPage, history])

    const turnLeft = ()=>{
      setCurrentPage(currentPage - 1)
    }

    const turnRight = ()=>{
      setCurrentPage(currentPage + 1)
    }
    console.log(trueHistory)
  return (
    <div style={{ display: showHistory ? "flex" : "none" }} className="history">
      <table>
        <tbody>
          <tr className="tehat">
            <th>Item Type</th>
            <th>Item Name</th>
            <th>Time Received</th>
          </tr>
          {trueHistory.slice(5*(currentPage-1),5*currentPage).map((item, index)=>{
            
            return (
                <tr key={index}>
                    <td>{item.type}</td>
                    <td className={getClassName(item.maxRating)}>{item.name}</td>
                    <td>2022</td>
                </tr>
            )
          })}
        </tbody>
      </table>

      <div onClick={() => closeHistory()} className="closing">
        <img src={closingBtn} alt="" />
      </div>

      <div className="pagination">
          <img onClick={currentPage > 1 ? ()=>turnLeft() : null} src={arrowLeft} alt=""/>
          {currentPage}
          <img onClick={currentPage < page ? ()=>turnRight() : null} src={arrowRight} alt=""/>
      </div>
    </div>
  );
};

const getClassName = (maxRating)=>{
    if(maxRating === 5){
        return "gold"
    }
    if(maxRating === 4){
        return "purple"
    }
    return null
}

export default History;

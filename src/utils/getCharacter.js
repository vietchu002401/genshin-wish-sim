export const getCharacter = (total, rate5star, rate4star, countGold, countPurple, baoHiem5sao, baoHiem4sao, current5star, current4star, current3star)=>{
    if(countGold > 78){
        if(baoHiem5sao){
            return {
                maxRating : current5star[0].rating,
                countGoldPlus : -countGold,
                countPurplePlus: 1,
                src : [current5star[0].src],
                baoHiem5sao : false,
                baoHiem4sao : baoHiem4sao,
                name: current5star[0].name,
                type: current5star[0].type
            }
        }
        const number = Math.floor(Math.random() * 2)
        if(number === 0){
            return {
                maxRating : current5star[0].rating,
                countGoldPlus : -countGold,
                countPurplePlus: 1,
                src : [current5star[0].src],
                baoHiem5sao : false,
                baoHiem4sao : baoHiem4sao,
                name : current5star[0].name,
                type: current5star[0].type
            }
        }
        const index = Math.floor(Math.random() * (current5star.length-1)) + 1
        return {
            maxRating : current5star[index].rating,
            countGoldPlus : -countGold,
            countPurplePlus: 1,
            src : [current5star[index].src],
            baoHiem5sao : true,
            baoHiem4sao : baoHiem4sao,
            name: current5star[index].name,
            type: current5star[index].type
        }
    }
    if(countPurple > 8){
        if(baoHiem4sao){
            const index = Math.floor(Math.random() * 3)
            return {
                maxRating : current4star[index].rating,
                countGoldPlus : 1,
                countPurplePlus: -countPurple,
                src : [current4star[index].src],
                baoHiem5sao : baoHiem5sao,
                baoHiem4sao : false,
                name : current4star[index].name,
                type: current4star[index].type
            }
        }
        const number = Math.floor(Math.random() * 2)
        if(number === 0){
            const index = Math.floor(Math.random() * 3)
            return {
                maxRating : current4star[index].rating,
                countGoldPlus : 1,
                countPurplePlus: -countPurple,
                src : [current4star[index].src],
                baoHiem5sao : baoHiem5sao,
                baoHiem4sao : false,
                name : current4star[index].name,
                type: current4star[index].type
            }
        }
        const index = Math.floor(Math.random() * (current4star.length-3)) + 3
        return {
            maxRating : current4star[index].rating,
            countGoldPlus : 1,
            countPurplePlus: -countPurple,
            src : [current4star[index].src],
            baoHiem5sao : baoHiem5sao,
            baoHiem4sao : true,
            name : current4star[index].name,
            type: current4star[index].type
        }
    }
//sssssssssssssssssssssssssssssssssssssss

    const number = Math.floor(Math.random() * total)
    if(number < rate5star){
        if(baoHiem5sao){
            return {
                maxRating : current5star[0].rating,
                countGoldPlus : -countGold,
                countPurplePlus: 1,
                src : [current5star[0].src],
                baoHiem5sao : false,
                baoHiem4sao : baoHiem4sao,
                name :current5star[0].name,
                type: current5star[0].type
            }
        }
        const number = Math.floor(Math.random() * 2)
        if(number === 0){
            return {
                maxRating : current5star[0].rating,
                countGoldPlus : -countGold,
                countPurplePlus: 1,
                src : [current5star[0].src],
                baoHiem5sao : false,
                baoHiem4sao : baoHiem4sao,
                name :current5star[0].name,
                type: current5star[0].type
            }
        }
        const index = Math.floor(Math.random() * (current5star.length-1)) + 1
        return {
            maxRating : current5star[index].rating,
            countGoldPlus : -countGold,
            countPurplePlus: 1,
            src : [current5star[index].src],
            baoHiem5sao : true,
            baoHiem4sao : baoHiem4sao,
            name :current5star[index].name,
            type: current5star[index].type
        }
    }
    if(number > rate5star && number < rate4star){
        if(baoHiem4sao){
            const index = Math.floor(Math.random() * 3)
            return {
                maxRating : current4star[index].rating,
                countGoldPlus : 1,
                countPurplePlus: -countPurple,
                src : [current4star[index].src],
                baoHiem5sao : baoHiem5sao,
                baoHiem4sao : false,
                name : current4star[index].name,
                type: current4star[index].type
            }
        }
        const number = Math.floor(Math.random() * 2)
        if(number === 0){
            const index = Math.floor(Math.random() * 3)
            return {
                maxRating : current4star[index].rating,
                countGoldPlus : 1,
                countPurplePlus: -countPurple,
                src : [current4star[index].src],
                baoHiem5sao : baoHiem5sao,
                baoHiem4sao : false,
                name : current4star[index].name,
                type: current4star[index].type
            }
        }
        const index = Math.floor(Math.random() * (current4star.length-3)) + 3
        return {
            maxRating : current4star[index].rating,
            countGoldPlus : 1,
            countPurplePlus: -countPurple,
            src : [current4star[index].src],
            baoHiem5sao : baoHiem5sao,
            baoHiem4sao : true,
            name : current4star[index].name,
            type: current4star[index].type
        }
    }

    const index = Math.floor(Math.random() * current3star.length)
    return {
        maxRating : current3star[index].rating,
        countGoldPlus : 1,
        countPurplePlus: 1,
        src : [current3star[index].src],
        baoHiem5sao : baoHiem5sao,
        baoHiem4sao : baoHiem4sao,
        name : current3star[index].name,
        type: current3star[index].type
    }
}


export const getCharacter10 = (total, rate5star, rate4star, countGold, countPurple, baoHiem5sao, baoHiem4sao, current5star, current4star, current3star)=>{
    let result = []
    let a = countGold
    let b = countPurple
    let c = baoHiem5sao
    let d = baoHiem4sao
    for(let index=1;index<=10;index++){
        const src = getCharacter(total, rate5star, rate4star, a, b, c, d, current5star, current4star, current3star)
        a = a + src.countGoldPlus
        b = b + src.countPurplePlus
        c = src.baoHiem5sao
        d = src.baoHiem4sao
        result.push(src)
    }
    return {result, a, b}
}
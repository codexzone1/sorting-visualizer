const BubbleSort = (array) => {
    const positions = [];
    const tempArray = array.slice();
    doBubbleSort(tempArray,positions)
    return positions;
}

const doBubbleSort =(
    tempArray,
    positions
)=>{
    let i,j,temp
    const n=tempArray.length;
    for(i=0;i<n;i++){
        for(j=i+1;j<n;j++){
            positions.push(['1st',j,i])
            positions.push(['2nd',j,i])
            if(tempArray[j]>tempArray[i]){
                positions.push(['overwritten',i,tempArray[j]])
                positions.push(['overwritten',j,tempArray[i]])
                temp = tempArray[i];
                tempArray[i] = tempArray[j];
                tempArray[j] = temp;

            }
        }
    }
}

export {BubbleSort};
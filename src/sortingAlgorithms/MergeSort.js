
const MergeSort = (array) =>{
    const positions = [];
    if(array.length <=1) return array;
    const tempArray = array.slice();
    MergeSorting(array,0,array.length-1,tempArray,positions);
    return positions;
}

const MergeSorting = (
    mainArray,
    startIdx,
    endIdx,
    tempArray,
    positions
    ) =>{
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx+endIdx)/2);
    MergeSorting(tempArray,startIdx,middleIdx,mainArray,positions);
    MergeSorting(tempArray,middleIdx+1,endIdx,mainArray,positions);
    Merge(mainArray,startIdx,middleIdx,endIdx,tempArray,positions);
}
const Merge = (
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    tempArray,
    positions
)=> {
    let i = startIdx;
    let k = startIdx;
    let j = middleIdx+1;
    while(i <= middleIdx && j <= endIdx) {
        positions.push(['1st',i,j]);
        positions.push(['2nd',i,j]);
        if(tempArray[i] <= tempArray[j]){
            positions.push(['overwritten',k,tempArray[i]]);
            mainArray[k++] = tempArray[i++];
        } else{
            positions.push(['overwritten',k,tempArray[j]]);
            mainArray[k++] = tempArray[j++];
        }
    }
    while(i <= middleIdx){
        positions.push(['1st',i,i]);
        positions.push(['2nd',i,i]);
        positions.push(['overwritten',k,tempArray[i]]);
        mainArray[k++] = tempArray[i++];
    }
    while(j <= endIdx){
        positions.push(['1st',j,j]);
        positions.push(['2nd',j,j]);
        positions.push(['overwritten',k,tempArray[j]]);
        mainArray[k++] = tempArray[j++];
    }   

}
export {MergeSort}; 


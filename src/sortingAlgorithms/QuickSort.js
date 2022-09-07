export const QuickSort = (array) =>{
	const positions = [];
	const tempArray = array.slice();
    doQuickSort(tempArray,0,tempArray.length - 1,positions)
    return positions;
}

const doQuickSort = (
    tempArray,
    startIdx,
    endIdx,
    positions
	)=>{
  let pivotIdx;
  if(startIdx < endIdx){
  	pivotIdx = partitionArray(tempArray,startIdx,endIdx,positions)
  	doQuickSort(tempArray, startIdx, pivotIdx - 1, positions);
  	doQuickSort(tempArray, pivotIdx + 1, endIdx, positions);
  }
}

const partitionArray = (
	tempArray,
	startIdx,
	endIdx,
	positions) =>{
	let pivotIdx = randomIntFromInterval(startIdx,endIdx)
	positions.push(['1st',pivotIdx,endIdx])
	positions.push(['2nd',pivotIdx,endIdx])
	positions.push(['overwritten',pivotIdx,tempArray[endIdx]])
	positions.push(['overwritten',endIdx,tempArray[pivotIdx]])
	swap(tempArray,pivotIdx,endIdx)

	let lastIdx = startIdx
	for(let i=startIdx;i<endIdx;i++){
		positions.push(["1st", i, endIdx]);
        positions.push(["2nd", i, endIdx]);
        if(tempArray[i] <= tempArray[endIdx]) {
            positions.push(["1st", i, lastIdx]);
            positions.push(["overwritten", i, tempArray[lastIdx]]);
            positions.push(["overwritten", lastIdx, tempArray[i]]);
            positions.push(["2nd", i, lastIdx]);
            swap(tempArray, i, lastIdx);
            lastIdx++;
	}
}
    positions.push(["1st", lastIdx, endIdx]);
    positions.push(["overwritten", endIdx, tempArray[lastIdx]]);
    positions.push(["overwritten", lastIdx, tempArray[endIdx]]);
    positions.push(["2nd", lastIdx, endIdx]);
    
    swap(tempArray, lastIdx, endIdx);
    return lastIdx;

}
function swap(tempArray, firstIndex, secondIndex) {
    let temp = tempArray[firstIndex];
    tempArray[firstIndex] = tempArray[secondIndex];
    tempArray[secondIndex] = temp;
}

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}
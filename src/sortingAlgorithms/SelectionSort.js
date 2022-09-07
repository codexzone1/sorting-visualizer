export const SelectionSort = (array) => {
    const positions = [];
    const tempArray = array.slice()
    doSelectionSort(tempArray,positions)
    return positions;
 }

 const doSelectionSort = (
     tempArray,
     positions
 ) =>{
    let i;
    const n = tempArray.length;  
    for(i=0;i<n-1;i++)  
    {  
        let small = i
        for(let j = i+1;j<n;j++){
            positions.push(['1st',j,small])
            positions.push(['2nd',j,small])
            if (tempArray[j] < tempArray[small]) {
                small = j;
            }
        }
        positions.push(['overwritten',small,tempArray[i]])
        positions.push(['overwritten',i,tempArray[small]])  
        let temp = tempArray[small];
        tempArray[small] = tempArray[i];
        tempArray[i] = temp;

    }  
 }

 
 
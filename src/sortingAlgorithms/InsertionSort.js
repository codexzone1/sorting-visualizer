const  InsertionSort = (array)=>{
   const positions =[]
   const tempArray = array.slice();
   doInsertionSort(tempArray,positions); 
   return positions;
}
const doInsertionSort = (
   tempArray,
   positions,
) =>{
   let n = tempArray.length;
   for(let i=1;i<n;i++){
      let key = tempArray[i]
      let j = i-1;
      positions.push(['1st',j,i]);
      positions.push(['2nd',j,i]);
      while(j >= 0 && tempArray[j] > key){
         positions.push(['overwritten',j+1,tempArray[j]])
         tempArray[j+1] = tempArray[j];
         j=j-1;
         if(j>=0){
            positions.push(['1st',j,i]);
            positions.push(['2nd',j,i]);
         }
      }
      positions.push(['overwritten',j+1,key]);
      tempArray[j+1] = key;
   }
}
export {InsertionSort}
import React, { useState,useEffect} from 'react';
import {MergeSort} from '../sortingAlgorithms/MergeSort';
import './sortingVisualizer.css'
import {InsertionSort} from '../sortingAlgorithms/InsertionSort'
import {BubbleSort} from '../sortingAlgorithms/BubbleSort'
import {SelectionSort} from '../sortingAlgorithms/SelectionSort'
import {QuickSort} from '../sortingAlgorithms/QuickSort'
// global variables
const Bars_Numbers = 350;
 
const barsSpeed = 2;
// global variables end here

const SortingVisualizer = () =>{
    const [bars,setBars] = useState([]);
    
    
    const resetBars = () =>{
        const array = [];
        let i;
        for( i=0;i<Bars_Numbers;i++){
            array.push(randomInt(7,720))
        }
        setBars([...array,{id:i}
        ])
    }
    useEffect(()=>{
      resetBars()
    },[]);
    
    const mergeSort = () =>{
        const positions = MergeSort(bars);
        for(let i=0;i<positions.length;i++){
            const barsPos = document.getElementsByClassName("array-bar");
             // const isChange = i % 3 !== 2;
             const isChange = positions[i][0] === "1st" || positions[i][0] === "2nd";
             if(isChange){
                 const [compare,barsIdxOne,barsIdxTwo] = positions[i];
                 const barOne = barsPos[barsIdxOne].style;
                 const barTwo = barsPos[barsIdxTwo].style;
                 //const color = i % 3 === 0 ? 'red' : 'blue';
                 const color = (positions[i][0] === '1st') ? 'red' : 'blue';
                 setTimeout(()=>{
                     barOne.backgroundColor = color;
                     barTwo.backgroundColor = color;
                 },i*barsSpeed);
             }else{
                 setTimeout(()=>{
                     const [overwritten,barIdxOne,newHeight] = positions[i];
                     const barOne = barsPos[barIdxOne].style;
                     barOne.height = `${newHeight}px`;
                 },i*barsSpeed);
             }
        }
    }

    const quickSort = () =>{
        const positions = QuickSort(bars);
        for(let i=0;i<positions.length;i++){
          const barsPos = document.getElementsByClassName("array-bar");
          const change = positions[i][0] === "1st" || positions[i][0] === "2nd";
          if(change){
              const [comparison,barIdxOne,barsIdxTwo] = positions[i]
              const color = (positions[i][0] === '1st') ? 'red' : 'blue';
              const barOneStyle = barsPos[barIdxOne].style
              const barTwoStyle = barsPos[barsIdxTwo].style
              setTimeout(()=>{
                  barOneStyle.backgroundColor=color
                  barTwoStyle.backgroundColor=color
              },i*barsSpeed)
          } else{
              setTimeout(() => {
                  const [overwritten,barIdxOne,newHeight] = positions[i]
                  const barOneStyle = barsPos[barIdxOne].style
                  barOneStyle.height = `${newHeight}px`;
              }, i*barsSpeed);
          }   
        }
    }
    const bubbleSort = () =>{
        const positions = BubbleSort(bars);
        for(let i=0;i<positions.length;i++){
          const barsPos = document.getElementsByClassName("array-bar");
          const change = positions[i][0] === "1st" || positions[i][0] === "2nd";
          if(change){
              const [comparison,barIdxOne,barsIdxTwo] = positions[i]
              const color = (positions[i][0] === '1st') ? 'red' : 'blue';
              const barOneStyle = barsPos[barIdxOne].style
              const barTwoStyle = barsPos[barsIdxTwo].style
              setTimeout(()=>{
                  barOneStyle.backgroundColor=color
                  barTwoStyle.backgroundColor=color
              },i*barsSpeed)
          } else{
              setTimeout(() => {
                  const [overwritten,barIdxOne,newHeight] = positions[i]
                  const barOneStyle = barsPos[barIdxOne].style
                  barOneStyle.height = `${newHeight}px`;
              }, i*barsSpeed);
          }   
        }
    }
    const selectionSort = () =>{
        const positions = SelectionSort(bars);
        for(let i=0;i<positions.length;i++){
            const change = (positions[i][0] === "1st") || (positions[i][0] === "2nd")
            const barsPos = document.getElementsByClassName("array-bar");
            if(change){
                const [comparison,barIdxOne,barIdxTwo] = positions[i]
                const color = (positions[i][0] === "1st") ? 'red' : 'blue';
                const barOneStyle = barsPos[barIdxOne].style
                const barTwoStyle = barsPos[barIdxTwo].style
                setTimeout(()=>{
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i*barsSpeed);
            }else{
                
                    const [overwritten,barIdx,newHeight] = positions[i]
                    const barOneStyle = barsPos[barIdx].style
                setTimeout(()=>{
                    barOneStyle.height = `${newHeight}px`;
                },i*barsSpeed)
            }
        }
        
    }
    const insertionSort = () =>{
       const positions = InsertionSort(bars);
      // console.log(positions);
       for(let i=0;i<positions.length;i++){
        const barsPos = document.getElementsByClassName("array-bar");
           const change = positions[i][0] === "1st" || positions[i][0] === "2nd";
           if(change){
            const [comparison,barsOneIdx,barsTwoIdx] = positions[i];
            const color = (positions[i][0] === "1st") ? 'red' : 'blue';
            const barOneStyle = barsPos[barsOneIdx].style;
            const barTwoStyle = barsPos[barsTwoIdx].style;
            setTimeout(()=>{
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            },i*barsSpeed);
           }else{
               setTimeout(()=>{
                   const [overwritten,barsOneIdx,newHeight] = positions[i];
                   const barOneStyle = barsPos[barsOneIdx].style;
                   barOneStyle.height = `${newHeight}px`;
               },i*barsSpeed);
           }
       }
    } 
    return(
       <div className="array-container">
           {bars.map((value,idx)=> (
               <div
                 className = "array-bar"
                 key={idx}
                 style = {{
                     backgroundColor:'blue',
                     height:`${value}px`
                 }}></div>
           ))}
           
           <button className="button-1" onClick={() => resetBars()}>Generate Bars</button>
           <button className="button-1" onClick={() => mergeSort()}>merge sort</button>
           <button className="button-1" onClick={() => insertionSort()}>insertion Sort</button>
           <button className="button-1" onClick={() => bubbleSort()}>Bubble Sort </button>
           <button className="button-1" onClick={() => selectionSort()}>Selection Sort </button>
           <button className="button-1" onClick={() => quickSort()}>Quick Sort </button>
           </div>
       

    )
}

const randomInt= (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

export default SortingVisualizer;  
import React,{Children, useState} from 'react'
import styles from './ContextMenu.module.css'

const ContextMenu = () => {

    <h1>inside of context menu</h1>
//  const[isVisible, setIsVisible] = useState=(false)
//  const [position, setPosition] = useState({ x: 0, y: 0 })

//  const items =['Set as first page', 'Rename', 'Copy', 'Duplicate', 'Delete']

//     const contextMenuHandler =(e) =>{
//         e.prevent.Default()
//         setIsVisible(true)
//         setPosition({x:e.clientX, y:e.clientY})

//     }
//     const onkeyDownHandler=(e)=>{
//         if(e.code === 'Escape'){
//             setIsVisible(false)
//         }
//     }

//   return (
//     <div onContextMenu={contextMenuHandler}>{Children}
//     {isVisible && (
//        <ul 
//        style={{left:position.x, top:position.y}} 
//        className={styles.contextMenu}>
//           {items.map((item)=>{
//             return (
//                 <li 
//                 key={item.id}
//                 onClick={()=>{
//                     setIsVisible(false)
//                     onItemClicked(item)
//                 }} >
//                     {item.caption}
//                 </li>
//             )
//           }
        
//         )}


//        </ul>




//     )}
    
//     </div>
//   )
}

export default ContextMenu




const Spinner = ({height} : {height: string}) => {
    return(
     <div className={`w-[100%] flex justify-center items-center h-[${height}]`}>
         <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

     </div>   
)
}

export default Spinner
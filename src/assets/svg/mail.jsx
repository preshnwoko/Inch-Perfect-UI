const Mail = (fill, width, height) =>{
    return(
        <svg width={width || "18"} height={height || "18"} viewBox="0 0 18 18" fill={"none"} xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3H15C15.825 3 16.5 3.675 16.5 4.5V13.5C16.5 14.325 15.825 15 15 15H3C2.175 15 1.5 14.325 1.5 13.5V4.5C1.5 3.675 2.175 3 3 3Z" stroke="#797774" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.5 4.5L9 9.75L1.5 4.5" stroke="#797774" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

    )
}
export default Mail
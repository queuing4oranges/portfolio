const BouncyButton = ( { handleClick }) => {
    return ( 
        <button 
        className="button bouncy"
        onClick={() =>handleClick()}
        >Get in touch</button>
     );
}
 
export default BouncyButton;
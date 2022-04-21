function Footer() {

        const currentDate = new Date; 
        const year = currentDate.getFullYear();
    
    return(
        <div>
            <h2>Made by Supreme Observer in the year 2022, maintained in the year {year}</h2>
        </div>
    )
}

export default Footer;
import logo from "./images/logo.svg"

const headerStyle = {
    backgroundColor: "black",
    fontSize: 30,
    fontWeight: "bold",
    padding: 15
};

export default function Header(){
    return(
        <div style={headerStyle}>
            <img src={logo} style={{height: "45px", marginRight: "1em"}}></img>
            <span>React Course - ContactOpedia</span>
        </div>
    );
}
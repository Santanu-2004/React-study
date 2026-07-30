export default function Price({ oldPrice, newPrice }) {
    let oldStyles = {
        // textDecorationLineThrough : true,
        color: "red",
        marginRight: "16px",
    };
    let newStyles = {
        fontWeight: "bold",
    };
    let styles = {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: "auto",
        backgroundColor: "#e2a217",
        padding: "5px 0",
        borderBottomLeftRadius: "16px",
        borderBottomRightRadius: "16px",
    };
    return (
        <div style={styles}>
            <span style={oldStyles}> {oldPrice} </span>
            <span style={newStyles}>{newPrice} </span>
        </div>
    );
}

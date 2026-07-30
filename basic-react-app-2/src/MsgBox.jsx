export default function MsgBox({userName, textColor}){
    // let newcolor = color;
    return (
        <div>
            <h1 style={{color:textColor}}>hello {userName}</h1>
        </div>
    );
}
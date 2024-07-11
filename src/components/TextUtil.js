import React, {useState} from 'react'

export default function TextUtil(props) {
    const [text, setText] = useState("")

    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
    })

    const[btnText, setBtnText] = useState("Turn to Dark Mode")
    const[btnColor, setBtnColor] = useState("btn-light")
    const toggleStyle = ()=> {
        if(myStyle.color === 'black')
        {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            })
            setBtnText("Turn to Light Mode")
            setBtnColor("btn-dark")
        }

        else{
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'               
            })
            setBtnText("Turn to Dark Mode")
            setBtnColor("btn-light")

        }
    }

    const handleUpCase = () =>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Upped the Words", "success")
    
    }

    const handleLowCase = () =>{
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }

    const getWordCount = (text) => {
        if (text.trim() === "") {
            return 0;
        }
        return text.trim().split(/\s+/).length;
    };

    const handleSpaceCase = () => {
        let newText = text.split(/\s+/).join(" ")
        setText(newText);
    }

  return (
    <>
        <div className={`container my-2 mb-4 rounded`} style={{color: props.mode === 'light'?'black':'white'}}>
            <div>
                <h4 >{props.heading}</h4>
                <div className="mb-3">
                    <textarea className="form-control" id="t-A" rows="10" value={text} onChange={handleOnChange}
                    style={{backgroundColor: props.mode === 'light'?'white':'grey', color: props.mode === 'light'?'black':'white'}}> {text}</textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2" onClick={handleUpCase}> Convert to Upper Case</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleLowCase}> Convert to Lower Case</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleSpaceCase}> Remove Extra Spaces</button>
                <button type='button' className= {`btn ${btnColor} mx-2 my-2`} onClick={toggleStyle}> {btnText} </button>
            </div>
        </div>

        <div className={`container my-2 text-${props.mode === 'light'?'black':'white'}`}>
            <h5>Statistics</h5>
            <p> {getWordCount(text)} words and {text.length} characters </p>
            <h5> Time to Read</h5>
            <p> {0.008 * text.split(" ").length} minutes</p>
            <h5> Preview </h5>
            <p> {text.length>0? text: "Write something to see the magic..."}</p>
        </div>

    </>
  )
}

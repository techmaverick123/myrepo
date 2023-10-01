import React,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log('UpperCase Clicked '+text)
        let newText=text.toUpperCase()
        
    }
    const handleClearClick=()=>{
        // console.log('UpperCase Clicked '+text)
        let newText=''
        setText(newText)
        props.showAlert("Text Cleared","success")
    }
    
    const handleCopyClick =()=>{
        // console.log('UpperCase Clicked '+text)
        console.log('I am Copied')
        var newText=document.getElementById('myBox')
        newText.select();
        document.getSelection().removeAllRanges()
        navigator.clipboard.writeText(newText.value)
        props.showAlert("Text Copied","success")
    }
    
    const handleExtraSpace=()=>{
        let newText=text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Space removed","success")
    }

    const handleOnChange =(event)=>{
        // console.log('UpperCase Changed')
        setText(event.target.value)
    }
    function getcount(str){
        let vowelcount=0
        const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
        for(let char of str){
            if(vowels.includes(char)){
                vowelcount++;
            }
        }
        return vowelcount
    }
    const [text, setText] = useState('New Text')//decalring new state variable
    
    let myString = text;

    // use / /g to remove all spaces from the string
    let remText = myString.replace(/ /g, "");

    // get the length of the string after removal
    let len = remText.length;

    return (
    <>
          <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
          <h1>{props.heading}</h1>
          <div className="">
                    <textarea className="form-control" id="myBox" rows="8" onChange={handleOnChange} value={text} style={{ backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }  } ></textarea>
          </div>
          <button  className="btn btn-primary mx-2 my-2" onClick={handleUpClick} >Convert to Uppercase</button>
          <button  className="btn btn-primary mx-2 my-2" onClick={handleClearClick} >Clear Text</button>
          <button  className="btn btn-primary mx-2 my-2" onClick={handleCopyClick} >Copy Text</button>
          <button  className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace} >Remove Extra Space</button>

    </div>
    
    <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Your Text Summary</h1>
        <p>Words: {text.split(" ").filter((ele)=>{return ele.length!==0}).length} Characters: {len}</p>
        <p>Vowels: {getcount(text)} </p>
    </div>
</>
  )
}

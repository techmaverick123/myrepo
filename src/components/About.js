import React,{useState} from 'react'

export default function About(props) {
    /*const [mystyle, setMyStyle] = useState({
            color:'black',
            backgroundColor:'white'
        })    
    const [btntext, setBtntext] = useState('Entabled Dark Mode')
    */   
    /*const toogleStyle=()=>{
        if(mystyle.color=='black'){
            setMyStyle(
                {
                    color:'white',
                    backgroundColor:'black',
                    border:'1px solide white'
                }
            )
            setBtntext("Enable Dark Mode")
        }
        else{
            setMyStyle({
                color:'black',
                backgroundColor:'white'
            })
            setBtntext("Enable Light Mode")

        }
    } 
    */
    

  return (
    <div className='container' style={mystyle}>  
          <h1>About Us</h1>
          <div className="accordion" id="accordionPanelsStayOpenExample" >
              <div className="accordion-item" >
                  <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                      <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                          Accordion Item #1
                      </button>
                  </h2>
                  <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                      <div className="accordion-body" style={mystyle}>
                          <strong >This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                  </div>
              </div>
              <div className="accordion-item" style={mystyle}>
                  <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                      <button style={mystyle} className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                          Accordion Item #2
                      </button>
                  </h2>
                  <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                      <div className="accordion-body" style={mystyle} >
                          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                  </div>
              </div>
              <div className="accordion-item" style={mystyle}>
                  <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree" style={mystyle}>
                          Accordion Item #3
                      </button>
                  </h2>
                  <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                      <div className="accordion-body" >
                          <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                  </div>
              </div>
          </div>
          {/* <div className='container my-2'> 
              <button type="button" className="btn btn-primary" onClick={toogleStyle} >{btntext}</button>
          </div> */}
    </div>
  )
}

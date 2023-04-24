import React from 'react'

export default function About(props) {
    let myStyle = {
        color : props.mode ==='dark'?'white':'rgb(49, 50, 50)',
        backgroundColor : props.mode === 'dark' ? 'rgb(49, 50, 50)' : 'white',
        borderColor : props.mode === 'dark'?'white':'rgb(49, 50, 50)'
    }

  return (
    <div className='container' style={myStyle}>
        <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               <strong> Analyze Your Text </strong>
                
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or reading time & many other useful functions to edit your text to your need.
                </div>
            </div>
        </div>
        <div className="accordion-item my-2">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
             <strong>Free to use</strong> 
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle}  aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word / character limit.
            It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
               <strong>Browser Compatible</strong> 
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            This word counter software works in any web browsers such as <br />-Chrome <br />-Firefox <br />-Internet Explorer <br />-Safari<br />-Opera
            </div>
            </div>
        </div>
</div>
    </div>
  )
}

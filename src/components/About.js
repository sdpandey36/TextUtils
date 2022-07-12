import React,{useState} from 'react'

export default function About() {

    const [mystyle, setmystyle] = useState({
        color:"black",
        backgroundColor:"white"
    })
    const [btntext, setbtntext] = useState("enable dark mode")

    const togglestyle=()=>{
        if(mystyle.color==="black"){
            setmystyle({
                color:"white",
                backgroundColor:"black"

            })
            setbtntext("enable white mode")

        }
        else{
            setmystyle({
                color:"black",
                backgroundColor:"white"

            })
            setbtntext("enable dark mode")
            

        }
    }
    
    return (
        <>
        <div className='container' style={mystyle}>
            <h1 className='container my-3'>About Us</h1>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item" style={mystyle} >
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse ratione, veritatis libero cum voluptates architecto impedit, odio nulla dignissimos praesentium nesciunt nemo et fugiat eaque maxime dolorem deserunt nostrum sunt.</div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quasi, error dolor, officiis omnis at magni earum sint alias tempora impedit aliquam mollitia nihil fuga nesciunt. Unde soluta ex impedit illum quasi pariatur illo temporibus veritatis. Recusandae error quidem corporis..</div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti rem eius optio esse commodi odit consectetur unde non harum temporibus magni laborum nemo veritatis nostrum accusantium consequuntur, incidunt ut cupiditate. Tempore quas dicta ea, delectus quos voluptate. Laboriosam odit quidem repellat qui, aperiam voluptas dolor deleniti vitae aspernatur, nulla sit?.</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container my-2">
        <button onClick={togglestyle} type="button" class="btn btn-primary">{btntext}</button>

        </div>
        </>
    )
}

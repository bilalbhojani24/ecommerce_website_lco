import React from "react"

function Team() {
  return (
    <div className="container">
      <div className="card-deck mb-4">
        <div className="card">
          <img
            src="https://images.pexels.com/photos/3577561/pexels-photo-3577561.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="card-img-top"
            alt="team member 1"
            height="250px"
          />
          <div className="card-body">
            <h5 className="card-title">Hitesh Choudhary</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="card-img-top"
            alt="team member 2"
            height="250px"
          />
          <div className="card-body">
            <h5 className="card-title">Amanta Sery</h5>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="card-img-top"
            alt="team member 3"
            height="250px"
          />
          <div className="card-body">
            <h5 className="card-title">Shaun Marsh</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team

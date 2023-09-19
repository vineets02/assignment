import React, { useState } from "react"
import "./Card.css"
import Chip from "./Chip"
import { MoreHorizontal } from "react-feather"
import Dropdown from "./Dropdown"
const Card = (props) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const renderStars = (rating) => {
    const maxRating = 5 // You can change this based on your rating scale
    const filledStars = Math.floor(rating)
    const emptyStars = maxRating - filledStars
    const stars = []

    for (let i = 0; i < filledStars; i++) {
      stars.push(
        <span key={i} className="star">
          &#9733;
        </span>
      )
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={filledStars + i} className="star">
          &#9734;
        </span>
      )
    }

    return stars
  }
  return (
    <div className="card  " draggable onDragEnd={{}} onDragEnter={{}}>
      <div className="card_top">
        <div className="card_top_labels">
          <p className="text-gray-400 text-sm ">{props.card?.date}</p>
        </div>
        <div className="board_top_more" onClick={() => setShowDropdown(true)}>
          <MoreHorizontal />
          {showDropdown && (
            <Dropdown onClose={() => setShowDropdown(false)}>
              <div className="board_dropdown">
                <p className="text-black">Delete Board</p>
              </div>
            </Dropdown>
          )}
        </div>
      </div>
      <div className="card_title font-medium">{props.card?.title}</div>
      AED {props.card?.aed}
      <br />
      <div className="card_rating">{renderStars(props.card?.rating)}</div>
      <div className="card_footer">
        {props.card?.labels?.map((item, index) => (
          <Chip key={index} text={item.text} color={item.color} />
        ))}
      </div>
    </div>
  )
}

export default Card

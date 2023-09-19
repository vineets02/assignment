import React, { useState } from "react"
import "./Board.css"
import Card from "./Card"
import { Link, useNavigate, useNavigation } from "react-router-dom"
import { MoreHorizontal, Plus } from "react-feather"
import Editable from "./Editable"
import Dropdown from "./Dropdown"

const Board = (props) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const navigate = useNavigate()
  const addicon = () => {
    navigate("/addlead")
  }

  return (
    <div className="board">
      <div className="board_top">
        <p className="board_top_title">
          {props.board?.title}
          <span>{`${props.board?.cards?.length}`}</span>
        </p>
        {/* <p onClick={addicon} className="cursor-pointer ">
          <Plus />
        </p> */}
        <div className="board_top_more" onClick={() => setShowDropdown(true)}>
          <MoreHorizontal />
          {showDropdown && (
            <Dropdown onClose={() => setShowDropdown(false)}>
              <div className="board_dropdown">
                <p>Delete Board</p>
              </div>
            </Dropdown>
          )}
        </div>
      </div>
      <div className="board_cards  mb-4 custom_scroll">
        {props.board?.cards?.map((item) => (
          <Card key={item.id} card={item} />
        ))}
      </div>
      <div className="app_boards_board">
        <Editable
          displayClass="app_boards_board"
          text="Add Card"
          placeholder="Enter Card title"
        />
      </div>
    </div>
  )
}

export default Board

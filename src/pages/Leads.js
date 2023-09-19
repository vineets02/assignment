import React, { useEffect, useState } from "react"
import Layout from "../components/layout/Layout"
import Board from "../components/Board"
import ".././App.css"
import Editable from "../components/Editable"

const Leads = () => {
  const currentDate = new Date()

  // Format the date as needed (e.g., "YYYY-MM-DD HH:MM:SS")
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  const [data, setData] = useState([
    {
      id: Date.now() + Math.random() * 2,
      title: "New",
      cards: [
        {
          id: Date.now() * Math.random(),
          title: " jks opportunity",
          tasks: [],
          labels: [
            {
              text: "Overdue",
              color: "purple",
            },
          ],
          desc: "idsdfjsfjsfsjfsk",
          aed: 5000.0,
          rating: 4,
          date: formattedDate,
        },
        {
          id: Date.now() * Math.random(),
          title: " jks opportunity",
          tasks: [],
          labels: [
            {
              text: "Overdue",
              color: "purple",
            },
          ],
          desc: "idsdfjsfjsfsjfsk",
          aed: 5000.0,
          rating: 4,
          date: formattedDate,
        },
      ],
    },
    {
      id: Date.now() + Math.random() * 2,
      title: "Qualified",
      cards: [
        {
          id: Date.now() + Math.random(),
          title: " jks opportunity",
          tasks: [],
          labels: [
            {
              text: "Overdue",
              color: "purple",
            },
          ],
          desc: "idsdfjsfjsfsjfsk",
          aed: 5000.0,
          rating: 4,
          date: formattedDate,
        },
        {
          id: Date.now() * Math.random(),
          title: " jks opportunity",
          tasks: [],
          labels: [
            {
              text: "Overdue",
              color: "purple",
            },
          ],
          desc: "idsdfjsfjsfsjfsk",
          aed: 5000.0,
          rating: 4,
          date: formattedDate,
        },
      ],
    },
    {
      id: Date.now() + Math.random() * 2,
      title: "praposal",
      cards: [
        // {
        //   id: Date.now() + Math.random(),
        //   title: " jks opportunity",
        //   tasks: [],
        //   labels: [
        //     {
        //       text: "Overdue",
        //       color: "purple",
        //     },
        //   ],
        //   desc: "idsdfjsfjsfsjfsk",
        //   aed: 5000.0,
        //   rating: 4,
        //   date: formattedDate,
        // },
        {
          id: Date.now() * Math.random(),
          title: " jks opportunity",
          tasks: [],
          labels: [
            {
              text: "Overdue",
              color: "purple",
            },
          ],
          desc: "idsdfjsfjsfsjfsk",
          aed: 5000.0,
          rating: 4,
          date: formattedDate,
        },
      ],
    },
  ])

  // useEffect(() => {
  //   const savedData = JSON.parse(localStorage.getItem("leadFormData"))
  //   if (Array.isArray(savedData)) {
  //     setData(savedData)
  //   }
  // }, [])
  console.log(data, "data")

  const addCard = (title, bid) => {
    const card = {
      id: Date.now() + Math.random(),
      title: "",
      labels: [],
      organization: "",
      opportunity: "",
      email: "",
      phoneNumberCode: "select",
      phoneNumber: "",
      team: "select",
      leadType: "select",
      product: "",
      Rating: "",
      revenue: "",
      dueDate: "",
    }
    const index = data.findIndex((item) => item.id === bid)
    if (index < 0) return
    const tempBoards = [...data]
    tempBoards[index].cards.push(card)
    setData(tempBoards)
  }

  return (
    <>
      <Layout>
        <div className="app_outer">
          <div className="app_boards ms-20">
            {data.map((item) => (
              <Board key={item.id} board={item} />
            ))}
            <div className="app_boards_board">
              <Editable
                displayClass="app_boards_board"
                text="Add Board"
                placeholder="Enter board title"
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Leads

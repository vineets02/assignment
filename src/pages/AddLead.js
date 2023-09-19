import React, { useState } from "react"

import Layout from "../components/layout/Layout"
import countrycod from "../components/countrycode.json"
import { v4 as uuidv4 } from "uuid"
import { useNavigate } from "react-router-dom"

const AddLead = () => {
  const [formData, setFormData] = useState({
    id: Date.now() + Math.random() * 2,
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
  })
  const [countrycode, Setcountrycode] = useState(countrycod)
  const [countrycodesearch, Setcountrycodesearch] = useState("")

  const navigation = useNavigate()
  const handleSaveLead = (e) => {
    e.preventDefault()
    const uniqueId = uuidv4()

    // Create a new data object with the unique ID
    const newData = {
      ...formData,
      id: uniqueId, // Include the unique ID in the data
    }

    // Retrieve existing data from local storage
    const existingData = JSON.parse(localStorage.getItem("leadFormData")) || []

    // Add the new data object to the array
    const updatedData = [...existingData, newData]

    // Save the updated array to local storage
    localStorage.setItem("leadFormData", JSON.stringify(updatedData))
    navigation("/leads")
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <>
      <Layout>
        <div className=" ms-20">
          <div className="max-w w-full space-y-8">
            <form className="mt-8 space-y-6" action="#" method="POST">
              <div class="grid grid-cols-3 ">
                <div>
                  <h5>
                    <b>Lead Pipeline</b>
                  </h5>
                  <p className="text-slate-400">
                    This will be displayed on Lead
                  </p>
                </div>
                <div>
                  <div>
                    <label className="text-sm font-medium">
                      Organization/Contact
                    </label>

                    <select
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full p-1 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                    >
                      <option value="select">select</option>
                      <option>Chroma</option>
                      <option>Amazon</option>
                      <option>Flipkart</option>
                    </select>
                  </div>
                  <div className="py-4">
                    <label className="text-sm font-medium">Opportunity</label>
                    <input
                      type="text"
                      name="opportunity"
                      value={formData.opportunity}
                      onChange={handleChange}
                      required
                      className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="e.g. Product Pricing"
                    />
                  </div>
                </div>
              </div>
              <hr />
              <div class="grid grid-cols-3 ">
                <div>
                  <h5>
                    <b>Details</b>
                  </h5>
                  <p className="text-slate-400">
                    Add contact details for lead Pipeline
                  </p>
                </div>
                <div>
                  <div>
                    <label className="text-sm font-medium">Email</label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="e.g. Product Pricing"
                    />
                  </div>
                  <div className="py-4 ">
                    <label className="text-sm font-medium">Phone Number</label>
                    <div className="grid grid-cols-3 ">
                      <select
                        name="phoneNumberCode"
                        value={formData.phoneNumberCode}
                        onChange={handleChange}
                        className="w-full text-sm rounded-l-md text-center text-gray-500 bg-white border shadow-sm outline-none appearance-none focus:border-indigo-600"
                      >
                        <option value="select" hidden>
                          Select Code
                        </option>
                        {countrycode.map((item) => {
                          return (
                            <option key={uuidv4()} value={item.code}>
                              {item.dial_code} {item.code}
                            </option>
                          )
                        })}
                      </select>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="appearance-none col-span-2 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-r-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="e.g. 9881701338"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="grid grid-cols-3">
                <div>
                  <h5>
                    <b>Setup Lead</b>
                  </h5>
                </div>
                <div>
                  <div>
                    <label className="text-sm font-medium">Select Team</label>

                    <select
                      name="team"
                      value={formData.team}
                      onChange={handleChange}
                      className="w-full p-1 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                    >
                      <option value="select">select</option>
                      <option>Sale Team</option>
                      <option>Marketing Team</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Lead Type</label>

                    <select
                      name="leadType"
                      value={formData.leadType}
                      onChange={handleChange}
                      className="w-full p-1 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                    >
                      <option value="select">select</option>
                      <option>Hot</option>
                      <option>Cold</option>
                      <option>Warm</option>
                    </select>
                  </div>
                  <div className="py-2">
                    <label className="text-sm font-medium">Product</label>
                    <input
                      type="text"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      required
                      className=" 
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-md shadow-sm 
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Add Product"
                    />
                  </div>
                  <div className="py-2">
                    <label className="text-sm font-medium">Rating</label>
                    <input
                      type="text"
                      name="Rating"
                      value={formData.Rating}
                      onChange={handleChange}
                      required
                      className=" 
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-md shadow-sm 
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Add Rating"
                    />
                  </div>
                  <label className="text-sm font-medium">Expect Revenue</label>
                  <div class="grid grid-cols-3 ">
                    <select
                      value={countrycodesearch}
                      onChange={(e) => Setcountrycodesearch(e.target.value)}
                      className="w-full text-sm rounded-l-md text-center text-gray-500 bg-white border  shadow-sm outline-none appearance-none focus:border-indigo-600"
                    >
                      <option value=" " hidden>
                        <p className="">code</p>
                      </option>
                      {countrycode.map((item) => {
                        return (
                          <option key={uuidv4()} value={item.code}>
                            {item.dial_code} {item.code}
                          </option>
                        )
                      })}
                    </select>
                    <input
                      type="number"
                      name="revenue"
                      value={formData.revenue}
                      onChange={handleChange}
                      className="appearance-none col-span-2 rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-r-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="e.g. 0.00"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Due Date</label>

                    <input
                      type="date"
                      name="dueDate"
                      value={formData.dueDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <hr />
              <div
                className="grid grid-cols-3"
                style={{
                  justifyContent: "right",
                  marginRight: 5,
                  display: "flex",
                }}
              >
                <div
                  className=""
                  style={{
                    marginRight: 10,
                  }}
                >
                  <button className="bg-transparent border border-gray px-3 text-center text-sm text-black p-1 rounded-lg ">
                    cancle
                  </button>
                </div>
                <div>
                  <button
                    className="bg-sky-500 px-3 text-center text-sm text-white p-1 rounded-lg "
                    onClick={handleSaveLead}
                  >
                    save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default AddLead

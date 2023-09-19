import React from "react"
import { useLocation } from "react-router-dom"

const BreadCrumb = () => {
  const location = useLocation()
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment !== "")

  return (
    <>
      <div>
        <nav className="flex mx-20" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
              <a
                href="#"
                class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  class="w-3 h-3 mr-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                Leads
              </a>
            </li>
            {pathSegments.map((segment, index) => (
              <li class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                <svg
                  class="w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                {index === pathSegments.length - 1 ? (
                  <span className="">{segment}</span> // Current page (last segment)
                ) : (
                  <a className="text-orange-300" href={`/${segment}`}>
                    {segment}
                  </a> // Other segments (links)
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h3 className="font-bold text-lg mx-20 "> {pathSegments}</h3>
        <p className="text-gray-400 text-sm mx-20 ">
          Lorem Ipsum is simply dummy text is used for description purpose
        </p>
      </div>
    </>
  )
}

export default BreadCrumb

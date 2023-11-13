import React from "react"
import {render} from "@testing-library/react"
import Difficulty from "../difficulty.js"

describe('Difficulty component', () => {
    test('Renders the difficulty component correctly', () => {
        render(<Difficulty preparationTime={"easy"} />)
    })
})
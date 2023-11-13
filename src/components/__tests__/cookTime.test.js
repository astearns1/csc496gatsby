import React from "react"
import {render} from "@testing-library/react"
import CookTime from "../cookTime.js"

describe('Cook Time component', () => {
    test('Renders the prep time component correctly', () => {
        render(<CookTime preparationTime={parseFloat("15")} />)
    })
})
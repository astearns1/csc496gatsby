import React from "react"
import {render} from "@testing-library/react"
import PrepTime from "../prepTime.js"

describe('Prep Time component', () => {
    test('Renders the prep time component correctly', () => {
        render(<PrepTime preparationTime={parseFloat("15")} />)
    })
})
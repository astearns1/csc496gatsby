import React from "react"
import {render} from "@testing-library/react"
import Servings from "../servings.js"

describe('Servings component', () => {
    test('Renders the servings component correctly', () => {
        render(<Servings preparationTime={parseFloat("8")} />)
    })
})
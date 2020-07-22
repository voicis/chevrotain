const { expect } = require("chai")
const { parse } = require("./json")

describe("The JSON Grammar", () => {
  it("missing comma", () => {
    const inputText = `{
      "a": 1 
      "b": 2,
      "c": 3
    }
    `
    const parseResult = parse(inputText)

    expect(
      parseResult.cst.children.object[0].children.objectItem.map(
        (item) => item.children.StringLiteral[0].image
      )
    ).to.include.members(['"a"', '"b"', '"c"'])
  })

  it("missing value", () => {
    const inputText = `{
      "a":       "b": 2
      "c": 3
    }
    `
    const parseResult = parse(inputText)

    expect(
      parseResult.cst.children.object[0].children.objectItem.map(
        (item) => item.children.StringLiteral[0].image
      )
    ).to.include.members(['"a"', '"b"', '"c"'])
  })

  it("key missing", () => {
    const inputText = `{
      "a": 1,      : 2,
      "c": 3
    }
    `
    const parseResult = parse(inputText)

    expect(
      parseResult.cst.children.object[0].children.objectItem.map(
        (item) => item.children.value[0].children.NumberLiteral[0].image
      )
    ).to.include.members(["1", "2", "3"])
  })

  it("key and comma missing", () => {
    const inputText = `{
      "a": 1      : 2
      "c": 3
    }
    `
    const parseResult = parse(inputText)

    expect(
      parseResult.cst.children.object[0].children.objectItem.map(
        (item) => item.children.value[0].children.NumberLiteral[0].image
      )
    ).to.include.members(["1", "2", "3"])
  })
})

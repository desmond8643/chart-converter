// const oneLine = {
//   rhythm: "16",
//   notes: ["4/3", "6/5", "7/2", "1", "8", "1", "8", "7x/2x"],
//   pause: [",,,", ",,,", ",,", ",", ",", ",", ",", ",,,,"],
// }

/*
1 integer
4 
7x
1b
1xb
B7
Conclusion => tap and touch have 1 integer
*/

let line =
  `{1},
  {16}6/3,,,5/4,,,5/4,,{32}E5,E4,E3,E2,E1,E8,E7,E6,{4}E5,
  {1}8h[4:3]/2-4v6[2:1],7-5v3[2:1]/1h[4:3],8h[4:3]/2-6-3-5[2:1],7-3-6-4[2:1]/1h[4:3],
  {8}2,2,{4}8-4-6[4:1]/3h[4:3],,,
  {8}7,7,{4}6h[4:3]/1-5-3[4:1],,,
  {8}2,2,{4}8-4[8:1]/3,,
  5/2,6/3,7/4,{8}6/5,4/3,{4}5/2,
  
  1x/2x,1x/2x>5[4:1],5<8[4:1],8>3[4:1],3<6[4:1],6,1,8/1,
  7x/8x,7x<4[4:1]/8x,4>1[4:1],1<6[4:1],6>3[4:1],3,8,8/1,
  1x/2x,1x/2x-6[4:1],6-4-8[4:1],8>3[4:1],3-5-7[4:1],7,1,8/1,
  7x/8x,7x-3[4:1]/8x,3-5-1[4:1],1<6[4:1],6-4-2[4:1],2,8,8/1,
  
  5/3-1[8:1],4/3,4/6-8[8:1],6/5,5/3-1[8:1],4/3,7h[4:1]/4,{8}5,6/4,
  {4}5/3-1[8:1],4/3,6-8[8:1]/4,6/5,8x/2x-4[8:1],1/2,{8}7/5,7/5,6/4-2[8:1],6/4,
  5-7[8:1],5,3-1[8:1],3,6-8[8:1],6,4-1[8:1],4,
  5-8[8:1],5,3-8[8:1],3,6-1[8:1],6,2,2,
  {16}3,5,3,5,4,6,4,6,{32}4,3,2,1,8,7,6,5,4,3,2,1,8,7,6,5,{8}4,,7/1,7/1,{4}6b-8[8:1]/2b-8[8:1],6-4[8:1]/2-4[8:1],
  
  6/2,{24}7,6x,5x,2,3x,4x,7,6x,5x,2,3x,4x,{4}8bh[4:1],D1/A1f/D2,
  {24}1,2x,3x,7,6x,5x,1,2x,3x,7,6x,5x,{4}1bh[4:1],D8/A8f/D1,
  {24}8,7x,6x,2,3x,4x,8,7x,6x,2,3x,4x,{4}8bh[4:1],
  {24}1,2x,3x,6,5x,4x,2,3x,4x,7,6x,5x,3,4x,5x,8,7x,6x,{4}1b,
  
  {16}4-8[8:1]/2,4/2,{8},5/4,6,{16}7/5-1[8:1],7/5,{8},5/4,3,
  {16}4-8[8:1]/2,4/2,{8},5/4,6,8h[16:1]/1h[16:1],8h[16:1]/1h[16:1],8/1,,
  {16}7/5-1[8:1],7/5,{8},5/4,3,{16}4-8[8:1]/2,4/2,{8},{4}5<4[4:1]/4,
  1b,,6x-8[8:1]b/3x-1[8:1]b,6b/3b,
  
  {8}8<5[8:1]/4h[16:1],4h[16:1],8>3[8:1]/4h[16:1],4h[16:1],8-4[8:1]/4h[16:1],4h[16:1],8/4,,
  5h[16:1]/1>4[8:1],5h[16:1],5h[16:1]/1<6[8:1],5h[16:1],5h[16:1]/1-5[8:1],5h[16:1],7xb/1,,
  8<5[8:1]/4h[16:1],4h[16:1],8>3[8:1]/4h[16:1],4h[16:1],8-4[8:1]/4h[16:1],4h[16:1],{4}8/4-2[8:1],
  7x-3[8:1]/4x,7b/1b,{16}E2f,E6f,E3f,E7f,E4f,,,,
  
  7x,5,6x,5,7,5x,6,5,8x,5,6,5,1b,,,,
  2x,4,3x,4,2,4x,3,4,1x,4,3,4,8b,,,,
  7x,5,6x,5,7,5x,6,5,8x,5,6,5,{4}1b,
  B3/B4/E4/A3/D4f/A4,Ch[4:1],{32}E1,E2,E3,E4,E5,E6,E7,E8,{1}E1f,
  {16},,4,5,4,5,4,5,4,5,4,5,4,5,4,5,{8}3x,,
  1/2h[4:1],,8,8,7h[4:1]/8,,1,1,1/2h[4:1],,8,8,7<4[8:1]/8,,1,1,
  1/3h[4:1],,8,8,6h[4:1]/8,,1,1,1/3h[4:1],,8,8,{4}6/8,6/5,
  7-4[8:1]/8,{8}7/1,1,1/2-5[8:1],,8/2,8,
  7-4[8:1]/8,,7/1,1,1/2-5[8:1],,8/2,8,
  6/8,6/8,1>6[4:1],1,{4}7,8-4[8:1],8w4[8:1],,
  {16}6x/2x,6x/2x,6x/2x,6x/2x,{1}6xs2[4:3]/2xs6[4:3],{4},
  {12}7,5,6,2,4,3,{4}7h[4:1],5b-8[8:1]*-2[8:1],5x,
  
  {16}3,5,4,4,3,5,4,4,{4}4-1[8:1]*-7[8:1],4x,
  {16}6,4,5,5,6,4,5,5,{4}5-8[8:1]*-2[8:1],5x,
  {16}3,5,4,4,3,5,4,4,4,4,4,4,3,5,4,4,4,4,4,4,3,5,4,4,{4}4-7[8:1]*-1[8:1],4x,
  {16}6,4,5,5,6,4,5,5,{4}5-8[8:1]*-2[8:1],5x,
  {16}3,5,4,4,3,5,4,4,{8}4,,
  7/3,{16}6,4,5,5,5,,6/2,,3,5,4,4,4,,
  {12}6xb,7xb,8xb,1xbs5[4:1],2xb,3xb,{2},
  {8}6h[1:1],5,5,5,5,5,5,4,
  3h[1:1],4,4,4,4,4,5,6,
  7h[1:1],6,6,6,6,5,4,3,
  2h[1:1],3,3,3,4,5,6,7,
  8h[8:1],7h[8:1],6h[8:1],5h[8:1],4h[8:1],3h[8:1],2b,,
  1h[8:1],2h[8:1],3h[8:1],4h[8:1],5h[8:1],6h[8:1],7b,,
  {16}8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1,
  {8}8b,,7-5[8:1]/3-5[8:1],8/2,{4}7-1[8:1]/3-1[8:1],7b/3b,
  {8}1/2,1/2,4/3,6/5,7/8,7/8,6/5,4/3,
  {16}3,5,3,5,4,6,4,6,{4}5v2[8:1],6/5,
  
  {16}3,5,3,5,1,5,1,5,3,5,3,5,1,5,1,5,
  3,5,3,5,1,5,1,5,7,5,7,5,1,5,1xh[8:1],,
  6,4,6,4,8,4,8,4,6,4,6,4,8,4,8,4,
  6,4,6,4,8,4,8,4,2b,4b,2b,4b,{4}8b,
  2-6[8:1],5-2[8:1]/2,5/1-3-5[8:1],6-1[8:1]/1,
  6/4-2-8[8:1],{16}7x-2[8:1],7x,,,7/3,,,4,{8}4,
  1/2,4q8[8:1]/3,5/2,4/3,{32},,1,2,{16}3,6,,7/4,{8}7/4,5/2,
  8b,,6-8[8:1]/2-8[8:1],5/3,6-4[8:1]/2-4[8:1],,6b/2b,,
  
  {16}3,5,3,5,1,5,1,5,7,5,7,5,1,5,1,5,
  3,5,3,5,1,5,1,5,7,5,7,5,1,5,1xh[8:1],,
  6,4,6,4,8,4,8,4,2,4,2,4,8,4,8,4,
  6,4,6,4,{4}5p4[4:1],C,,
  1b-7[8:1]b/2b-4[8:1]b,1b-5[8:1]b/2b-6[8:1]b,1b/2b,A1/D2f/A2/A3/D4f/A4/E2/E4/B1/B2/B3/B4,
  7b-5[8:1]b/8b-2[8:1]b,7b-3[8:1]b/8b-4[8:1]b,7b/8b,A8/D8f/A7/A6/D6f/A5/E8/E6/B8/B7/B6/B5,
  1/2,{16}4/3,,5,5,6,6,7,7,{32}8,1,2,3,4,5,6,7,
  {4}8,Ch[4:1],{32}D1,D8,D7,D6,D5,D4,D3,D2,{12}D1f,,,,,,,,,
  A4,,D5,,A5,,`

line = line.replace(/\s/g, "")

const ma2 = []
let measure = 0
let duration = 0
let lineObjectsArray = []

createNotesObjects()

// Main
lineObjectsArray.forEach((object) => {
  const rhythm = object.rhythm
  const notes = object.notes
  const pauses = object.pauses

  for (let i = 0; i < notes.length; i++) {
    // Split notes in same duration and check note type
    const noteArray = notes[i].split("/")
    noteArray.forEach((n) => {
      console.log(n)
      checkNoteType(n)
    })

    // add duration and measures
    duration += (384 / rhythm) * pauses[i].length
    if (duration > 384) {
      measure += Math.floor(duration / 384)
      duration = duration % 384
    }
  }
})

console.log(ma2)
console.log(measure, duration)
createCopyTable()

// Create objects of notes => {rhythm, notes, pause}
function createNotesObjects() {
  let lineArray = line.split("{")
  lineArray.shift()
  lineArray = lineArray.map((string) => string.replace("\n", ""))

  lineArray.forEach((string) => {
    const splitRhythm = string.split("}") // ["rhythm", "notes"]
    const rhythm = parseInt(splitRhythm[0])
    const pauses = splitRhythm[1]
      .split(/[^\,]+/)
      .filter((element) => element !== "")
    let notes = splitRhythm[1]
      .split(",")
      .filter((element) => element.trim() !== "") // [] if no notes

    if (notes.length != pauses.length) {
      notes.unshift("")
    }

    lineObjectsArray.push({
      rhythm: rhythm,
      pauses: pauses,
      notes: notes,
    })
  })
}

// check note type
function checkNoteType(n) {
  // ""
  if (n.length == 0) return

  // Single note
  if (/^\d+$/.test(n)) singleNote(n) // single note
  else if (/^[1-8][bx]*$/.test(n)) singleNote(n) // with bx or b or x
  // touch
  else if (
    n.includes("A") ||
    n.includes("B") ||
    n.includes("D") ||
    n.includes("E")
  )
    touch(n)
  // touch hold
  else if (n.includes("C")) touchC(n)
  // hold
  else if (n.includes("h")) hold(n)
  // slide
  else if (n.includes("*")) asteriskSlide(n)
  else if (getSlideNumber(n).length > 2) longSlide(n)
  else if (n.includes("w")) slide(n, "w")
  else if (n.includes("-")) slide(n, "-")
  else if (n.includes(">")) slide(n, ">")
  else if (n.includes("<")) slide(n, "<")
  else if (n.includes("v")) slide(n, "v")
  else if (n.includes("z")) slide(n, "z")
  else if (n.includes("s")) slide(n, "s")
  else if (n.includes("qq")) slide(n, "qq")
  else if (n.includes("q")) slide(n, "q")
  else if (n.includes("p")) slide(n, "p")
}

// only use for count number of slides
function getSlideNumber(n) {
  const numbers = n.match(/\d+/g)
  const result = numbers.map(Number)
  result.splice(-2)
  return result
}

function checkSlideNotation(slide, startNote) {
  if (slide == "w") return "SF_"
  if (slide == "-") return "SI_"
  if (slide == "v") return "SV_"
  if (slide == "qq") return "SXR"
  if (slide == "q") return "SUR"
  if (slide == "p") return "SUL"
  if (slide == "z") return "SSR"
  if (slide == "s") return "SSL"


  if (slide == ">") {
    if (startNote == 6 || startNote == 7 || startNote == 0 || startNote == 1)
      return "SCR"
    else return "SCL"
  }
  if (slide == "<") {
    if (startNote == 6 || startNote == 7 || startNote == 0 || startNote == 1)
      return "SCL"
    else return "SCR"
  }
}

function asteriskSlide(n) {
  // 1<6[8:1]*>4[8:1]
  // split the two slides
  const initialPosition = n[0] - 1
  const splitSlides = n.split("*") // ["1<6[8:1]", ">4[8:1]"]
  const firstSlide = splitSlides[0]

  if (firstSlide.includes("w")) slide(firstSlide, "w")
  else if (firstSlide.includes("-")) slide(firstSlide, "-")
  else if (firstSlide.includes(">")) slide(firstSlide, ">")
  else if (firstSlide.includes("<")) slide(firstSlide, "<")
  else if (firstSlide.includes("v")) slide(firstSlide, "v")
  else if (firstSlide.includes("qq")) slide(firstSlide, "qq")
  else if (firstSlide.includes("q")) slide(firstSlide, "q")
  else if (firstSlide.includes("p")) slide(firstSlide, "p")
  else if (firstSlide.includes("z")) slide(firstSlide, "z")
  else if (firstSlide.includes("s")) slide(firstSlide, "s")

  const secondSlideNotation = splitSlides[1].split("[")[0].split(/[0-8]/)[0]
  const secondSlideEnd =
    parseInt(splitSlides[1].split("[")[0].split(/[-<>pqwsz^v]/)[1]) - 1

  const splitDuration = splitSlides[1].split("[")[1]
  const splitRhythm = splitDuration.split(":")
  const getDuration =
    parseInt(splitRhythm[1]) * (384 / parseInt(splitRhythm[0]))

  let slideType = "NM"
  if (secondSlideNotation == "w") slideType += "SF_"
  if (secondSlideNotation == "-") slideType += "SI_"
  if (secondSlideNotation == "v") slideType += "SV_"
  if (secondSlideNotation == "qq") slideType += "SXR"
  if (secondSlideNotation == "q") slideType += "SUR"
  if (secondSlideNotation == "p") slideType += "SUL"
  if (secondSlideNotation == "z") slideType += "SSR"
  if (secondSlideNotation == "s") slideType += "SSL"

  if (secondSlideNotation == ">") {
    if (
      initialPosition == 6 ||
      initialPosition == 7 ||
      initialPosition == 0 ||
      initialPosition == 1
    )
      slideType += "SCR"
    else slideType += "SCL"
  }
  if (secondSlideNotation == "<") {
    if (
      initialPosition == 6 ||
      initialPosition == 7 ||
      initialPosition == 0 ||
      initialPosition == 1
    )
      slideType += "SCL"
    else slideType += "SCR"
  }

  ma2.push([
    slideType,
    measure,
    duration,
    initialPosition,
    96,
    getDuration,
    secondSlideEnd,
    "",
  ])
}

function longSlide(n) {
  let noteAndSlideNotation = n.split("[")[0] // 1bx-5pp3-5-7-6bx
  const splitDuration = n.split("[")[1]
  const splitRhythm = splitDuration.split(":")
  const getDuration =
    parseInt(splitRhythm[1]) * (384 / parseInt(splitRhythm[0]))

  let slideMeasure = measure
  let slideDuration = duration

  // get slide notations
  let result = noteAndSlideNotation.split(/[0-8]/)
  for (let i = 0; i < result.length; i++) {
    result[i] = result[i].replace("b", "")
    result[i] = result[i].replace("x", "")
  }
  const slideNotations = result.filter((item) => item !== "") // ["-", "pp", "-", "-", "-"]

  // get taps string (with "b", "x")
  result = noteAndSlideNotation.split(/[-<>pqswz^v]/)
  const noteArr = result.filter((item) => item !== "") // ["1bx", "5", "3", "5", "7", "6"]
  const startEndNoteArr = noteArr
    .slice(0, -1)
    .map((item, index) => [item, noteArr[index + 1]])
  // [["1bx", "5"], [5, 3], [3, 5], [5, 7], [7, 6]]

  const numberOfSlides = noteArr.length - 1
  const dividedDuration = getDuration / numberOfSlides

  if (n.split("]")[1].includes("b")) noteArr[noteArr.length - 1] += "b"

  // Create table
  let noteType = "NMSTR"
  if (noteArr[0].includes("b") && noteArr[0].includes("x")) noteType = "BXSTR"
  else if (noteArr[0].includes("b")) noteType = "BRSTR"
  else if (noteArr[0].includes("x")) noteType = "EXSTR"

  ma2.push([
    noteType,
    measure,
    duration,
    parseInt(noteArr[0]) - 1,
    "",
    "",
    "",
    "",
  ])

  let slideType = "NM"
  const lastSlide = noteArr[noteArr.length - 1]
  if (lastSlide.includes("b")) slideType = "BR"

  const initialNote = parseInt(startEndNoteArr[0][0]) - 1
  const firstSlidePosition = parseInt(startEndNoteArr[0][1]) - 1

  ma2.push([
    slideType + checkSlideNotation(slideNotations[0], parseInt(noteArr[0]) - 1),
    measure,
    duration,
    initialNote,
    96,
    dividedDuration,
    firstSlidePosition,
    "",
  ])

  slideDuration += 96 + dividedDuration
  if (slideDuration > 384) {
    slideMeasure += Math.floor(slideDuration / 384)
    slideDuration = slideDuration % 384
  }

  for (let i = 1; i < startEndNoteArr.length; i++) {
    const startNote = parseInt(startEndNoteArr[i][0]) - 1
    const endNote = parseInt(startEndNoteArr[i][1]) - 1

    ma2.push([
      "CN" + checkSlideNotation(slideNotations[i], startNote),
      slideMeasure,
      slideDuration,
      startNote,
      0,
      dividedDuration,
      endNote,
      "",
    ])
    slideDuration += dividedDuration
    if (slideDuration > 384) {
      slideMeasure += Math.floor(slideDuration / 384)
      slideDuration = slideDuration % 384
    }
  }
}

// Create table
function slide(n, slideNotation) {
  // slide type
  let slideType = "NM"

  const splitSlideNotation = n.split(slideNotation) // ["1", "5b[8:1]"]
  const position = splitSlideNotation[0] // "1"
  const splitDuration = splitSlideNotation[1].split("[") // ["5b", "8:1]"] or may have "8:1]b"
  const splitRhythm = splitDuration[1].split(":")
  const getDuration =
    parseInt(splitRhythm[1]) * (384 / parseInt(splitRhythm[0]))
  const parsedPosition = parseInt(position) - 1

  let noteType = "NMSTR"
  if (position.includes("b") && position.includes("x")) noteType = "BXSTR"
  else if (position.includes("b")) noteType = "BRSTR"
  else if (position.includes("x")) noteType = "EXSTR"

  ma2.push([noteType, measure, duration, parsedPosition, "", "", "", ""])

  if (splitDuration[0].includes("b") || splitDuration[1].includes("b"))
    slideType = "BR"

  if (slideNotation == "w") slideType += "SF_"
  if (slideNotation == "-") slideType += "SI_"
  if (slideNotation == "v") slideType += "SV_"
  if (slideNotation == "qq") slideType += "SXR"
  if (slideNotation == "q") slideType += "SUR"
  if (slideNotation == "p") slideType += "SUL"
  if (slideNotation == "z") slideType += "SSR"
  if (slideNotation == "s") slideType += "SSL"

  if (slideNotation == ">") {
    if (
      parsedPosition == 6 ||
      parsedPosition == 7 ||
      parsedPosition == 0 ||
      parsedPosition == 1
    )
      slideType += "SCR"
    else slideType += "SCL"
  }
  if (slideNotation == "<") {
    if (
      parsedPosition == 6 ||
      parsedPosition == 7 ||
      parsedPosition == 0 ||
      parsedPosition == 1
    )
      slideType += "SCL"
    else slideType += "SCR"
  }

  ma2.push([
    slideType,
    measure,
    duration,
    parsedPosition,
    96,
    getDuration,
    parseInt(splitDuration[0]) - 1,
    "",
  ])
}
function touch(n) {
  const noteType = "NMTTP"
  const touchArea = n[0]
  const position = n[1] - 1
  const flash = n.includes("f") ? 1 : 0
  ma2.push([noteType, measure, duration, position, touchArea, flash, "M1", ""])
}

function touchC(n) {
  const flash = n.includes("f") ? 1 : 0
  const touchType = n.includes("h") ? "THO" : "TTP"
  const noteType = "NM" + touchType

  let centerTouchNote = [noteType, measure, duration, 0, "C", flash, "M1", ""]

  if (touchType === "THO") {
    const splitTouchHold = n.split("h")
    const regex = /(\d+)/g
    const matches = [...splitTouchHold[1].matchAll(regex)]
    const numbers = matches.map((match) => match[1])

    const rhythm = (numbers[1] * 384) / numbers[0]
    centerTouchNote.splice(4, 0, rhythm)
  }
  ma2.push(centerTouchNote)
}

function singleNote(n) {
  const position = parseInt(n) - 1
  let noteType = "NMTAP"
  if (n.includes("b") && n.includes("x")) {
    noteType = "BXTAP"
  } else if (n.includes("b")) {
    noteType = "BRTAP"
  } else if (n.includes("x")) {
    noteType = "EXTAP"
  }
  ma2.push([noteType, measure, duration, position, "", "", "", ""])
}

function hold(n) {
  let noteType = "NMHLD"
  const splitHold = n.split("h")
  const regex = /(\d+)/g
  const matches = [...splitHold[1].matchAll(regex)]
  const numbers = matches.map((match) => match[1])

  const position = parseInt(splitHold[0]) - 1
  const holdDuration = (parseInt(numbers[1]) * 384) / parseInt(numbers[0])

  if (n.includes("b") && n.includes("x")) {
    noteType = "BXHLD"
  } else if (n.includes("b")) {
    noteType = "BRHLD"
  } else if (n.includes("x")) {
    noteType = "EXHLD"
  }

  const holdNote = [
    noteType,
    measure,
    duration,
    position,
    holdDuration || 0,
    "",
    "",
    "",
  ]
  ma2.push(holdNote)
}

function createCopyTable() {
  let table = ""
  ma2.map((row) => {
    row.map((value) => {
      table += value + "\t"
    })
    table += "\n"
  })
  console.log(table)
}

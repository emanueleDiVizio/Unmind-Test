const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
];


export default (state) => {
  var d = new Date()
  console.log(state.comment)
  return {
    day: d.getDate(),
    month: monthNames[d.getMonth()],
    time: d.getHours() + ":" + d.getMinutes(),
    feelings: state.feeling.value,
    comment: state.comment.value,
    mood: state.mood.value
  }

}

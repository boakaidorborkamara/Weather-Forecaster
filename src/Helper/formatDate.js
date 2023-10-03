function formatDate(user_date) {
  // create a date Object using the new keyword
  let new_date = new Date(user_date);

  let week_days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

  let months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  let test_obj = { day: new_date.getDate() };
  console.log("date_obj", test_obj);
  //   Get needed info from the date object and make them readable
  let day = week_days[new_date.getDay()];
  let date = new_date.getDate();
  let month = months[new_date.getMonth()];
  let year = new_date.getFullYear();

  let readale_date = `${day}, ${date} ${month} `;

  return readale_date;
}

export default formatDate;

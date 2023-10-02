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

  //   Get needed info from the date object and make them readable
  let day = week_days[new_date.getDate()];
  let date = new_date.getDate();
  let month = months[new_date.getMonth()];
  let year = new_date.getFullYear();

  let readale_date = `${day}, ${month} ${date}, ${year}`;

  return readale_date;
}

export default formatDate;

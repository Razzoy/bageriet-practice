

export function convertTimeStampToDate(timestamp) {

    const arrayMonths = [
        "jan",
        "feb",
        "mar",
        "apr",
        "maj",
        "jun",
        "jul",
        "aug",
        "sep",
        "oct",
        "nov",
        "dec",
      ];

    let date = new Date(timestamp * 1000);
    let day = date.getDate();
    let month = date.getMonth();
    let monthName = arrayMonths[month]
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let year = date.getFullYear();
    let timeString = `${day}. ${monthName} kl. ${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes} ${year}`
    return timeString;
  }
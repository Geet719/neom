export default function formatEventDate(startDate, endDate) {
  const options = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const start = new Date(startDate).toLocaleString("en-US", options);
  const end = new Date(endDate).toLocaleString("en-US", options);

  return `${start} - ${end}`;
}


export  function formatEventShortDate(startDate, endDate) {
  const options = { month: "short", day: "numeric" };

  const start = new Date(startDate).toLocaleDateString("en-US", options);
  const end = new Date(endDate).toLocaleDateString("en-US", { day: "numeric" });

  return `${start}-${end}`;
}

export  function formatEventTime(startTime, endTime) {
  const options = { hour: "numeric", minute: "numeric", hour12: true };

  const start = new Date(startTime).toLocaleTimeString("en-US", options);
  const end = new Date(endTime).toLocaleTimeString("en-US", options);

  return `${start} : ${end}`;
}
  
export  function formatDate(dateString) {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
}


export function formatDobDate(isoString) {
  let date = new Date(isoString);
  return date.toLocaleDateString("en-GB"); 
}
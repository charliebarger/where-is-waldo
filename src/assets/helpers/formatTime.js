const FormatTime = (seconds) => {
  let hours = Math.floor(seconds / (60 * 60));
  var minutes = Math.floor(seconds / 60) - hours * 60;
  var seconds = seconds % 60;
  return (
    hours.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0")
  );
};

export default FormatTime;

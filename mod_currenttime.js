export function localTimeUK() {
  const now = new Date();
  const options = {
    timeZone: 'Europe/London',
    hour: '2-digit',
    minute: '2-digit',
    //second: '2-digit',
    hour12: false // Use 24-hour format
  };
  return now.toLocaleTimeString('en-GB', options);
}

// Example usage:
console.log(localTimeUK());

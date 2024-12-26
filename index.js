function updateClock() {
    const timeElement = document.getElementById('time');
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const currentDay = new Date().getDay();
    
    // Highlight the current day
    days.forEach((day, index) => {
      const dayElement = document.getElementById(day);
      dayElement.classList.toggle('active', index === currentDay);
    });
  
    // Update the time with hours, minutes, and seconds
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    timeElement.innerHTML = `${hours}:${minutes}:<span>${seconds}</span>`;
  }
  
  // Initialize and update the clock every second
  updateClock();
  setInterval(updateClock, 1000);
    
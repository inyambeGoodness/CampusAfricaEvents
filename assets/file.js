document.getElementById('nav-btn1').addEventListener('click', function() {
  // Get the target element
  const targetElement = document.getElementById('links-1');

  // Scroll to the target element
  targetElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
});

document.getElementById('nav-btn2').addEventListener('click', function() {
    // Get the target element
    const targetElement = document.getElementById('links-1');
  
    // Scroll to the target element
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  });
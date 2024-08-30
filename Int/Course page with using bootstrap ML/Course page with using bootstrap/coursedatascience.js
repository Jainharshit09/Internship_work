document.getElementById('more-languages').addEventListener('click', function() {
    var allLanguages = document.getElementById('all-languages');
    if (allLanguages.style.display === 'none') {
      allLanguages.style.display = 'block';
      this.textContent = '-10 less';
    } else {
      allLanguages.style.display = 'none';
      this.textContent = '+10 more';
    }
  });

document.getElementById("toggleButton").addEventListener("click", function() {
    const description = document.getElementById("description");
    if (description.style.maxHeight === "none") {
        description.style.maxHeight = "100px"; // or the height you prefer
        this.textContent = "Show more";
    } else {
        description.style.maxHeight = "none";
        this.textContent = "Show less";
    }
});






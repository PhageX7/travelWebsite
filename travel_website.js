const searchBtn = document.getElementById("search-btn");
let displayResults = document.getElementById("recommendations");
const properSearch = ["beach", "temple", "country"];
let searchInput;

function searchQuery() {
    
    var searchParam = document.getElementById('searchInput').value.toLowerCase();

    if(searchParam !== "")
    {
        searchInput = "";

        for(let query of properSearch){
            if(query === searchParam){
                searchInput = query;
            }
        }

        if(searchInput !== "")
        {
            displayContents(searchInput);
        }
        else {
            alert("No query matches found");
        }
    }
    else {
        alert("Search was 'EMPTY'"); 
    }
}

function displayContents(inputs) {
    if(inputs === 'beach')
    {
        displayResults.innerHTML = `<h2>Beach Recommendations</h2><br>
                <section class="beach-imgs">
                    <div>
                        <figcaption>Beach Osaka</figcaption>
                        <img class="beach_img" src="./images/beach1.jpg">
                    </div>
                    <div>
                        <figcaption>Beach Utilisse</figcaption>
                        <img class="beach_img" src="./images/beach2.jpg">
                    </div>
                </section>`;
    }
    if(inputs === 'temple')
    {
        displayResults.innerHTML = `<h2>Temple Recommendations</h2><br>
                <section  class="temple-imgs">
                    <div>
                        <figcaption>Temple Topet</figcaption>
                        <img class="temp_img" src="./images/temple1.jpg">
                    </div>
                    <div>
                        <figcaption>Temple Jurka</figcaption>
                        <img class="temp_img" src="./images/temple2.jpg">
                    </div>
                </section>    `
    }
    if(inputs === 'country')
    {
        displayResults.innerHTML = `<h2>Country Recommendations</h2><br>
                <section  class="count-imgs">
                    <div>
                        <figcaption>Canada</figcaption>
                        <img class="count_img" src="./images/canada.jpg">
                    </div>
                    <div>
                        <figcaption>Portugal</figcaption>
                        <img class="count_img" src="./images/portugal.jpg">
                    </div>
                </section>    `
    }
}

/* document.getElementById('email-submit').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    const subject = `Message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
}); */

searchBtn.addEventListener('click', searchQuery);
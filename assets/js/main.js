let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 50) {
        header.classList.add("hidden");
    } else {
        header.classList.remove("hidden");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});

document.addEventListener("DOMContentLoaded", function () {
    let isSubpage = window.location.pathname.includes("/pages/");

    document.querySelector("header").innerHTML = `
        <nav>
            <img src="${isSubpage ? "../" : ""}assets/img/icon/ev-logo.png" 
                 width="48px" 
                 alt="Logo"  
                 onclick="window.location.href='${isSubpage ? "../" : ""}index.html'"> 
            <a href="${isSubpage ? "../" : ""}index.html">Home</a>
            <a href="${isSubpage ? "" : "pages/"}about.html">About</a>
            <a href="${isSubpage ? "" : "pages/"}services.html">Services</a>
            <a href="${isSubpage ? "" : "pages/"}blog.html">Blog</a>
            <a href="${isSubpage ? "" : "pages/"}gallery.html">Gallery</a>
        </nav>
    `;
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#main-footer").innerHTML = `
        <div id="footer-logo">
            <h1>Megalo Empire</h1>
            <h1 class="outline">Animal Clinic</h1>
            <h3>Weekend vet, because fur-ever matters</h3>
        </div>
        <div class="footer-info">
            <p>Follow us on social media</p>
            <div class="icons">
                <img src="../assets/img/icon/facebookw.png" alt="Facebook" onclick="window.open('https://www.facebook.com/MegaloEmpire/', '_blank')">
                    <img src="../assets/img/icon/instagramw.png" alt="Instagram" onclick="window.open('https://www.instagram.com/empiremegalo/')">
            </div>
            <p><strong>Address:</strong> Lot 8641, Ground Floor, Emart Commercial Centre, Jalan Rakawi Yusuf, 97000 Bintulu, Sarawak</p>
            <div class="hours">
                <p><strong>Open:</strong> Mon-Wed, Sat-Sun (9:30 AM–1 PM, 2–5:30 PM) | Closed Thu-Fri</p>
            </div>
            <p><strong>Phone:</strong> 017-380 7339</p>
        </div>
    `;
});


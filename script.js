/* =========================================
   NAVBAR
========================================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

});


/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("open");

});


document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("open");

  });

});


/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        revealObserver.unobserve(entry.target);

      }

    });

  },

  {
    threshold: 0.12
  }

);


revealElements.forEach((element) => {

  revealObserver.observe(element);

});


/* =========================================
   PRODUCT FILTER
========================================= */

const filterButtons =
  document.querySelectorAll(".filter");

const products =
  document.querySelectorAll(".product-card");


filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    filterButtons.forEach(btn => {

      btn.classList.remove("active");

    });

    button.classList.add("active");


    const filter =
      button.getAttribute("data-filter");


    products.forEach(product => {

      const category =
        product.getAttribute("data-category");


      if (
        filter === "all" ||
        category === filter
      ) {

        product.classList.remove("hidden");

        product.animate(

          [
            {
              opacity: 0,
              transform: "translateY(20px)"
            },

            {
              opacity: 1,
              transform: "translateY(0)"
            }
          ],

          {
            duration: 450,
            easing: "ease-out"
          }

        );

      } else {

        product.classList.add("hidden");

      }

    });

  });

});


/* =========================================
   PRODUCT MODAL
========================================= */

const modal =
  document.getElementById("productModal");

const modalTitle =
  document.getElementById("modalTitle");

const modalCategory =
  document.getElementById("modalCategory");

const modalDescription =
  document.getElementById("modalDescription");

const modalEnquire =
  document.getElementById("modalEnquire");


let selectedProduct = "";


function openProduct(
  title,
  category,
  description
) {

  selectedProduct = title;

  modalTitle.textContent = title;

  modalCategory.textContent = category;

  modalDescription.textContent = description;

  modal.classList.add("show");

  document.body.style.overflow = "hidden";

}


function closeProduct() {

  modal.classList.remove("show");

  document.body.style.overflow = "";

}


modal.addEventListener("click", (event) => {

  if (event.target === modal) {

    closeProduct();

  }

});


modalEnquire.addEventListener("click", () => {

  enquireProduct(selectedProduct);

  closeProduct();

});


/* =========================================
   WHATSAPP ENQUIRY
========================================= */

function enquireProduct(productName) {

  const phone = "919999999999";

  const message =
    `Hello, I am interested in "${productName}". Please share more details, price and availability.`;

  const whatsappURL =
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");

}


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
  document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {

  event.preventDefault();


  const name =
    document.getElementById("name").value.trim();

  const phone =
    document.getElementById("phone").value.trim();

  const email =
    document.getElementById("email").value.trim();

  const requirement =
    document.getElementById("requirement").value;

  const message =
    document.getElementById("message").value.trim();


  const whatsappNumber =
    "919999999999";


  const whatsappMessage =
`Hello, I would like to make an enquiry.

Name: ${name}
Phone: ${phone}
Email: ${email}
Requirement: ${requirement}

Message:
${message}`;


  const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


  window.open(
    whatsappURL,
    "_blank"
  );


  showToast(
    "Opening WhatsApp..."
  );


});


/* =========================================
   TOAST
========================================= */

function showToast(message) {

  const toast =
    document.getElementById("toast");

  toast.textContent = message;

  toast.classList.add("show");


  setTimeout(() => {

    toast.classList.remove("show");

  }, 3000);

}


/* =========================================
   ESCAPE KEY MODAL
========================================= */

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {

    closeProduct();

  }

});


/* =========================================
   SIMPLE IMAGE PARALLAX
========================================= */

const heroImage =
  document.querySelector(".hero-image");


window.addEventListener("scroll", () => {

  if (!heroImage) return;


  const scroll =
    window.scrollY;


  if (scroll < window.innerHeight) {

    heroImage.style.transform =
      `translateY(${scroll * 0.08}px)`;

  }

});

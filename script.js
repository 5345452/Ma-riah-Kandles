/* =========================================
   MA'RIAH KANDLES — WEBSITE INTERACTIONS
========================================= */

// Kenya WhatsApp number.
// Keep the country code; do not add +, spaces or dashes.
const WHATSAPP_NUMBER = "254741753917";

/* =========================================
   WHATSAPP FUNCTIONS
========================================= */

function openWhatsApp(message) {
    const text = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

    window.open(url, "_blank", "noopener,noreferrer");
}

// General enquiry buttons
function openGeneralWhatsApp() {
    openWhatsApp(
        "Hello Ma'riah Kandles! 💗 I'd love to enquire about your bouquets and gifts. Please share more details with me."
    );
}

// Individual bouquet enquiry buttons
function orderProduct(productName) {
    const message =
        `Hello Ma'riah Kandles! 🌸 I'm interested in ${productName} from your website.\n\n` +
        "Could you please let me know its price, availability and how I can order it?\n\n" +
        "Thank you! 💗";

    openWhatsApp(message);
}

// Custom bouquet and gift orders
function customOrder() {
    const message =
        "Hello Ma'riah Kandles! 💗 I'd like to enquire about a custom bouquet or gift.\n\n" +
        "Occasion:\n" +
        "Type of gift:\n" +
        "Flower colours or type:\n" +
        "Bouquet or gift size:\n" +
        "Budget (KSh):\n" +
        "Wrapping preference:\n" +
        "Extra gifts, if any:\n" +
        "Personal message:\n" +
        "Date needed:\n\n" +
        "Please help me create something beautiful! 🌷";

    openWhatsApp(message);
}

// Occasion enquiry buttons
function orderOccasion(occasion) {
    const message =
        `Hello Ma'riah Kandles! 🌸 I'm looking for a gift for a ${occasion.toLowerCase()}.\n\n` +
        "Could you recommend a suitable bouquet or gift and share the prices? 💗";

    openWhatsApp(message);
}

// Direct contact button
function contactWhatsApp() {
    openGeneralWhatsApp();
}

/* =========================================
   VIEW MORE BOUQUETS
========================================= */

function toggleMoreBouquets() {
    const extraBouquets = document.querySelectorAll(".extra-bouquet");
    const button = document.getElementById("viewMoreBouquets");

    if (!button || extraBouquets.length === 0) {
        return;
    }

    // If the first extra bouquet is hidden, reveal all extra bouquets.
    const shouldShow = extraBouquets[0].hidden;

    extraBouquets.forEach(function (bouquet) {
        bouquet.hidden = !shouldShow;
    });

    if (shouldShow) {
        button.textContent = "Show Fewer Bouquets ↑";
        button.setAttribute("aria-expanded", "true");
    } else {
        button.textContent = "View More Bouquets ↓";
        button.setAttribute("aria-expanded", "false");

        // Return the collection heading into view after collapsing.
        document.getElementById("shop")?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

/* =========================================
   MAKE FUNCTIONS AVAILABLE TO HTML BUTTONS
========================================= */

window.openWhatsApp = openWhatsApp;
window.openGeneralWhatsApp = openGeneralWhatsApp;
window.orderProduct = orderProduct;
window.customOrder = customOrder;
window.orderOccasion = orderOccasion;
window.contactWhatsApp = contactWhatsApp;
window.toggleMoreBouquets = toggleMoreBouquets;

/* =========================================
   PAGE SETUP AND MOBILE NAVIGATION
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    // Automatically update the copyright year.
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Mobile navigation menu.
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            // The CSS uses the "open" class for the mobile menu.
            const isOpen = navLinks.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Open navigation"
            );

            menuToggle.textContent = isOpen ? "✕" : "☰";
        });

        // Close the menu after the customer selects a link.
        navLinks.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("open");

                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Open navigation");
                menuToggle.textContent = "☰";
            });

        });
    }

});
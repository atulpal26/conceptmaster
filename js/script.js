// ConceptMaster.org configuration
const CONFIG = {
  ownerEmail: "atulpal88@icloud.com"
};

const form = document.getElementById("offerForm");
form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const amount = document.getElementById("amount").value.trim();
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent(`ConceptMaster.org Offer from ${name}`);
  const body = encodeURIComponent(
`Name: ${name}
Email: ${email}
Offer Amount: ${amount || "Not specified"}

Message:
${message || "No additional message."}`
  );

  window.location.href = `mailto:${CONFIG.ownerEmail}?subject=${subject}&body=${body}`;
});

const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav nav");
menu?.addEventListener("click", () => {
  const open = menu.getAttribute("aria-expanded") === "true";
  menu.setAttribute("aria-expanded", String(!open));
  nav?.classList.toggle("mobile-open", !open);
});

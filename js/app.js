// Event Listener for the Contact Form
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("contactForm");
    if (form) {
       form.addEventListener("submit", async (event) => {
          event.preventDefault();
 
          const formData = new FormData(form);
 
          const data = {
             name: formData.get("name"),
             email: formData.get("email"),
             message: formData.get("message")
          };
 
          // AJAX Request
          await makeAJAXCall("/api/contact", data);
       });
    }
 });
 
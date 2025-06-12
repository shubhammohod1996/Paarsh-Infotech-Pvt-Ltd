// Simple Like functionality
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".btn-outline-primary").forEach(btn => {
      btn.addEventListener("click", () => {
        btn.classList.toggle("btn-primary");
      });
    });
  });

  
  //messages

  document.addEventListener("DOMContentLoaded", function () {
    const chatForm = document.getElementById("chatForm");
    const chatInput = document.getElementById("chatInput");
    const chatBody = document.getElementById("chatBody");
  
    chatForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const message = chatInput.value.trim();
      if (message !== "") {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", "message-sent");
        messageDiv.textContent = message;
        chatBody.appendChild(messageDiv);
        chatInput.value = "";
  
        // Auto-scroll to bottom
        chatBody.scrollTop = chatBody.scrollHeight;
      }
    });
  });

  
//   notification 

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll("#notificationList .unread");
  
    items.forEach(item => {
      item.addEventListener("click", () => {
        item.classList.remove("unread");
      });
    });
  });

  
  //profile

  document.getElementById("editProfileForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("username").value;
    const bio = document.getElementById("bio").value;
  
    document.querySelector(".profile-info h2").textContent = name;
    document.querySelector(".profile-info .bio").textContent = bio;
  
    const modal = bootstrap.Modal.getInstance(document.getElementById("editProfileModal"));
    modal.hide();
  });
  
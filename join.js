/*==================================================
JOIN FORM TEMP HANDLER
==================================================*/

const joinForm = document.querySelector(".aijamii-form");

if (joinForm) {
  let joinStatus = joinForm.querySelector(".form-status");

  if (!joinStatus) {
    joinStatus = document.createElement("p");

    joinStatus.className = "form-status";

    joinStatus.setAttribute("role", "status");

    joinStatus.setAttribute("aria-live", "polite");

    joinForm.appendChild(joinStatus);
  }

  joinForm.addEventListener(
    "submit",

    async (event) => {
      event.preventDefault();

      const submitButton = joinForm.querySelector('button[type="submit"]');

      const formData = new FormData(joinForm);

      const payload = {
        type: "join",

        fullName: formData.get("fullName"),

        email: formData.get("email"),

        interest: formData.get("interest"),

        message: formData.get("message"),
      };

      submitButton.disabled = true;

      submitButton.firstChild.textContent = "Sending... ";

      joinStatus.textContent = "Sending your request...";

      joinStatus.className = "form-status loading";

      try {
        const response = await fetch("/api/enquiries", {
          method: "POST",

          headers: { "Content-Type": "application/json" },

          body: JSON.stringify(payload),
        });

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
          throw new Error(
            data.message || "Unable to submit your request. Please try again.",
          );
        }

        joinStatus.textContent =
          data.message || "Thank you for joining AIJAMII SAFARI!";

        joinStatus.className = "form-status success";

        joinForm.reset();
      } catch (error) {
        joinStatus.textContent =
          error.message || "Unable to submit your request. Please try again.";

        joinStatus.className = "form-status error";
      } finally {
        submitButton.disabled = false;

        submitButton.firstChild.textContent = "Join AIJAMII ";
      }
    },
  );
}

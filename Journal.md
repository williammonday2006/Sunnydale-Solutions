# Phase 1
I created the feedback form and used a JavaScript submit event listener to collect and log the input values. I used event.preventDefault() to stop the page from refreshing or navigating away, allowing JavaScript to handle the submission on the client side without a backend server.

# Phase 2
I collected validation errors in an array and displayed all errors together in red. This helps users identify and fix every problem at once instead of submitting the form repeatedly for individual errors.

# Phase 3
I used localStorage to save the reviewer's name after a valid submission and retrieve it when the page loads. Local storage is simpler than cookies for client-side data because JavaScript can access it directly without automatically sending it with HTTP requests. Cookies are useful when a server needs to receive stored information, such as a session identifier.

# Phase 4
I tested empty and invalid submissions, a valid review, and refreshing the page to verify local storage. The form displayed the expected errors and saved the reviewer's name after a successful submission. I learned that testing different input combinations helps identify validation problems and confirm that saved data persists between visits.
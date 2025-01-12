// JavaScript for handling form submissions and data transfer

document.addEventListener("DOMContentLoaded", () => {
    // Handle Submission Form
    const submissionForm = document.getElementById("ewaste-form");
    submissionForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent form refresh

        // Extract data from submission form
        const wasteType = document.getElementById("waste-type").value;
        const weight = document.getElementById("waste-weight").value;
        const amount = document.getElementById("waste-amount").value;

        // Save data to localStorage
        localStorage.setItem("wasteType", wasteType);
        localStorage.setItem("weight", weight);
        localStorage.setItem("amount", amount);

        // Redirect to the shipped order page
        window.location.href = "shipped-order.html";
    });

    // Populate Shipped Order Page
    if (window.location.pathname.includes("shipped-order.html")) {
        // Retrieve data from localStorage
        const wasteType = localStorage.getItem("wasteType");
        const weight = localStorage.getItem("weight");
        const amount = localStorage.getItem("amount");

        // Populate the details
        document.getElementById("eWasteType").textContent = wasteType;
        document.getElementById("weight").textContent = weight;
        document.getElementById("amount").textContent = amount;

        // Handle confirmation button
        document.querySelector(".confirm-button").addEventListener("click", () => {
            // Extract user information
            const userName = document.getElementById("userNameInput").value;
            const accountNumber = document.getElementById("accountNumberInput").value;
            const ifscCode = document.getElementById("ifscCodeInput").value;

            // Save user details to localStorage
            localStorage.setItem("userName", userName);
            localStorage.setItem("accountNumber", accountNumber);
            localStorage.setItem("ifscCode", ifscCode);

            // Redirect to the confirmation page
            window.location.href = "confirmation.html";
        });
    }

    // Populate Confirmation Page
    if (window.location.pathname.includes("confirmation.html")) {
        // Retrieve data from localStorage
        const userName = localStorage.getItem("userName");
        const accountNumber = localStorage.getItem("accountNumber");
        const ifscCode = localStorage.getItem("ifscCode");
        const wasteType = localStorage.getItem("wasteType");
        const weight = localStorage.getItem("weight");
        const amount = localStorage.getItem("amount");

        // Populate the confirmation details
        document.getElementById("confirmUserName").textContent = userName;
        document.getElementById("confirmAccountNumber").textContent = accountNumber;
        document.getElementById("confirmIfscCode").textContent = ifscCode;
        document.getElementById("confirmEWasteType").textContent = wasteType;
        document.getElementById("confirmWeight").textContent = weight;
        document.getElementById("confirmAmount").textContent = amount;

        // Handle new submission button
        document.querySelector(".new-submission-button").addEventListener("click", () => {
            // Clear localStorage and redirect to the submission page
            localStorage.clear();
            window.location.href = "submission.html";
        });
    }
});

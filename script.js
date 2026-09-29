document.getElementById('loanForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Data structured according to your model features
    const formData = {
        no_of_dependents: document.getElementById('no_of_dependents').value,
        education: document.getElementById('education').value,
        self_employed: document.getElementById('self_employed').value,
        income_annum: document.getElementById('income_annum').value,
        loan_amount: document.getElementById('loan_amount').value,
        loan_term: document.getElementById('loan_term').value,
        cibil_score: document.getElementById('cibil_score').value,
        residential_assets: document.getElementById('residential_assets').value,
        commercial_assets: document.getElementById('commercial_assets').value,
        luxury_assets: document.getElementById('luxury_assets').value,
        bank_assets: document.getElementById('bank_assets').value
    };

    console.log("Sending to Model:", formData);

    // Mock response logic (Replace with your API call)
    const resultDiv = document.getElementById('result');
    const title = document.getElementById('statusTitle');
    
    resultDiv.classList.remove('hidden', 'approved', 'rejected');
    
    // Simple logic based on model insights (CIBIL > 600 is usually approved)
    if (formData.cibil_score >= 600) {
        resultDiv.classList.add('approved');
        title.innerText = "Congratulations! Loan Approved";
    } else {
        resultDiv.classList.add('rejected');
        title.innerText = "Loan Rejected";
    }
});
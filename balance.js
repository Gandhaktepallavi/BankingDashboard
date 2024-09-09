 function deposit() {  
        
        
               alert ("Amount Deposited");  
            }  
            function withdraw() {  
        
        
        alert ("Amount get Withdrwal");  
     }  

     let balance = 1000;

     function updateBalanceDisplay() {
      const balanceDisplay = document.getElementById('balanceDisplay');
      balanceDisplay.textContent = `Current Balance: $${balance.toFixed(2)}`;
  }



     document.getElementById('depositButton').addEventListener('click', function() {
        const depositInput = document.getElementById('depositAmount');
        const depositAmount = parseFloat(depositInput.value);
        if (!isNaN(depositAmount) && depositAmount > 0) {
         balance += depositAmount; // Update the balance
         updateBalanceDisplay(); // Update the displayed balance
         depositInput.value = ''; // Clear the input field
     } else {
         alert('Please enter a valid amount to deposit.');
     }
 });

   
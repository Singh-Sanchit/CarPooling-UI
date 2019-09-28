document.getElementById("price").addEventListener('change', e => {
	      e.preventDefault();
        if(localStorage.getItem('distance') <= e.target.value){
            alert("Lots of other car owners are offering cheaper rides on that axis, so we suggest keeping the recommended price. Otherwise you risk getting fewer co-travellers.")
            document.getElementById("price").style.color = "red"
        }else{
            document.getElementById("price").style.color = "green"
        }
      })

document.getElementById("selectedSeat").addEventListener('change', e => {
	    e.preventDefault();
        if(e.target.value > 3){
            alert("You've reached the max. number of seats. This is limited so that car owners share their costs rather than making a profit, as doing so may affect your insurance coverage or contravene driving regulations.")
        }
      })

document.getElementById("returnJourneySelected").addEventListener('change', e => {
	    e.preventDefault();
        if(e.target.checked){
            document.getElementById("returnJourney").style.display = "flex";    
        }else{
            document.getElementById("returnJourney").style.display = "none";    
        }
      })
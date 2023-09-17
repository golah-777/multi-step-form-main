class Appfour{
  constructor(){
    this.chosenaddons = document.querySelector(".added-ons");
    this.title = document.querySelector(".title");
    this.money = document.querySelector(".money");
    this.total = document.querySelector(".amount");
    this.confirm = document.querySelector('.confirm');
    this.confirmMobile = document.querySelector('.confirm-mobile');

    this.displayNone = document.querySelector('.display-none');
    this.displayBlock = document.querySelector('.thank-you');
    this.bottom = document.querySelector('.bottom')

    this.chosenAddon =document.querySelector(".chosen-add-ons");
    this.localStoredData();
    this.displayYrMo();
    this.displayTotal();
    this.addEventListeners();
  }

  addEventListeners(){
    this.confirm.addEventListener('click',()=>{
      this.displayNone.style.display = 'none';
      this.displayBlock.style.display = 'inline';
      this.displayBlock.classList.add('padding')
    });

    this.confirmMobile.addEventListener('click',()=>{
      this.displayNone.style.display = 'none';
      this.displayBlock.style.display = 'inline';
      this.bottom.style.display = 'none';
    });
  }

  localStoredData(){
    const arcadeTitle = localStorage.getItem('arcadeTitle');
    const advancedTitle = localStorage.getItem('advancedTitle');
    const proTitle = localStorage.getItem('proTitle');

    const online = localStorage.getItem('online');
    const onlineOne = localStorage.getItem('onlineOne');

    const larger = localStorage.getItem('Larger');
    const largerTwo = localStorage.getItem('LargerTwo');

    const custom = localStorage.getItem('custom');
    const customThree = localStorage.getItem('customThree');

    const yearly = localStorage.getItem('yearly');


    if(arcadeTitle && !yearly){
      this.title.innerHTML = arcadeTitle;
      this.money.innerHTML = '$9/mo';
    }else if(arcadeTitle && yearly){
      this.title.innerHTML = arcadeTitle;
      this.money.innerHTML = '$90/yr';
    }
    
    if(advancedTitle && !yearly){
      this.title.innerHTML = advancedTitle;
      this.money.innerHTML = '$20/mo';
    }else if(advancedTitle && yearly){
      this.title.innerHTML = advancedTitle;
      this.money.innerHTML = '$120/yr';
    }
    
    if(proTitle && !yearly){
      this.title.innerHTML = proTitle;
      this.money.innerHTML = '$50/mo';
    } else if(proTitle && yearly){
      this.title.innerHTML = proTitle;
      this.money.innerHTML = '$150/yr';
    }




    if(online && onlineOne){
     this.chosenaddons.innerHTML +=`<div class="chosen-add-ons">
     <span>${online}</span>
     <span class="chosen-add-on-pricee amount-one"></span>
     </div>`
    } 

    if(larger && largerTwo){
      this.chosenaddons.innerHTML +=`<div class="chosen-add-ons">
      <span>${larger}</span>
      <span class="chosen-add-on-pricee amount-two"></span>
      </div>`
    } 

    if(custom && customThree){
      this.chosenaddons.innerHTML +=`<div class="chosen-add-ons">
      <span>${custom}</span>
      <span class="chosen-add-on-pricee amount-three"></span>
      </div>`
    }

  }

  displayYrMo(){
    const yearly = localStorage.getItem('yearly');
    const online = localStorage.getItem('online');
    const larger = localStorage.getItem('Larger');
    const custom = localStorage.getItem('custom');

    this.amountOne = this.chosenaddons.querySelector(".amount-one"); 
    this.amountTwo = this.chosenaddons.querySelector(".amount-two");
    this.amountThree = this.chosenaddons.querySelector(".amount-three");
     
    if(online && !yearly){
      this.amountOne.innerHTML = '$+1/mo';
    } else if (online && yearly){
     this.amountOne.innerHTML = '$+10/yr';
    }

    if(larger && !yearly){
      this.amountTwo.innerHTML = '$+2/mo';
    } else if (larger && yearly){
     this.amountTwo.innerHTML = '$+20/yr';
    }

    if(custom && !yearly){
      this.amountThree.innerHTML = '$+2/mo';
    } else if (custom && yearly){
     this.amountThree.innerHTML = '$+20/yr';
    }
  }

  displayTotal(){
    const yearly = localStorage.getItem('yearly');
    const online = localStorage.getItem('online');
    const larger = localStorage.getItem('Larger');
    const custom = localStorage.getItem('custom');


    
    if(online && larger && custom && !yearly){
      const amount1 = parseFloat(this.amountOne.textContent.replace(/\$/g, '').replace('/mo', ''));
      const amount2 = parseFloat(this.amountTwo.textContent.replace(/\$/g, '').replace('/mo', ''));
      const amount3 = parseFloat(this.amountThree.textContent.replace(/\$/g, '').replace('/mo', ''));
      const planAmounts = parseFloat(this.money.textContent.replace(/\$/g, '').replace('/mo', ''));

      const totalAmount = amount1 + amount2 + amount3 + planAmounts;
      this.total.innerHTML = `$${totalAmount}/mo`;
    }
    
    if(!online && larger && custom && !yearly){
      const amount2 = parseFloat(this.amountTwo.textContent.replace(/\$/g, '').replace('/mo', ''));
      const amount3 = parseFloat(this.amountThree.textContent.replace(/\$/g, '').replace('/mo', ''));
      const planAmounts = parseFloat(this.money.textContent.replace(/\$/g, '').replace('/mo', ''));

      const totalAmount =  amount2 + amount3 + planAmounts;
      this.total.innerHTML = `$${totalAmount}/mo`;
    }
    
    if(!online && !larger && custom && !yearly){
      const amount3 = parseFloat(this.amountThree.textContent.replace(/\$/g, '').replace('/mo', ''));
      const planAmounts = parseFloat(this.money.textContent.replace(/\$/g, '').replace('/mo', ''));

      const totalAmount = amount3 + planAmounts;
      this.total.innerHTML = `$${totalAmount}/mo`;
    } 
    
    if(!online && !larger && !custom && !yearly){
      const planAmounts = parseFloat(this.money.textContent.replace(/\$/g, '').replace('/mo', ''));
      const totalAmount = planAmounts;
      this.total.innerHTML = `$${totalAmount}/mo`;
    }
    
    if(online && !larger && !custom && !yearly){
      const amount1 = parseFloat(this.amountOne.textContent.replace(/\$/g, '').replace('/mo', ''));
      const planAmounts = parseFloat(this.money.textContent.replace(/\$/g, '').replace('/mo', ''));

      const totalAmount = amount1 + planAmounts;
      this.total.innerHTML = `$${totalAmount}/mo`;
    }
    
    if(online && larger && !custom && !yearly){
      const amount1 = parseFloat(this.amountOne.textContent.replace(/\$/g, '').replace('/mo', ''));
      const amount2 = parseFloat(this.amountTwo.textContent.replace(/\$/g, '').replace('/mo', ''));
      const planAmounts = parseFloat(this.money.textContent.replace(/\$/g, '').replace('/mo', ''));

      const totalAmount = amount1 + amount2 + planAmounts;
      this.total.innerHTML = `$${totalAmount}/mo`;
    }
    
    if(!online && larger && !custom && !yearly){
      const amount2 = parseFloat(this.amountTwo.textContent.replace(/\$/g, '').replace('/mo', ''));
      const planAmounts = parseFloat(this.money.textContent.replace(/\$/g, '').replace('/mo', ''));

      const totalAmount = amount2 + planAmounts;
      this.total.innerHTML = `$${totalAmount}/mo`;
    }
    
    if(online && !larger && custom && !yearly){
      const amount1 = parseFloat(this.amountOne.textContent.replace(/\$/g, '').replace('/mo', ''));
      const amount3 = parseFloat(this.amountThree.textContent.replace(/\$/g, '').replace('/mo', ''));
      const planAmounts = parseFloat(this.money.textContent.replace(/\$/g, '').replace('/mo', ''));
      
      const totalAmount = amount1 + amount3 + planAmounts;
      this.total.innerHTML = `$${totalAmount}/mo`;
    }



    if(online && larger && custom && yearly){
      const amount1 = parseFloat(this.amountOne.textContent.replace(/\$/g, '').replace('/mo', ''));
      const amount2 = parseFloat(this.amountTwo.textContent.replace(/\$/g, '').replace('/mo', ''));
      const amount3 = parseFloat(this.amountThree.textContent.replace(/\$/g, '').replace('/mo', ''));
      const planAmounts = parseFloat(this.money.textContent.replace(/\$/g, '').replace('/mo', ''));

      const totalAmount = amount1 + amount2 + amount3 + planAmounts;
      this.total.innerHTML = `$${totalAmount}/yr`;
    }
    
    if(!online && larger && custom && yearly){
      const amount2 = parseFloat(this.amountTwo.textContent.replace(/\$/g, '').replace('/mo', ''));
      const amount3 = parseFloat(this.amountThree.textContent.replace(/\$/g, '').replace('/mo', ''));
      const planAmounts = parseFloat(this.money.textContent.replace(/\$/g, '').replace('/mo', ''));

      const totalAmount =  amount2 + amount3 + planAmounts;
      this.total.innerHTML = `$${totalAmount}/yr`;
    }
    
    if(!online && !larger && custom && yearly){
      const amount3 = parseFloat(this.amountThree.textContent.replace(/\$/g, '').replace('/mo', ''));
      const planAmounts = parseFloat(this.money.textContent.replace(/\$/g, '').replace('/mo', ''));

      const totalAmount = amount3 + planAmounts;
      this.total.innerHTML = `$${totalAmount}/yr`;
    } 
    
    if(!online && !larger && !custom && yearly){
      const planAmounts = parseFloat(this.money.textContent.replace(/\$/g, '').replace('/mo', ''));
      const totalAmount = planAmounts;
      this.total.innerHTML = `$${totalAmount}/yr`;
    }
    
    if(online && !larger && !custom && yearly){
      const amount1 = parseFloat(this.amountOne.textContent.replace(/\$/g, '').replace('/mo', ''));
      const planAmounts = parseFloat(this.money.textContent.replace(/\$/g, '').replace('/mo', ''));

      const totalAmount = amount1 + planAmounts;
      this.total.innerHTML = `$${totalAmount}/yr`;
    }
    
    if(online && larger && !custom && yearly){
      const amount1 = parseFloat(this.amountOne.textContent.replace(/\$/g, '').replace('/mo', ''));
      const amount2 = parseFloat(this.amountTwo.textContent.replace(/\$/g, '').replace('/mo', ''));
      const planAmounts = parseFloat(this.money.textContent.replace(/\$/g, '').replace('/mo', ''));

      const totalAmount = amount1 + amount2 + planAmounts;
      this.total.innerHTML = `$${totalAmount}/yr`;
    }
    
    if(!online && larger && !custom && yearly){
      const amount2 = parseFloat(this.amountTwo.textContent.replace(/\$/g, '').replace('/mo', ''));
      const planAmounts = parseFloat(this.money.textContent.replace(/\$/g, '').replace('/mo', ''));

      const totalAmount = amount2 + planAmounts;
      this.total.innerHTML = `$${totalAmount}/yr`;
    }
    
    if(online && !larger && custom && yearly){
      const amount1 = parseFloat(this.amountOne.textContent.replace(/\$/g, '').replace('/mo', ''));
      const amount3 = parseFloat(this.amountThree.textContent.replace(/\$/g, '').replace('/mo', ''));
      const planAmounts = parseFloat(this.money.textContent.replace(/\$/g, '').replace('/mo', ''));

      const totalAmount = amount1 + amount3 + planAmounts;
      this.total.innerHTML = `$${totalAmount}/yr`;
    }

  }
}

const appFour = new Appfour()

class Apptwo{
  constructor(){
    this.addOnOne = document.querySelector('#add-on-one');
    this.checkOne = document.querySelector('.check-one');
    this.isCheckOne = false

    this.addOnTwo = document.querySelector('#add-on-two');
    this.checkTwo = document.querySelector('.check-two');
    this.isCheckTwo = false

    this.addOnThree = document.querySelector('#add-on-three');
    this.checkThree = document.querySelector('.check-three');
    this.isCheckThree = false;

    this.online = document.querySelector('.online');
    this.larger = document.querySelector('.larger');
    this.custom = document.querySelector('.custom');

    this.onlineOnOne = document.querySelector('.on-one');
    this.largerOnTwo = document.querySelector('.on-two');
    this.customOnThree = document.querySelector('.on-three');

    this.addEventListeners();
    this.displayData();
    this.displayYrMo();
  }

  displayYrMo(){
    const yearly = localStorage.getItem('yearly');

    if(yearly){
     this.onlineOnOne.innerText = '+$10/yr';

     this.largerOnTwo.innerText = '+20/yr';

     this.customOnThree.innerText = '+20/yr';
    } else if(!yearly){
      this.onlineOnOne.innerText = '+$1/mo';

      this.largerOnTwo.innerText = '+2/mo';
 
      this.customOnThree.innerText = '+2/mo';
    }
  }

  addEventListeners(){
    this.addOnOne.addEventListener('click', ()=>{
      this.isCheckOne = !this.isCheckOne
      this.isCheckOneTrue();
    });

    this.addOnTwo.addEventListener('click', ()=>{
      this.isCheckTwo = !this.isCheckTwo
      this.isCheckOneTrue();
    })

    this.addOnThree.addEventListener('click', ()=>{
      this.isCheckThree = !this.isCheckThree
      this.isCheckOneTrue();
    })
  }

  isCheckOneTrue(){
    if(this.isCheckOne){
      // this.addOnOne.classList.add('active-add-on');

      this.addOnOne.style.background = 'hsl(217, 100%, 97%)';
      this.addOnOne.style.border = '1px solid hsl(243, 100%, 62%)';
      localStorage.setItem('backgroundOnOne', 'hsl(217, 100%, 97%)');
      localStorage.setItem('borderOnOne', '1px solid hsl(243, 100%, 62%)');
  

      this.checkOne.style.background = 'hsl(243, 100%, 62%)';
      this.checkOne.style.border = '0';
      localStorage.setItem('checkedOne', "hsl(243, 100%, 62%)");
  
      
      localStorage.setItem('online', this.online.textContent);
      localStorage.setItem('onlineOne', this.onlineOnOne.textContent);
    }else {
      this.addOnOne.classList.remove('active-add-on');

      this.addOnOne.style.background = 'white';
      this.addOnOne.style.border = '1px solid #b6b8c5';

      this.checkOne.style.border = '1px solid hsl(231, 11%, 63%)';
      this.checkOne.style.background = 'white';
      localStorage.removeItem('online');
      localStorage.removeItem('onlineOne');

      localStorage.removeItem('backgroundOnOne');
      localStorage.removeItem('borderOnOne');
      localStorage.removeItem('checkedOne');
    }

    if(this.isCheckTwo){
      this.addOnTwo.classList.add('active-add-on');
      this.addOnTwo.style.background = 'hsl(217, 100%, 97%)';
      this.addOnTwo.style.border = '1px solid hsl(243, 100%, 62%)';
      localStorage.setItem('backgroundOnTwo', 'hsl(217, 100%, 97%)');
      localStorage.setItem('borderOnTwo', '1px solid hsl(243, 100%, 62%)');

      this.checkTwo.style.background = 'hsl(243, 100%, 62%)';
      this.checkTwo.style.border = '0';
      localStorage.setItem('checkedTwo', "hsl(243, 100%, 62%)");
  
      localStorage.setItem('Larger', this.larger.textContent);
      localStorage.setItem('LargerTwo', this.largerOnTwo.textContent);
    }else {
      this.addOnTwo.classList.remove('active-add-on');
      this.addOnTwo.style.background = 'white';
      this.addOnTwo.style.border = '1px solid #b6b8c5';
      this.checkTwo.style.border = '1px solid hsl(231, 11%, 63%)';
      this.checkTwo.style.background = 'white';
      localStorage.removeItem('Larger');
      localStorage.removeItem('LargerTwo');

      localStorage.removeItem('backgroundOnTwo');
      localStorage.removeItem('borderOnTwo');
      localStorage.removeItem('checkedTwo');
    }

    if(this.isCheckThree){
      this.addOnThree.classList.add('active-add-on');
      this.addOnThree.style.background = 'hsl(217, 100%, 97%)';
      this.addOnThree.style.border = '1px solid hsl(243, 100%, 62%)';
      localStorage.setItem('backgroundOnThree', 'hsl(217, 100%, 97%)');
      localStorage.setItem('borderOnThree', '1px solid hsl(243, 100%, 62%)');

      this.checkThree.style.background = 'hsl(243, 100%, 62%)';
      this.checkThree.style.border = '0';
      localStorage.setItem('checkedThree', "hsl(243, 100%, 62%)");
  
      localStorage.setItem('custom', this.custom.textContent);
      localStorage.setItem('customThree', this.customOnThree.textContent);
    }else {
      this.addOnThree.classList.remove('active-add-on');
      this.addOnThree.style.background = 'white';
      this.addOnThree.style.border = '1px solid #b6b8c5';
      this.checkThree.style.border = '1px solid hsl(231, 11%, 63%)';
      this.checkThree.style.background = 'white';
      localStorage.removeItem('custom');
      localStorage.removeItem('customThree');

      localStorage.removeItem('backgroundOnThree');
      localStorage.removeItem('borderOnThree');
      localStorage.removeItem('checkedThree');
    }

  }

  displayData(){
    const backgroundOnOne = localStorage.getItem('backgroundOnOne');
    const borderOnOne = localStorage.getItem('borderOnOne');
    const checkedOne = localStorage.getItem('checkedOne');

    const backgroundOnTwo = localStorage.getItem('backgroundOnTwo');
    const borderOnTwo = localStorage.getItem('borderOnTwo');
    const checkedTwo = localStorage.getItem('checkedTwo');

    const backgroundOnThree = localStorage.getItem('backgroundOnThree');
    const borderOnThree = localStorage.getItem('borderOnThree');
    const checkedThree = localStorage.getItem('checkedThree');

    if(backgroundOnOne && borderOnOne && checkedOne ){
      this.addOnOne.style.background = backgroundOnOne;
      this.addOnOne.style.border = borderOnOne;
      this.checkOne.style.background = checkedOne;
    }

    if(backgroundOnTwo && borderOnTwo && checkedTwo){
      this.addOnTwo.style.background = backgroundOnTwo;
      this.addOnTwo.style.border = borderOnTwo;
      this.checkTwo.style.background = checkedTwo;
    } 

    if(backgroundOnThree && borderOnThree && checkedThree ){
      this.addOnThree.style.background = backgroundOnThree;
      this.addOnThree.style.border = borderOnThree;
      this.checkThree.style.background = checkedThree;
    }
  }
}

const appTwo = new Apptwo();
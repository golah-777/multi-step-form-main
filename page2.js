class Apptwo{
  constructor(){
    this.toggle = document.querySelector('.checkbox-block');
    this.toggleBtn = document.querySelector('.toggle-btn');
    this.month = document.querySelector('.month');
    this.year = document.querySelector('.year');
    this.isToggled = false;
    this.arcadeClicked = false;
    this.advancedClicked = false;
    this.proClicked = false;
    this.planOne = document.querySelector('.planOne');
    this.planTwo = document.querySelector('.planTwo');
    this.planThree = document.querySelector('.planThree');
    this.arcadePlan = document.querySelector('.arcade');
    this.advancedPlan = document.querySelector('.advanced');
    this.proPlan = document.querySelector('.pro');

    this.arcadeTitle = document.querySelector('.arcade-title');
    this.advancedTitle = document.querySelector('.advanced-title');
    this.proTitle = document.querySelector('.pro-title');
   
    this.arcade = document.querySelector('#plan-one');
    this.advanced = document.querySelector('#plan-two');
    this.pro = document.querySelector('#plan-three');

   

    this.addEventListeners();
    this.displayClassList();
  }

  addEventListeners(){
    this.toggle.addEventListener('click',()=>{
      this.isToggled = !this.isToggled
      this.toggleFunction();
    });

    this.arcade.addEventListener('click',()=>{
      this.handleOptionClick('arcade');
    });

    this.advanced.addEventListener('click',()=>{
      this.handleOptionClick('advanced');
    });

    this.pro.addEventListener('click',()=>{
      this.handleOptionClick('pro');
    });
  }

  handleOptionClick(option) {
    if (option === 'arcade') {
      this.arcadeClicked = true;
      this.advancedClicked = false;
      this.proClicked = false;
    } else if (option === 'advanced') {
      this.arcadeClicked = false;
      this.advancedClicked = true;
      this.proClicked = false;
    } else if (option === 'pro') {
      this.arcadeClicked = false;
      this.advancedClicked = false;
      this.proClicked = true;
    }

    this.updateButtonState();
  }

  updateButtonState() {
    if (this.arcadeClicked) {
      // this.arcade.classList.add('active-plan');
      this.arcade.style.border = '1px solid hsl(243, 100%, 62%)';
      this.arcade.style.background = 'hsl(217, 100%, 97%)';
      localStorage.setItem('arcadeBorder', '1px solid hsl(243, 100%, 62%)');
      localStorage.setItem('arcadeBackground', 'hsl(217, 100%, 97%)');

      localStorage.removeItem('proBorder');
      localStorage.removeItem('advancedBorder');
      localStorage.removeItem('proBackground');
      localStorage.removeItem('advancedBackground');

      localStorage.setItem('arcadeTitle', this.arcadeTitle.textContent);
      localStorage.removeItem('advancedTitle');
      localStorage.removeItem('proTitle');

      localStorage.setItem('arcadeMoney', this.arcadePlan.textContent);
      localStorage.removeItem('advancedMoney');
      localStorage.removeItem('proMoney');
    } else {
      this.arcade.classList.remove('active-plan');
      this.arcade.style.border = '1px solid #b7b9c6';
      this.arcade.style.background = 'white';
    }

    if (this.advancedClicked) {
      // this.advanced.classList.add('active-plan');
      this.advanced.style.border = '1px solid hsl(243, 100%, 62%)';
      this.advanced.style.background = 'hsl(217, 100%, 97%)';
      localStorage.setItem('advancedBorder', '1px solid hsl(243, 100%, 62%)');
      localStorage.setItem('advancedBackground', 'hsl(217, 100%, 97%)');

      localStorage.removeItem('proBorder');
      localStorage.removeItem('arcadeBorder');
      localStorage.removeItem('proBackground');
      localStorage.removeItem('arcadeBackground');
      
      localStorage.setItem('advancedTitle', this.advancedTitle.textContent);
      localStorage.removeItem('arcadeTitle');
      localStorage.removeItem('proTitle');

      localStorage.setItem('advancedMoney', this.advancedPlan.textContent);
      localStorage.removeItem('arcadeMoney');
      localStorage.removeItem('proMoney');
    } else {
      this.advanced.classList.remove('active-plan');
      this.advanced.style.border = '1px solid #b7b9c6';
      this.advanced.style.background = 'white';
    }

    if (this.proClicked) {
      this.pro.classList.add('active-plan');
      this.pro.style.border = '1px solid hsl(243, 100%, 62%)';
      this.pro.style.background = 'hsl(217, 100%, 97%)';
      localStorage.setItem('proBorder', '1px solid hsl(243, 100%, 62%)');
      localStorage.setItem('proBackground', 'hsl(217, 100%, 97%)');

      localStorage.removeItem('advancedBorder');
      localStorage.removeItem('arcadeBorder');
      localStorage.removeItem('advancedBackground');
      localStorage.removeItem('arcadeBackground');
      

      localStorage.setItem('proTitle', this.proTitle.textContent);
      localStorage.removeItem('advancedTitle');
      localStorage.removeItem('arcadeTitle');

      localStorage.setItem('proMoney', this.proPlan.textContent);
      localStorage.removeItem('advancedMoney');
      localStorage.removeItem('arcadeMoney');
    } else {
      this.pro.classList.remove('active-plan');
      this.pro.style.border = '1px solid #b7b9c6';
      this.pro.style.background = 'white';
    }
  }

  toggleFunction(){
    if(this.isToggled){
      // this.toggleBtn.classList.add('year-toggle');
      this.toggleBtn.style.left = '24px';
      localStorage.setItem('yearly','24px');
      this.month.style.color = 'hsl(231, 11%, 63%)';
      this.year.style.color = 'hsl(213, 96%, 18%)';
      this.planOne.style.display = 'block';
      this.planTwo.style.display = 'block';
      this.planThree.style.display = 'block';

      this.arcadePlan.innerText = '$90/yr';
      this.advancedPlan.innerText = '$120/yr';
      this.proPlan.innerText = '$150/yr';

    } else {
      // this.toggleBtn.classList.remove('year-toggle');
      this.toggleBtn.style.left = '3px';
      localStorage.removeItem('yearly')
      this.month.style.color = 'hsl(213, 96%, 18%)';
      this.year.style.color = 'hsl(231, 11%, 63%)';
      this.planOne.style.display = 'none';
      this.planTwo.style.display = 'none';
      this.planThree.style.display = 'none';
      this.arcadePlan.innerText = '$9/mo';
      this.advancedPlan.innerText = '$12/mo';
      this.proPlan.innerText = '$15/mo';
    }
  }
 
  displayClassList(){
    const yearly = localStorage.getItem('yearly');

    const arcadeBackground = localStorage.getItem('arcadeBackground');
    const advancedBackground= localStorage.getItem('advancedBackground');
    const proBackground= localStorage.getItem('proBackground');

    const arcadeBorder = localStorage.getItem('arcadeBorder');
    const advancedBorder= localStorage.getItem('advancedBorder');
    const proBorder = localStorage.getItem('proBorder');

    if(yearly){
      this.toggleBtn.style.left = yearly;

      this.month.style.color = 'hsl(231, 11%, 63%)';
      this.year.style.color = 'hsl(213, 96%, 18%)';
      this.planOne.style.display = 'block';
      this.planTwo.style.display = 'block';
      this.planThree.style.display = 'block';

      this.arcadePlan.innerText = '$90/yr';
      this.advancedPlan.innerText = '$120/yr';
      this.proPlan.innerText = '$150/yr';
    } else {
      this.month.style.color = 'hsl(213, 96%, 18%)';
      this.year.style.color = 'hsl(231, 11%, 63%)';
      this.planOne.style.display = 'none';
      this.planTwo.style.display = 'none';
      this.planThree.style.display = 'none';
      this.arcadePlan.innerText = '$9/mo';
      this.advancedPlan.innerText = '$12/mo';
      this.proPlan.innerText = '$15/mo';
    }
      
    if(arcadeBackground){
      this.arcade.style.background = arcadeBackground;
    }

    if(advancedBackground){
     this.advanced.style.background = advancedBackground; 
    }

    if(proBackground){
     this.pro.style.background = proBackground; 
    }

    if(arcadeBorder){
      this.arcade.style.border = arcadeBorder;
    }

    if(advancedBorder){
     this.advanced.style.border= advancedBorder; 
    }

    if(proBorder){
     this.pro.style.border = proBorder; 
    }
  }

}

const appTwo = new Apptwo();
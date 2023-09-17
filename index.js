class App{
  constructor(){
    this.name = document.querySelector('.name');
    this.email = document.querySelector('.email');
    this.phoneNumber = document.querySelector('.number');
    this.errorName = document.querySelector('.error-name');
    this.errorEmail = document.querySelector('.error-email');
    this.errorNumber = document.querySelector('.error-number');
    this.nextPage = document.querySelector('.button');
    this.error =  document.querySelector('.error');

    this.addEventListeners()
  }

  addEventListeners(){
    this.nextPage.addEventListener('click', (e)=>{
      const email = this.email.value;
      const name = this.name.value;
      const number = this.phoneNumber.value;

      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;
      const isValidEmail = emailRegex.test(email);
      
      if(email =='' && name =="" && number ==''){
        e.preventDefault();
        this.errorName.style.display = 'inline';
        this.email.style.border = '1px solid hsl(354, 84%, 57%)';
        this.errorEmail.style.display = 'inline';
        this.name.style.border = '1px solid hsl(354, 84%, 57%)';
        this.errorNumber.style.display = 'inline';
        this.phoneNumber.style.border = '1px solid hsl(354, 84%, 57%)';
      } else if(email =='' && name =="" && !number==''){
        e.preventDefault();
        this.errorName.style.display = 'inline'
        this.errorEmail.style.display = 'inline'
        this.errorNumber.style.display = 'none'
        this.email.style.border = '1px solid hsl(354, 84%, 57%)';
        this.name.style.border = '1px solid hsl(354, 84%, 57%)';
        this.phoneNumber.style.border = '1px solid';
      }else if(email =='' && !name =="" && number==''){
        e.preventDefault();
        this.errorName.style.display = 'none'
        this.errorEmail.style.display = 'inline'
        this.errorNumber.style.display = 'inline'
        this.email.style.border = '1px solid hsl(354, 84%, 57%)';
        this.name.style.border = '1px solid';
        this.phoneNumber.style.border = '1px solid hsl(354, 84%, 57%)';
      }else if(!email =='' && name =="" && number==''){
        e.preventDefault();
        this.errorName.style.display = 'inline'
        this.errorEmail.style.display = 'none'
        this.errorNumber.style.display = 'inline'
        this.email.style.border = '1px solid';
        this.name.style.border = '1px solid hsl(354, 84%, 57%)';
        this.phoneNumber.style.border = '1px solid hsl(354, 84%, 57%)';
      }else if(!email =='' && !name =="" && number==''){
        e.preventDefault();
        this.errorName.style.display = 'none'
        this.errorEmail.style.display = 'none'
        this.errorNumber.style.display = 'inline'
        this.email.style.border = '1px solid ';
        this.name.style.border = '1px solid ';
        this.phoneNumber.style.border = '1px solid hsl(354, 84%, 57%)';
      }else if(!email =='' && name =="" && !number==''){
        e.preventDefault();
        this.errorName.style.display = 'inline'
        this.errorEmail.style.display = 'none'
        this.errorNumber.style.display = 'none'
        this.email.style.border = '1px solid';
        this.name.style.border = '1px solid hsl(354, 84%, 57%)';
        this.phoneNumber.style.border = '1px solid';
      }else if(email =='' && !name =="" && !number==''){
        e.preventDefault();
        this.errorName.style.display = 'none'
        this.errorEmail.style.display = 'inline'
        this.errorNumber.style.display = 'none'
        this.email.style.border = '1px solid hsl(354, 84%, 57%)';
        this.name.style.border = '1px solid';
        this.phoneNumber.style.border = '1px solid';
      }else if (isValidEmail && (!email =='' && !name =="" && !number=='')){
        this.errorName.style.display = 'none'
        this.errorEmail.style.display = 'none'
        this.errorNumber.style.display = 'none'
        this.email.style.border = '1px solid ';
        this.name.style.border = '1px solid ';
        this.phoneNumber.style.border = '1px solid ';
      }else if (!isValidEmail && (!email =='' && !name =="" && !number=='')){
        e.preventDefault();
        this.errorName.style.display = 'none'
        this.errorEmail.style.display = 'inline'
        this.errorNumber.style.display = 'none'
        this.email.style.border = '1px solid hsl(354, 84%, 57%)';
      }
    });
  }
}

const app = new App();
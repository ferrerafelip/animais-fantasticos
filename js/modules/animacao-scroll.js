export default class ScrollAnima{
  constructor(sections){
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;

    this.animaScroll = this.animaScroll.bind(this)
  }
  
  animaScroll(){
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionVisible = (sectionTop - this.windowMetade) < 0;
      if(sectionVisible){
        section.classList.add('ativo');
      }
      else if(section.classList.contains('ativo')){
        section.classList.remove('ativo');
      }
    })
  }

  init(){
    window.addEventListener('scroll', this.animaScroll);
  }
}
  
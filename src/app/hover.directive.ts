import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hinvHover]'
})
export class HoverDirective {

  @Input() color:string='red'

  constructor(private elRef:ElementRef,private rendrer:Renderer2) { }

  ngOnInit(){
    // this.elRef.nativeElement.style.backgroundColor =this.color
    this.rendrer.setStyle(this.elRef.nativeElement,'backgroundColor',this.color)
  }

  @HostListener('mouseenter')onMouseEnter(){
    this.rendrer.setStyle(this.elRef.nativeElement,'backgroundColor','blue')
  }

  @HostListener('mouseleave')onMouseLeave(){
    this.rendrer.setStyle(this.elRef.nativeElement,'backgroundColor','green')
  }


}

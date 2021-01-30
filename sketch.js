const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gameState=0;
var playButton;
var man1;
var rope1;
var bl1;
var bl2;
var bl3;
var bl4;
var button1,button2,button3;
var polygon1i;
var b1i
var gr
var bgi;
var bgi1,bgi2;
var score=0;
var string;
var flag=0
var flag1=0
var flag2=0


function setup(){
createCanvas(displayWidth,displayHeight-133);
engine = Engine.create();
world = engine.world;
man1 =new ropeman(70,height-80)
gr=new Ground(90,height-10,100,20)

}

//////
function draw(){
 Engine.update(engine);

 //
 
 if(gameState===0){
 background(51,255,153)
 textSize(35);
 text("PRESS ENTER TO START THE GAME",100,400);
 text("ROPEMATHS",200,50);
 
 }


 //
if(gameState===1){ 
  createCanvas(7500,displayHeight-133);

  background(255,102,102);
 
//buttons

 button1=createButton("2");
 button1.position(540,30)
 button1.style('color','red')
 button1.style('background-color','#b486fc')
 button1.size(70,40);

 button2=createButton("4");
 button2.position(840,30)
 button2.size(90,45);

 button3=createButton("5");
 button3.position(1140,30)
 button3.size(50,70);

 button4=createButton("6");
 button4.position(1440,30)
 button4.size(90,70);

 button5=createButton("16");
 button5.position(3000,30)
 button5.size(70,40);

 button6=createButton("19");
 button6.position(3400,30)
 button6.size(90,45);

 button7=createButton("15");
 button7.position(3800,30)
 button7.size(50,70);

 button8=createButton("11");
 button8.position(4200,30)
 button8.size(90,70);

 button9=createButton("33");
 button9.position(6000,30)
 button9.size(70,40);

 button10=createButton("25");
 button10.position(6400,30)
 button10.size(90,45);

 button11=createButton("30");
 button11.position(6800,30)
 button11.size(50,70);

 button12=createButton("38");
 button12.position(7200,30)
 button12.size(90,70);

 
 button13=createButton(0);
 button13.position(1840,30)
 button13.size(90,70);
 
 button14=createButton(0);
 button14.position(2240,30)
 button14.size(90,70);
 
 button15=createButton(0);
 button15.position(2640,30)
 button15.size(90,70);
 
 button16=createButton(0);
 button16.position(4550,30)
 button16.size(90,70);
 
 button17=createButton(0);
 button17.position(4850,30)
 button17.size(90,70);
 
 button18=createButton(0);
 button18.position(5150,30)
 button18.size(90,70);
 
 button19=createButton(0);
 button19.position(5450,30)
 button19.size(90,70);
 
//
 man1.display();
 
 gr.display();
 
 

 //
 fill("red")
 textSize(37)
 text(score,man1.body.position.x-10,man1.body.position.y+15)

 fill("blue")
 textSize(170)
 text("2+2=?",800,400)

 fill("yellow")
 textSize(170)
 text("7+9=?",3800,400)

 fill("green")
 textSize(170)
 text("25+19=?",6800,400)

 //
 this.button1.mousePressed(()=>{
   
   camera.position.x=mouseX
  string=new rope(man1.body,{x:mouseX,y:mouseY})
})

 this.button2.mousePressed(()=>{

 if(flag===0){
  string=new rope(man1.body,{x:mouseX,y:mouseY})
  score=score+1;
  flag=1;
 }
 
 })

 this.button3.mousePressed(()=>{
  string.fly();
  string=new rope(man1.body,{x:mouseX,y:mouseY})
 

})
this.button4.mousePressed(()=>{
 string.fly();
 string=new rope(man1.body,{x:mouseX,y:mouseY})
 
})

this.button5.mousePressed(()=>{
  if(flag1===0){
string.fly();
string=new rope(man1.body,{x:mouseX,y:mouseY})
score=score+1;
flag1=1
  }
})

this.button6.mousePressed(()=>{
  string.fly();
   camera.position.x=mouseX
   string=new rope(man1.body,{x:mouseX,y:mouseY})
  
 })

 this.button7.mousePressed(()=>{
  string.fly();
   string=new rope(man1.body,{x:mouseX,y:mouseY})
  
 })

 this.button8.mousePressed(()=>{
  string.fly();
   string=new rope(man1.body,{x:mouseX,y:mouseY})
  
 })

 this.button9.mousePressed(()=>{
  string.fly();
  string=new rope(man1.body,{x:mouseX,y:mouseY})
  
 })
 
 this.button10.mousePressed(()=>{
  string.fly();
  string=new rope(man1.body,{x:mouseX,y:mouseY})
  
 })

 
 this.button11.mousePressed(()=>{
  string.fly();
  string=new rope(man1.body,{x:mouseX,y:mouseY})
  
 })

 
 this.button12.mousePressed(()=>{
   if(flag2===0){
  string.fly();
  string=new rope(man1.body,{x:mouseX,y:mouseY})
  score=score+1;
  flag2=1;
   }
 })


 this.button13.mousePressed(()=>{
  string.fly();
  string=new rope(man1.body,{x:mouseX,y:mouseY})
  
 })

 this.button14.mousePressed(()=>{
  string.fly();
  string=new rope(man1.body,{x:mouseX,y:mouseY})
  
 })

 this.button15.mousePressed(()=>{
  string.fly();
  string=new rope(man1.body,{x:mouseX,y:mouseY})
  
 })

 this.button16.mousePressed(()=>{
  string.fly();
  string=new rope(man1.body,{x:mouseX,y:mouseY})
  
 })

 this.button17.mousePressed(()=>{
  string.fly();
  string=new rope(man1.body,{x:mouseX,y:mouseY})
  
 })

 this.button18.mousePressed(()=>{
 string.fly();
 string=new rope(man1.body,{x:mouseX,y:mouseY})
  
 })
 this.button19.mousePressed(()=>{

 string.fly();
 string=new rope(man1.body,{x:mouseX,y:mouseY})
  
 })


 if(string!==undefined){
   string.display();
 }
 
drawSprites();
}
  

} 
/////

    
function keyPressed(){
  if(keyCode===13){
    gameState=1;
 }
}



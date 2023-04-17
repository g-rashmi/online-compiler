window.onload = function(){
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/xcode");
    editor.session.setMode("ace/mode/c_cpp");
   }
   
   window.onload = function(){
    t = ace.edit("editor");
    t.setTheme("ace/theme/xcode");
    t.session.setMode("ace/mode/c_cpp");
   }
   
   
   function fun()
   {  
   
        document.getElementById("v").value = "";
    
   }   
   
   
   function copyText1()
   {
         
       var Text = document.getElementById("v");
   
       Text.select();
   
       navigator.clipboard.writeText(Text.value);
   
       document.getElementById("clipboard")
           .innerHTML = Text.value;
   } 
   
   
   
   function copyText2()
   {
         
       var Text = document.getElementById("t");
   
       Text.select();
   
       navigator.clipboard.writeText(Text.value);
   
       document.getElementById("clipboard")
           .innerHTML = Text.value;
   } 
   function changeLanguage(){
       let language = $('#languages').val();
   
       if(language == 'c' || language == 'cpp')
       {
           let cppcode ='#include <iostream>\n'+
    'using namespace std;\n'+
       'int main() {\n'+
           'cout<<"Hello World"; \n'+
           'return 0;\n'+
           '}\n'
        //   v.setValue(cppcode)
        document.getElementById('v').value=cppcode;
     }
           
       }
        if(language =='php'){
          
           editor.session.setMode("ace/mode/php");
        }
       else if(language =='py')
       editor.setValue("def execute(): \n\t for i in range(10):\n\t\t print i \nexecute()")
   
   
   function executeCode(){
       $.ajax({
           url: "../ide/app/compiler.php",
           method: "POST",
           data:{
               language: $('#languages').val(),
               code: editor.getSession().getValue()
           },
           success: function(response){
               $("#output").text(response);
           }
       }); 
   }
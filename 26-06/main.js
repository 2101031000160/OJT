function demoInternalAlert()
			{
				alert("Internal Alert.");
			}
			
			function demoInternalConfirm(){
				if(confirm("Are you sure..??")){
					alert("YESSS");
				}
				else{
					alert("NOOOO");
				}
			}
			function demoInternalPrompt(){
				var fName=prompt("Enter Firstname Here..");
				var lName=prompt("Enter Lastname Here..");
				alert(fName+" "+lName);
			}

			function bodyBGGreen(){
				document.body.style.backgroundColor="Green";
			}
			function divBGGray(){
				document.getElementById("D1").style.backgroundColor="Gray";
			}

			function divBGDynamic(){
				document.getElementById("D1").style.backgroundColor=prompt("Enter color name here..");
			}
			function bodyBGDynamic(){
				document.body.style.backgroundColor=prompt("Enter color name here..");
			}

			function bodyBGCP1(){
				document.body.style.backgroundColor=document.getElementById("CP1").value;
			}
			function divBGCP2(){
				document.getElementById("D1").style.backgroundColor=document.getElementById("CP2").value;
			}
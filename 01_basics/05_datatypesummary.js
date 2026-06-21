// primitive 
/*7 types ke : 1string
             2.Number
             3.boolean
             4.null
             5.undefined
             6.symbol
             7.bigint*/

             /*  non primitive
             jisko hum refrences bhi bolte hai
             Array
             Objects
             Functions


             java script dynamic hai yha static 
              In this, you do not need to specify the type of a variable (such as a number, string, or array) in advance. The type is determined automatically when the program runs, and you can store different types of data in the same variable.
              */
             const Score = 100
            
             const scoreValue = 100.3
             const isLoggedIn = false
             const outsideTemp = null
             let userEmail;
             const id = Symbol('1230')
             const anotherId = Symbol('1230')
             console.log(id==anotherId)

               const bigNumber =1234567899876543456
                const heros = ["shaktiman", "naagaraj","doga"];
                let myobj = {
                    name:"rakesh",
                    age:22
                }
                    const myFunction=function(){
                        console.log("Hello world");

                    }
                    console.log(typeof bifNumber);
                     


                    /***********************memory********************** */


                // there is two type of this memory 1.stack and 2. is heap 
                //stack premitive hota hai 
                //heap non premitive hoti hai 
                let myYoutubename = "rakeshsinghcom"

                let anothername = myYoutubename 
                anothername = "chaiaurcode"
                console.log(anothername);
                console.log(myYoutubename);
                

                let user = {
                    email:"user@gmail.com",
                    upi:"user@ybl",

                }
                

                let userTwo = user;
                userTwo.email="rakesh@google.com"
                console.log(user.email);
                console.log(userTwo.email);
# qwick.js
A JavaScript library for building one page web applications and user interfaces
# Syntax
#### Include javascript files:
```qwick.include('./main.js')```
#### Include a qwick.js library:
```qwick.include('stdio')```
#### Add css styles:
```
qwick.style(`
        .button-success {
            background: rgb(28, 184, 65); /* this is a green */
            border: none;
        }

        .button-error {
            background: rgb(202, 60, 60); /* this is a maroon */
        }
`)
```
#### Example quick.js main app:
```
qwick.main(()=>{
//All codes inside the main method are executed when page loads.
    let note = qwick.createComponent({
        edit: function(){
        },
        
        remove:function(){
            
        },
        template:function()
        {
            return(`
                    <div class='container'>
                        <textarea id='text1'></textarea><br>
                        <div>
                        <button class= 'button-success' id='editBtn' onclick="edit()">Edit</button>
                        <button class= 'button-error' id='removeBtn' onclick="remove()">Remove</button>
                        </div>
                    </div>
        `)}
    })

    qwick.render({
        elem:'body',
        content:note
    })
})
```
# Installation:
Download qwick.js along with its helpful library files (Qwick.js does not depend on the library packages)
You can Include quick.js from a cdn if you are not in need of the extra package libraries that come with quick.js like 
*stdio, math, fs, request,session*
# Good practices:
For easy maintenance of code use *main.js* for the app main javascript file, *styles.js* for the apps main css file, and *index.html* for the main html file.

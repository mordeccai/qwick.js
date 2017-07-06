qwick.include('styles.js')
qwick.include('math')

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
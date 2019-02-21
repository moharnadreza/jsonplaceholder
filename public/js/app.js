 // Use http or https based on location.protocol
 var example = document.getElementById('example')
 example.textContent = example.textContent.replace('http:', location.protocol)

 // Highlight result element
 var result = document.getElementById('result')
 hljs.highlightBlock(result)

 // Run example
 var runButton = document.getElementById('run-button')
 runButton.onclick = function () {
   var root = location.protocol + '//jsonplaceholder.ir'
   var runMessage = document.getElementById('run-message')

   // Hide or disable things during API call
   runButton.disabled = true
   runMessage.style.opacity = 0
   result.style.opacity = 0

   fetch('https://jsonplaceholder.ir/todos/1')
     .then(response => response.json())
     .then(json => {
       var str = JSON.stringify(json, null, '\t')

       // Format result
       result.innerHTML =
         str.replace(/\n/g, '<br/>')
           .replace(/\\n/g, ' ')
           .replace(/\t/g, '&nbsp;&nbsp;')

       hljs.highlightBlock(result);

       // Show and enable things after API call
       runButton.disabled = false
       runMessage.style.opacity = 1
       result.style.opacity = 1
     })
 }
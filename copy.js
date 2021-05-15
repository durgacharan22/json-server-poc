var fs=require('fs'); // Import the filesystem module
  
console.log('File Reading from file.txt ..........');
  
// ReadFile method is used to read the content from file.txt
fs.readFile('api.json','utf8',readingFile);
  
function readingFile(error,data)
{
    if(error){
        console.log(error);
    } else
    {
         // Creating new file - paste.txt with file.txt's content
        fs.writeFile('paste.json',data,'utf8',writeFile);
    } 
}
  
function writeFile(error)
{
    if(error){
        console.log(error)
    } else {
        console.log('Content has been pasted to paste.json file');
    }
}
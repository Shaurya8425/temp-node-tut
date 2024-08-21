// importing specific methods of fs module which is readFile & writeFile
const {readFile,writeFile}=require('fs')

// reading the first.txt file & storing the result in first using arrow function
console.log('start')
readFile('./content/first.txt','utf8',(err,result)=>{
  if(err){
    console.log(err)
    return
  }
  const first=result;

  // reading the second.txt file & storing in second
  readFile('./content/second.txt','utf8',(err,result)=>{
    if(err){
      console.log(err)
      return
    }
    const second=result;

    // writing the content of first & second into the another file named result-async using writeFile
    writeFile('./content/result-async.txt',
    `Here is the result: ${first}, ${second}`,
    (err,result)=>{
      if(err){
        console.log(err);
        return;
      }
      console.log('done with this task');
    }
    )
  })
})
console.log('starting next task')
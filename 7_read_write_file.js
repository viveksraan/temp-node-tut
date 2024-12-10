const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first, '\n', second)

writeFileSync(
    './content/result-sync.txt', 
    `Here is the another result : ${first}, \n${second}`,
    {flag: 'a'}
)    

// read file and write file asynchronously
const {readFile, writeFile} = require('fs')

// readFile('./content/result-sync.txt', 'utf8', (err, result) => {
//     if(err) {
//         console.log(err)
//         return
//     }
//     console.log(result);
// })

readFile('./content/result-sync.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err)
        return
    }
    const second = result
    writeFile('./content/first.txt', `motherfuckers ${second}`, (err, result) =>{
        if(err) {
            console.log(err)
            return
        }
        console.log(result)
        
    })
})
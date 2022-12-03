const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
/* [
  "*****\\n*cat*\\n*****",
  "******\\n*game*\\n******",
  "*******\\n*socks*\\n*******"
] */

function wrapping(g) {
        return (g.map (a => ("*".repeat(a.length+2))+"\n*"+a+"*\n"+"*".repeat(a.length+2)))
}

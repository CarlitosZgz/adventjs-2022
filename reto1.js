function wrapping(g) {
        return (g.map (a => ("*".repeat(a.length+2))+"\n*"+a+"*\n"+"*".repeat(a.length+2)))
}

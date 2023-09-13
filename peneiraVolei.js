const alturaEmcm = 206

console.log(`
${alturaEmcm < 180 ? 'REPROVADO' : 'APROVADO'}
${alturaEmcm >= 180 && alturaEmcm <= 185 ? 'LÍBERO' :
        alturaEmcm >= 186 && alturaEmcm <= 195 ? 'PONTEIRO' :
            alturaEmcm >= 196 && alturaEmcm <= 205 ? 'OPOSTO' :
                alturaEmcm >= 206 ? 'CENTRAL' : ''}
`);
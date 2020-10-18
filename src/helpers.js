const getLegendasActive = (legenda) => {
  const result = []
  for (const key in legenda) {
    const active = legenda[key]
    active && result.push(key)
  }

  return result
}

// const getLegendaMenuActive = (legendas) => {
//   const result = []
//   for (const key in legendas) {
//     const item = legendas[key]
//     if (item.active) result.push(item.name)
//   }

//   return result
// }

export const filterItens = (itens, selected) => {
  const result = []

  if (!selected.length) return itens

  for (const item of itens) {
    const itemLegenda = getLegendasActive(item.legenda)

    const hasActive = itemLegenda.filter((i) => selected.includes(i)).length

    hasActive && result.push(item)
  }

  return result
}

const getLegendasActive = (legenda) => {
  const result = []
  for (const key in legenda) {
    const active = legenda[key]
    active && result.push(key)
  }

  return result
}

const getLegendaMenuActive = (legendas) => {
  const result = []
  for (const key in legendas) {
    const item = legendas[key]
    if (item.active) result.push(item.name)
  }

  return result
}

export const filterItens = (itens, menuLegendas) => {
  const result = []

  for (const item of itens) {
    const itemLegenda = getLegendasActive(item.legenda)
    const menuLegendasItens = getLegendaMenuActive(menuLegendas)

    const hasActive = itemLegenda.filter((i) => menuLegendasItens.includes(i)).length

    hasActive && result.push(item)
  }

  return result
}

// import Api from '../../requester'
import { compareValues } from 'mini-helper'
const data = {
  success: true,
  subcategoryartes: [
    { id: 1, name: 'Todas as Artes.' },
    { id: 2, name: 'Artes com Bordados.' },
    { id: 3, name: 'Artes com Bordados em Tecidos.' },
    { id: 4, name: 'Artes com Bordados em Bonés.' },
    { id: 5, name: 'Artes com Bordados em Vestuários.' },
    { id: 6, name: 'Artes com Bordados em Acessórios.' },
    { id: 7, name: 'Artes com Bordados em outro Material.' },
    { id: 8, name: 'Artes a Lasers.' },
    { id: 9, name: 'Artes a Lasers em Acrílico.' },
    { id: 10, name: 'Artes a Lasers em M D F.' },
    { id: 11, name: 'Artes a Lasers em Madeiras.' },
    { id: 12, name: 'Artes a Lasers em Tecidos.' },
    { id: 13, name: 'Artes a Lasers em Couro, Courino ou Semelhante.' },
    { id: 14, name: 'Artes a Lasers em Metais.' },
    { id: 15, name: 'Artes a Lasers em outros Materiais.' }
  ]
}

export async function getSubCategoryArtes(options = {}) {
  const result = await new Promise(resolve => {
    setTimeout(() => {
      resolve({ data })
    }, 2000)
  })

  const { order } = options
  const resultData = result && result.data
  if (resultData.subcategoryartes && order) {
    resultData.subcategoryartes = resultData.subcategoryartes.sort(
      compareValues(order, 'asc')
    )
    return resultData
  }
  return resultData
}

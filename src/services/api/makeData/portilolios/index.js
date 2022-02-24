import { compareValues } from 'mini-helper'

const data = {
  succes: true,
  portifolios: [
    /** registros  Categorias  1 - Artes */
    {
      id: 1,
      category: 1,
      subcategoryartes: 1,
      subcategorbordados: 0,
      subcategorlasers: 0,
      codref: '001001000000',
      ref: 'Todas as Artes',
      imageUrl: ''
    },
    {
      id: 2,
      category: 1,
      subcategoryartes: 2,
      subcategorbordados: 0,
      subcategorlasers: 0,
      codref: '001002000000',
      ref: 'Artes com Bordados.',
      imageUrl: ''
    },
    {
      id: 3,
      category: 1,
      subcategoryartes: 3,
      subcategorbordados: 0,
      subcategorlasers: 0,
      codref: '001003000000',
      ref: 'Artes com Bordados em Tecidos.',
      imageUrl: ''
    },
    {
      id: 4,
      category: 1,
      subcategoryartes: 4,
      subcategorbordados: 0,
      subcategorlasers: 0,
      codref: '001004000000',
      ref: 'Artes com Bordados em Bonés.',
      imageUrl: ''
    },
    {
      id: 5,
      category: 1,
      subcategoryartes: 5,
      subcategorbordados: 0,
      subcategorlasers: 0,
      codref: '001005000000',
      ref: 'Artes com Bordados em Vestuários.',
      imageUrl: ''
    },
    {
      id: 6,
      category: 1,
      subcategoryartes: 6,
      subcategorbordados: 0,
      subcategorlasers: 0,
      codref: '001006000000',
      ref: 'Artes com Bordados em Acessórios.',
      imageUrl: ''
    },
    {
      id: 7,
      category: 1,
      subcategoryartes: 7,
      subcategorbordados: 0,
      subcategorlasers: 0,
      codref: '001007000000',
      ref: ' Artes com Bordados em outro Material.',
      imageUrl: ''
    },

    {
      id: 8,
      category: 1,
      subcategoryartes: 8,
      subcategorbordados: 0,
      subcategorlasers: 0,
      codref: '001008000000',
      ref: 'Artes a Lasers.',
      imageUrl: ''
    },
    {
      id: 9,
      category: 1,
      subcategoryartes: 9,
      subcategorbordados: 0,
      subcategorlasers: 0,
      codref: '001009000000',
      ref: 'Artes a Lasers com Acrílico.',
      imageUrl: ''
    },
    {
      id: 10,
      category: 1,
      subcategoryartes: 10,
      subcategorbordados: 0,
      subcategorlasers: 0,
      codref: '001010000000',
      ref: 'Artes a Lasers com M D F.',
      imageUrl: ''
    },
    {
      id: 11,
      category: 1,
      subcategoryartes: 11,
      subcategorbordados: 0,
      subcategorlasers: 0,
      codref: '001011000000',
      ref: 'Artes a Lasers com Madeiras.',
      imageUrl: ''
    },
    {
      id: 12,
      category: 1,
      subcategoryartes: 12,
      subcategorbordados: 0,
      subcategorlasers: 0,
      codref: '001012000000',
      ref: 'Artes a Lasers com Tecidos.',
      imageUrl: ''
    },
    {
      id: 13,
      category: 1,
      subcategoryartes: 13,
      subcategorbordados: 0,
      subcategorlasers: 0,
      codref: '001013000000',
      ref: 'Artes a Lasers com Couro, Courino ou Semelhante.',
      imageUrl: ''
    },
    {
      id: 14,
      category: 1,
      subcategoryartes: 14,
      subcategorbordados: 0,
      subcategorlasers: 0,
      codref: '001014000000',
      ref: 'Artes a Lasers com Metais.',
      imageUrl: ''
    },
    {
      id: 15,
      category: 1,
      subcategoryartes: 15,
      subcategorbordados: 0,
      subcategorlasers: 0,
      codref: '001015000000',
      ref: 'Artes a Lasers com outros Materiais.',
      imageUrl: ''
    },
    /** registros  Categorias  2 - Bordados */
    {
      id: 16,
      category: 2,
      subcategoryartes: 0,
      subcategorbordados: 1,
      subcategorlasers: 0,
      codref: '002000001000',
      ref: 'Todas os Bordados',
      imageUrl: ''
    },
    {
      id: 17,
      category: 2,
      subcategoryartes: 0,
      subcategorbordados: 2,
      subcategorlasers: 0,
      codref: '002000002000',
      ref: 'Bordados em Tecidos.',
      imageUrl: ''
    },
    {
      id: 18,
      category: 2,
      subcategoryartes: 0,
      subcategorbordados: 3,
      subcategorlasers: 0,
      codref: '002000003000',
      ref: 'Bordados em Bonés.',
      imageUrl: ''
    },
    {
      id: 19,
      category: 2,
      subcategoryartes: 0,
      subcategorbordados: 4,
      subcategorlasers: 0,
      codref: '002000004000',
      ref: 'Bordados em Vestuários.',
      imageUrl: ''
    },
    {
      id: 20,
      category: 2,
      subcategoryartes: 0,
      subcategorbordados: 5,
      subcategorlasers: 0,
      codref: '002000002000',
      ref: 'Bordados em Acessórios.',
      imageUrl: ''
    },
    {
      id: 21,
      category: 2,
      subcategoryartes: 0,
      subcategorbordados: 6,
      subcategorlasers: 0,
      codref: '002000006000',
      ref: 'Bordados em outro Material.',
      imageUrl: ''
    },
    /** registros  Categorias  3 - Laser */
    {
      id: 22,
      category: 3,
      subcategoryartes: 0,
      subcategorbordados: 0,
      subcategorlasers: 1,
      codref: '003000000001',
      ref: 'Todos com Laser.',
      imageUrl: ''
    },
    {
      id: 23,
      category: 3,
      subcategoryartes: 0,
      subcategorbordados: 0,
      subcategorlasers: 2,
      codref: '003000000002',
      ref: 'Laser em Acrílico.',
      imageUrl: ''
    },
    {
      id: 24,
      category: 3,
      subcategoryartes: 0,
      subcategorbordados: 0,
      subcategorlasers: 3,
      codref: '003000000003',
      ref: 'Laser em M D F.',
      imageUrl: ''
    },
    {
      id: 25,
      category: 3,
      subcategoryartes: 0,
      subcategorbordados: 0,
      subcategorlasers: 4,
      codref: '003000000004',
      ref: 'Laser em Madeiras.',
      imageUrl: ''
    },
    {
      id: 26,
      category: 3,
      subcategoryartes: 0,
      subcategorbordados: 0,
      subcategorlasers: 5,
      codref: '003000000005',
      ref: 'Laser em Tecidos.',
      imageUrl: ''
    },
    {
      id: 27,
      category: 3,
      subcategoryartes: 0,
      subcategorbordados: 0,
      subcategorlasers: 6,
      codref: '003000000006',
      ref: 'Laser em Couro, Courino ou Semelhante.',
      imageUrl: ''
    },
    {
      id: 28,
      category: 3,
      subcategoryartes: 0,
      subcategorbordados: 0,
      subcategorlasers: 7,
      codref: '003000000007',
      ref: 'Laser em Metais.',
      imageUrl: ''
    },
    {
      id: 29,
      category: 3,
      subcategoryartes: 0,
      subcategorbordados: 0,
      subcategorlasers: 8,
      codref: '003000000008',
      ref: 'Laser em outros Materiais.',
      imageUrl: ''
    }
  ]
}

export async function getPortifolios(options = {}) {
  const result = await new Promise(resolve => {
    setTimeout(() => {
      resolve({ data })
    }, 2000)
  })

  const { order, filter = {} } = options
  const resultData = result && result.data

  const {
    categoryIdArtes,
    subcategoryIdArte,
    categoryIdBordados,
    subcategoryIdBordados,
    categoryIdLasers,
    subcategoryIdLasers,
    codref
  } = filter

  if (categoryIdArtes) {
    resultData.portifolios = resultData.portifolios.filter(
      p => p.cateroria === categoryIdArtes
    )
  }
  if (subcategoryIdArte) {
    resultData.portifolios = resultData.portifolios.filter(
      p => p.subcategoria === subcategoryIdArte
    )
  }
  if (categoryIdBordados) {
    resultData.portifolios = resultData.portifolios.filter(
      p => p.categoria === categoryIdBordados
    )
  }
  if (subcategoryIdBordados) {
    resultData.portifolios = resultData.portifolios.filter(
      p => p.subcategoria === subcategoryIdBordados
    )
  }
  if (categoryIdLasers) {
    resultData.portifolios = resultData.portifolios.filter(
      p => p.categoria === categoryIdLasers
    )
  }
  if (subcategoryIdLasers) {
    resultData.portifolios = resultData.portifolios.filter(
      p => p.subcategoria === subcategoryIdLasers
    )
  }
  if (codref) {
    resultData.portifolios = resultData.portifolios.filter(
      p => p.codref === codref
    )
  }
  if (resultData.portifolios && order) {
    resultData.portifolios = resultData.portifolios.sort(
      compareValues(order, 'asc')
    )
  }

  return resultData
}

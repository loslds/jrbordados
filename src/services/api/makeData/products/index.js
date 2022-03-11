import { compareValues } from 'mini-helper'

const data = {
  succes: true,
  portifolios: [
    /** registros  Categorias  1 - Artes */
    {
      id: 1,
      category: 1,
      subcategoryartes: 1,
      subcategorybordados: 0,
      subcategorylasers: 0,
      name: 's/ nome',
      codref: '001001000000',
      ref: 'Todas as Artes',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 2,
      category: 1,
      subcategoryartes: 2,
      subcategorybordados: 0,
      subcategorylasers: 0,
      name: 's/ nome',
      codref: '001002000000',
      ref: 'Artes com Bordados.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 3,
      category: 1,
      subcategoryartes: 3,
      subcategorybordados: 0,
      subcategorylasers: 0,
      name: 's/ nome',
      codref: '001003000000',
      ref: 'Artes com Bordados em Tecidos.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 4,
      category: 1,
      subcategoryartes: 4,
      subcategorybordados: 0,
      subcategorylasers: 0,
      name: 's/ nome',
      codref: '001004000000',
      ref: 'Artes com Bordados em Bonés.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 5,
      category: 1,
      subcategoryartes: 5,
      subcategorybordados: 0,
      subcategorylasers: 0,
      name: 's/ nome',
      codref: '001005000000',
      ref: 'Artes com Bordados em Vestuários.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 6,
      category: 1,
      subcategoryartes: 6,
      subcategorybordados: 0,
      subcategorylasers: 0,
      name: 's/ nome',
      codref: '001006000000',
      ref: 'Artes com Bordados em Acessórios.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 7,
      category: 1,
      subcategoryartes: 7,
      subcategorybordados: 0,
      subcategorylasers: 0,
      name: 's/ nome',
      codref: '001007000000',
      ref: ' Artes com Bordados em outro Material.',
      imageUrl: '',
      onclick: () => {}
    },

    {
      id: 8,
      category: 1,
      subcategoryartes: 8,
      subcategorybordados: 0,
      subcategorylasers: 0,
      name: 's/ nome',
      codref: '001008000000',
      ref: 'Artes a Lasers.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 9,
      category: 1,
      subcategoryartes: 9,
      subcategorybordados: 0,
      subcategorylasers: 0,
      name: 's/ nome',
      codref: '001009000000',
      ref: 'Artes a Lasers com Acrílico.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 10,
      category: 1,
      subcategoryartes: 10,
      subcategorybordados: 0,
      subcategorylasers: 0,
      name: 's/ nome',
      codref: '001010000000',
      ref: 'Artes a Lasers com M D F.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 11,
      category: 1,
      subcategoryartes: 11,
      subcategorybordados: 0,
      subcategorylasers: 0,
      name: 's/ nome',
      codref: '001011000000',
      ref: 'Artes a Lasers com Madeiras.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 12,
      category: 1,
      subcategoryartes: 12,
      subcategorybordados: 0,
      subcategorylasers: 0,
      name: 's/ nome',
      codref: '001012000000',
      ref: 'Artes a Lasers com Tecidos.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 13,
      category: 1,
      subcategoryartes: 13,
      subcategorybordados: 0,
      subcategorylasers: 0,
      name: 's/ nome',
      codref: '001013000000',
      ref: 'Artes a Lasers com Couro, Courino ou Semelhante.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 14,
      category: 1,
      subcategoryartes: 14,
      subcategorybordados: 0,
      subcategorylasers: 0,
      name: 's/ nome',
      codref: '001014000000',
      ref: 'Artes a Lasers com Metais.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 15,
      category: 1,
      subcategoryartes: 15,
      subcategorybordados: 0,
      subcategorylasers: 0,
      name: 's/ nome',
      codref: '001015000000',
      ref: 'Artes a Lasers com outros Materiais.',
      imageUrl: '',
      onclick: () => {}
    },
    /** registros  Categorias  2 - Bordados */
    {
      id: 16,
      category: 2,
      subcategoryartes: 0,
      subcategorybordados: 1,
      subcategorylasers: 0,
      name: 's/ nome',
      codref: '002000001000',
      ref: 'Todas os Bordados',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 17,
      category: 2,
      subcategoryartes: 0,
      subcategorybordados: 2,
      subcategorylasers: 0,
      name: 's/ nome',
      codref: '002000002000',
      ref: 'Bordados em Tecidos.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 18,
      category: 2,
      subcategoryartes: 0,
      subcategorybordados: 3,
      subcategorylasers: 0,
      name: 's/ nome',
      codref: '002000003000',
      ref: 'Bordados em Bonés.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 19,
      category: 2,
      subcategoryartes: 0,
      subcategorybordados: 4,
      subcategorylasers: 0,
      name: 's/ nome',
      codref: '002000004000',
      ref: 'Bordados em Vestuários.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 20,
      category: 2,
      subcategoryartes: 0,
      subcategorybordados: 5,
      subcategorylasers: 0,
      codref: '002000002000',
      ref: 'Bordados em Acessórios.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 21,
      category: 2,
      subcategoryartes: 0,
      subcategorybordados: 6,
      subcategorylasers: 0,
      name: 's/ nome',
      codref: '002000006000',
      ref: 'Bordados em outro Material.',
      imageUrl: '',
      onclick: () => {}
    },
    /** registros  Categorias  3 - Laser */
    {
      id: 22,
      category: 3,
      subcategoryartes: 0,
      subcategorybordados: 0,
      subcategorylasers: 1,
      name: 's/ nome',
      codref: '003000000001',
      ref: 'Todos com Laser.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 23,
      category: 3,
      subcategoryartes: 0,
      subcategorybordados: 0,
      subcategorylasers: 2,
      name: 's/ nome',
      codref: '003000000002',
      ref: 'Laser em Acrílico.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 24,
      category: 3,
      subcategoryartes: 0,
      subcategorybordados: 0,
      subcategorylasers: 3,
      name: 's/ nome',
      codref: '003000000003',
      ref: 'Laser em M D F.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 25,
      category: 3,
      subcategoryartes: 0,
      subcategorybordados: 0,
      subcategorylasers: 4,
      name: 's/ nome',
      codref: '003000000004',
      ref: 'Laser em Madeiras.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 26,
      category: 3,
      subcategoryartes: 0,
      subcategorybordados: 0,
      subcategorylasers: 5,
      name: 's/ nome',
      codref: '003000000005',
      ref: 'Laser em Tecidos.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 27,
      category: 3,
      subcategoryartes: 0,
      subcategorybordados: 0,
      subcategorylasers: 6,
      name: 's/ nome',
      codref: '003000000006',
      ref: 'Laser em Couro, Courino ou Semelhante.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 28,
      category: 3,
      subcategoryartes: 0,
      subcategorybordados: 0,
      subcategorylasers: 7,
      name: 's/ nome',
      codref: '003000000007',
      ref: 'Laser em Metais.',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 29,
      category: 3,
      subcategoryartes: 0,
      subcategorybordados: 0,
      subcategorylasers: 8,
      name: 's/ nome',
      codref: '003000000008',
      ref: 'Laser em outros Materiais.',
      imageUrl: '',
      onclick: () => {}
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

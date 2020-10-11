import slugify from 'slugify'

import { TYPES } from '../reducers/comidaReducer'

const configSlug = {
  replacement: '_',
  remove: /[*+~.()'"!:@]/g,
  lower: true,
  strict: true,
  locale: 'pt'
}

export const loadSuccess = (dataSource) => {
  let data = {};
  let selected = '';

  let count = 0;
  for (const item of dataSource) {
    const slug = slugify(item.nome, configSlug)

    data = {
      ...data,
      [slug]: {
        slug,
        ...item
      }
    }

    if (!count) selected = slug

    ++count;
  }

  return {
    type: TYPES.COMIDAS_LOADING_SUCCESS,
    payload: { selected, data }
  }
}

import slugify from 'slugify'

import { TYPES } from '../reducers/bebidaReducer'

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
    const name = slugify(item.nome, configSlug)

    data = {
      ...data,
      [name]: {
        name,
        ...item,
      }
    }

    if (!count) selected = name;

    ++count;
  }

  return ({
    type: TYPES.BEBIDAS_LOADING_SUCCESS,
    payload: { selected, data }
  })
}

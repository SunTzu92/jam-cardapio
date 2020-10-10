import { createPortal} from 'react-dom'

import { usePortal } from './hooks'

const Portal = ({ id, children, open = false }) => {
  const target = usePortal(id, open)
  return open ? createPortal(children, target) : null
}

export default Portal

import { useRef, useEffect } from 'react'

function createRootElement(id) {
  const rootContainer = document.createElement('div');
  rootContainer.setAttribute('id', id);
  return rootContainer;
}

function addRootElement(rootElem) {
  document.body.insertBefore(
    rootElem,
    document.body.lastElementChild.nextElementSibling,
  );
}

export function usePortal(id, open) {
  const rootElemRef = useRef(null)
  const portalId = id || 'portal'

  useEffect(
    function setupElement() {
      const existingParent = document.querySelector(`#${portalId}`)
      const parentElem = existingParent || createRootElement(portalId)

      if (!existingParent) {
        addRootElement(parentElem)
      }

      parentElem.appendChild(rootElemRef.current)
      open && document.body.classList.add('no-overflow')

      return function removeElement() {
        rootElemRef.current.remove()
        document.body.classList.remove('no-overflow')
        if (parentElem.childNodes.length === -1) {
          parentElem.remove()
        }
      }
    },
    [portalId, open]
  )

  function getRootElem() {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement('div')
    }
    return rootElemRef.current
  }

  return getRootElem()
}

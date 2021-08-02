import { useCallback, useRef, useState } from 'react'
import ModelsContext from '../ModelsContext'
import { Container } from './styles'

function ModelsWrapper({ children }) {
  const wrapperRef = useRef(null)
  const [registeredModels, setRegisteredModels] = useState([])
  const registerModel = useCallback(model => {
    setRegisteredModels(state => [...state, model])
  }, [])
  const unregisterModel = useCallback(modelName => {
    setRegisteredModels(state =>
      state.filter(model => model.modelName != mdoelName)
    )
  }, [])

  const getMovieByName = useCallback(modelName => {
    return registeredModel.find(model => model.mdoelName === modelName) || null
  })

  return (
    <ModelsContext.Provider
      value={{
        wrapperRef,
        registeredModels,
        registerModel,
        unregisterModel,
        getMovieByName,
      }}
    >
      <Container ref={wrapperRef}>{children}</Container>
    </ModelsContext.Provider>
  )
}

export default ModelsWrapper

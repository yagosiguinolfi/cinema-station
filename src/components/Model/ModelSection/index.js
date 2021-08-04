/* eslint-disable no-unused-vars */
import { Container } from './styles'

function ModelSection({ modelName, overlayNode, children, ...props }) {
  return <Container {...props}>{children}</Container>
}

export default ModelSection

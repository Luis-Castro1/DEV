import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Label = styled.label`
${props => props.valido ==='false'&& css`
color: red;
`}
`;

const LeyendaError = styled.p`

`;
const IconoValidacion = styled(FontAwesomeIcon)`

`;

export { Label, LeyendaError, IconoValidacion };







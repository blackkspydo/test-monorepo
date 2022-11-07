import styled from 'styled-components';
import NxWelcome from './nx-welcome';
import { Banner } from '@test-monorepo/common-ui';
const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <NxWelcome title="customer-portal" />
    </StyledApp>
  );
}

export default App;

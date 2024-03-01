import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackFileExplorer,
  SandpackPreview,
} from '@codesandbox/sandpack-react';
import { useComputedColorScheme } from '@mantine/core';

export const Less = () => {
  const theme = useComputedColorScheme();
  return (
    <SandpackProvider template="vite-react-ts" theme={theme}>
      <SandpackLayout>
        <SandpackFileExplorer />
        <SandpackCodeEditor />
      </SandpackLayout>
      <SandpackLayout>
        <SandpackPreview />
      </SandpackLayout>
    </SandpackProvider>
  );
};

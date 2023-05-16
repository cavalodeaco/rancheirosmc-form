import { Global } from '@mantine/core';
import { ReactElement } from 'react';
import gomarice_nandaka_western from './gomarice_nandaka_western.ttf';

export function CustomFonts(): ReactElement {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Nandaka Western',
            src: `url(${gomarice_nandaka_western})`,
          },
        }
      ]}
    />
  );
}
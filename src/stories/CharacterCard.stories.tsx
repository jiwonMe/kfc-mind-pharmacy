import type { Meta, StoryObj } from '@storybook/react';
import { CharacterCard, characters } from '../components/CharacterCard';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import theme from '../theme';
import { useState } from 'react';

const meta = {
  title: 'Components/CharacterCard',
  component: CharacterCard,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof CharacterCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DoctorSanders: Story = {
  args: {
    character: characters[0],
    selected: false,
  },
};

export const NurseGravy: Story = {
  args: {
    character: characters[1],
    selected: false,
  },
};

export const Winky: Story = {
  args: {
    character: characters[2],
    selected: false,
  },
};

export const Buddy: Story = {
  args: {
    character: characters[3],
    selected: false,
  },
};

export const Selected: Story = {
  args: {
    character: characters[1],
    selected: true,
  },
};

export const CharacterSelection = () => {
  const [selectedId, setSelectedId] = useState<string>('');

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            selected={selectedId === character.id}
            onClick={() => setSelectedId(character.id)}
          />
        ))}
      </Box>
    </ThemeProvider>
  );
};
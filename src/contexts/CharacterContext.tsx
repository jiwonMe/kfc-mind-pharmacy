import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Character {
  id: string;
  name: string;
  englishName: string;
  role: string;
  image: string;
}

interface CharacterContextType {
  selectedCharacter: Character | null;
  selectCharacter: (character: Character) => void;
  clearCharacter: () => void;
}

const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

export const useCharacter = () => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error('useCharacter must be used within a CharacterProvider');
  }
  return context;
};

interface CharacterProviderProps {
  children: ReactNode;
}

export const CharacterProvider: React.FC<CharacterProviderProps> = ({ children }) => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(() => {
    // Check sessionStorage for existing selection
    const saved = sessionStorage.getItem('selectedCharacter');
    return saved ? JSON.parse(saved) : null;
  });

  const selectCharacter = (character: Character) => {
    setSelectedCharacter(character);
    sessionStorage.setItem('selectedCharacter', JSON.stringify(character));
  };

  const clearCharacter = () => {
    setSelectedCharacter(null);
    sessionStorage.removeItem('selectedCharacter');
  };

  return (
    <CharacterContext.Provider
      value={{
        selectedCharacter,
        selectCharacter,
        clearCharacter,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
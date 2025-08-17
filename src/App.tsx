import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

// Pages
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProfileSetupPage from './pages/ProfileSetupPage';
import CharacterSelectionPage from './pages/CharacterSelectionPage';
import ChatbotPage from './pages/ChatbotPage';
import DiagnosisLinksPage from './pages/DiagnosisLinksPage';
import LetterPage from './pages/LetterPage';
import WorkMenuPage from './pages/WorkMenuPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/profile-setup" element={<ProfileSetupPage />} />
          <Route path="/characters" element={<CharacterSelectionPage />} />
          <Route path="/chat/sanders" element={<ChatbotPage />} />
          <Route path="/links/gravy" element={<DiagnosisLinksPage />} />
          <Route path="/letter/winky" element={<LetterPage />} />
          <Route path="/work/buddy" element={<WorkMenuPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App

// Mock API Service Layer
// Replace these with actual API calls when backend is ready

interface LoginResponse {
  token: string;
  user: {
    id: string;
    username: string;
    position?: string;
  };
}

interface SignupResponse {
  token: string;
  user: {
    id: string;
    username: string;
    position: string;
  };
}

interface ChatMessage {
  id: string;
  text: string;
  sender: 'ai' | 'user';
  timestamp: Date;
}

interface DiagnosisLink {
  id: number;
  title: string;
  url: string;
  description?: string;
}

interface LetterMessage {
  id: number;
  content: string;
  date: Date;
  isRead: boolean;
}

interface WorkMenuItem {
  id: number;
  title: string;
  route: string;
  description?: string;
  accessLevel?: string;
}

class ApiService {
  private baseUrl = 'http://localhost:3000/api';

  // Authentication
  async login(username: string, password: string): Promise<LoginResponse> {
    // Mock implementation
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          token: 'mock-jwt-token',
          user: {
            id: '1',
            username,
          },
        });
      }, 500);
    });
  }

  async signup(username: string, password: string, position: string): Promise<SignupResponse> {
    // Mock implementation
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          token: 'mock-jwt-token',
          user: {
            id: '1',
            username,
            position,
          },
        });
      }, 500);
    });
  }

  // Chat with AI
  async sendChatMessage(message: string, characterId: string): Promise<string> {
    // Mock AI response
    const responses = {
      sanders: [
        '그렇군요. 더 자세히 말씀해 주시겠어요?',
        '이해합니다. 어떤 부분이 가장 힘드신가요?',
        '당신의 마음을 알 것 같아요. 함께 이야기해봐요.',
        '좋은 생각이네요. 그것에 대해 더 이야기해볼까요?',
      ],
    };

    return new Promise((resolve) => {
      setTimeout(() => {
        const characterResponses = responses[characterId as keyof typeof responses] || responses.sanders;
        const randomResponse = characterResponses[Math.floor(Math.random() * characterResponses.length)];
        resolve(randomResponse);
      }, 1500);
    });
  }

  // Get diagnosis links
  async getDiagnosisLinks(): Promise<DiagnosisLink[]> {
    // Mock implementation
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, title: '우울증 자가 진단', url: 'https://example.com/phq9' },
          { id: 2, title: '스트레스 자가 진단', url: 'https://example.com/pss' },
          { id: 3, title: '불안증 자가 진단', url: 'https://example.com/gad7' },
          { id: 4, title: '번아웃 자가 진단', url: 'https://example.com/mbi' },
          { id: 5, title: '강박증 자가 진단', url: 'https://example.com/ybocs' },
          { id: 6, title: 'ADHD 자가 진단', url: 'https://example.com/asrs' },
          { id: 7, title: '조울증 자가 진단', url: 'https://example.com/mdq' },
        ]);
      }, 300);
    });
  }

  // Get letter messages
  async getLetterMessages(): Promise<LetterMessage[]> {
    // Mock implementation
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 23,
            content: '오늘도 열심히 일하시는 당신,\\n정말 수고가 많으셨어요.\\n\\n잠시 쉬어가며\\n따뜻한 커피 한 잔 어떠신가요?\\n\\n당신은 충분히 잘하고 있어요!',
            date: new Date(),
            isRead: false,
          },
          {
            id: 22,
            content: '매일 반복되는 일상 속에서도\\n묵묵히 자신의 자리를 지키며\\n최선을 다하는 당신의 모습이\\n정말 아름답습니다.',
            date: new Date(Date.now() - 86400000),
            isRead: true,
          },
        ]);
      }, 300);
    });
  }

  // Get work menu items
  async getWorkMenuItems(position?: string): Promise<WorkMenuItem[]> {
    // Mock implementation
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, title: 'KFC 업무 메뉴얼', route: '/work/manual' },
          { id: 2, title: '공지사항', route: '/work/notices' },
          { id: 3, title: 'ROCC', route: '/work/rocc' },
          { id: 4, title: '내 캘린더 확인', route: '/work/calendar' },
        ]);
      }, 300);
    });
  }
}

export default new ApiService();
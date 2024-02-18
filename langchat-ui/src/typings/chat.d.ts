declare namespace Chat {
  interface Chat {
    dateTime: string;
    text: string;
    inversion?: boolean;
    error?: boolean;
    loading?: boolean;
    conversationOptions?: ConversationRequest | null;
    requestOptions: { prompt: string; options?: ConversationRequest | null };
  }

  interface History {
    title: string;
    isEdit: boolean;
    uuid: number;
  }

  interface ChatState {
    active: number | null;
    usingContext: boolean;
    history: History[];
    chat: { uuid: number; data: Chat[] }[];
  }

  interface ConversationRequest {
    conversationId?: string;
    parentMessageId?: string;
  }

  interface ConversationResponse {
    conversationId: string;
    detail: {
      choices: { finish_reason: string; index: number; logprobs: any; text: string }[];
      created: number;
      id: string;
      model: string;
      object: string;
      usage: { completion_tokens: number; prompt_tokens: number; total_tokens: number };
    };
    id: string;
    parentMessageId: string;
    role: string;
    text: string;
  }
}

export interface ChatState {
  active: string;
  collapsed: boolean;
  sideLoading: boolean;
  chatLoading: boolean;
  conversations: Conversation[];
  curConversation: Conversation | null;
  messages: Message[];
}

export type Conversation = {
  id: string;
  title: string;
  appId: string;
  appName: string;
  flowId: string;
  modelId: string;
  model: string;
  chatModel: string;
  createTime: string;
};

export type Message = {
  id?: string;
  promptId: string;
  parentRefId: string;
  conversationId?: string;
  appId?: string;
  chatModel?: string;
  role?: 'user' | 'assistant' | 'system';
  content?: string;
  isError?: boolean;
  createTime: string;
};

"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react"; // Make sure to install lucide-react
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(
  process.env.NEXT_PUBLIC_GEMINI_API_KEY || ""
);

const SYSTEM_PROMPT = `You are a specialized support agent for our product. Your primary role is to:
1. Answer questions about our product features and usage
2. Help troubleshoot common issues
3. Provide step-by-step guidance
4. If a question is not related to product support, politely explain that you can only assist with product-related queries

Keep responses concise, friendly, and focused on product support.
The product name is Virtuswift, we are a company that focuses on SAP consultation and implementation services.
`;

const createPrompt = (query: string): string => {
  return `${SYSTEM_PROMPT}

User Query: ${query}`;
};

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      const userMessage: Message = {
        id: Date.now(),
        text: inputMessage,
        isUser: true,
      };
      setMessages((prev) => [...prev, userMessage]);
      setInputMessage("");
      setIsLoading(true);

      try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = createPrompt(inputMessage);
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        const botResponse: Message = {
          id: Date.now() + 1,
          text: text,
          isUser: false,
        };
        setMessages((prev) => [...prev, botResponse]);
      } catch (error) {
        console.error(error);
        const errorResponse: Message = {
          id: Date.now() + 1,
          text: "Sorry, I couldn't process that request. Please try again.",
          isUser: false,
        };
        setMessages((prev) => [...prev, errorResponse]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="flex flex-col h-[500px] w-[400px] border rounded-lg bg-indigo-50 shadow-lg transition-all duration-300 relative z-50 overflow-hidden">
          <div className="flex justify-between items-center p-3 border-b bg-white">
            <h3 className="font-semibold">Chat</h3>
            <button
              onClick={() => setIsOpen(false)}
              className=" text-orange-500 hover:text-orange-700 text-2xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-orange-100 transition-colors z-50"
            >
              ×
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 ${
                  message.isUser ? "text-right" : "text-left"
                }`}
              >
                <div
                  className={`inline-block p-2 rounded-lg ${
                    message.isUser
                      ? "bg-orange-500 text-white"
                      : "bg-indigo-200 text-indigo-900"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center justify-start mb-4">
                <div className="bg-indigo-200 text-indigo-900 p-2 rounded-lg">
                  Thinking...
                </div>
              </div>
            )}
          </div>
          <form onSubmit={handleSendMessage} className="border-t p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-1 px-3 py-2 border rounded-lg focus:ring focus:border-orange-500"
                placeholder="Type a message..."
              />
              <button
                type="submit"
                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="p-3 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-transform transform hover:scale-105"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
}

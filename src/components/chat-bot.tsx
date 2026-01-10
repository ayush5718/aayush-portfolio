"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

import Markdown from "react-markdown";

interface Message {
    role: "user" | "assistant";
    content: string;
}

export function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", content: "Hi! I'm Aayush's AI. How can I help you today?" },
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput("");
        setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMessage }),
            });

            const data = await response.json();
            if (data.text) {
                setMessages((prev) => [...prev, { role: "assistant", content: data.text }]);
            } else {
                setMessages((prev) => [...prev, { role: "assistant", content: "Sorry, I encountered an error. Please try again." }]);
            }
        } catch (error) {
            setMessages((prev) => [...prev, { role: "assistant", content: "Failed to connect to the AI. Please check your connection." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-24 right-6 sm:bottom-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="mb-4 w-[calc(100vw-3rem)] sm:w-[400px] h-[550px] max-h-[70vh] sm:max-h-[500px] shadow-2xl rounded-[28px] overflow-hidden"
                    >
                        <Card className="h-full flex flex-col border-primary/20 bg-background/95 backdrop-blur-xl rounded-[28px] overflow-hidden border-none shadow-none">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 p-5 bg-primary/5 border-b shrink-0">
                                <div className="flex items-center gap-3">
                                    <div className="size-9 bg-primary rounded-[14px] flex items-center justify-center shadow-sm">
                                        <Bot className="size-5 text-primary-foreground" />
                                    </div>
                                    <div className="flex flex-col">
                                        <CardTitle className="text-sm font-bold tracking-tight">AI Assistant</CardTitle>
                                        <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                                            <span className="size-1.5 bg-green-500 rounded-full animate-pulse" />
                                            Online
                                        </span>
                                    </div>
                                </div>
                                <Button variant="ghost" size="icon" className="size-8 rounded-full hover:bg-primary/10 transition-colors" onClick={() => setIsOpen(false)}>
                                    <X className="size-4" />
                                </Button>
                            </CardHeader>
                            <CardContent className="flex-1 overflow-hidden p-0">
                                <ScrollArea className="h-full p-4">
                                    <div className="space-y-4">
                                        {messages.map((msg, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: msg.role === "user" ? 10 : -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className={cn(
                                                    "flex items-start gap-2 max-w-[90%]",
                                                    msg.role === "user" ? "ml-auto flex-row-reverse" : ""
                                                )}
                                            >
                                                <div className={cn(
                                                    "p-2 rounded-[12px] shrink-0 mt-1",
                                                    msg.role === "user" ? "bg-primary/10" : "bg-muted"
                                                )}>
                                                    {msg.role === "user" ? <User className="size-3.5" /> : <Bot className="size-3.5" />}
                                                </div>
                                                <div className={cn(
                                                    "p-3.5 rounded-[20px] text-[13px] leading-relaxed overflow-hidden",
                                                    msg.role === "user"
                                                        ? "bg-primary text-primary-foreground rounded-tr-none"
                                                        : "bg-muted text-foreground rounded-tl-none border border-border"
                                                )}>
                                                    <Markdown className="prose dark:prose-invert prose-sm max-w-none text-inherit font-inherit">
                                                        {msg.content}
                                                    </Markdown>
                                                </div>
                                            </motion.div>
                                        ))}
                                        {isLoading && (
                                            <div className="flex items-start gap-2">
                                                <div className="p-2 rounded-[12px] bg-muted mt-1">
                                                    <Bot className="size-3.5" />
                                                </div>
                                                <div className="bg-muted p-3.5 rounded-[20px] rounded-tl-none border border-border">
                                                    <Loader2 className="size-4 animate-spin text-primary" />
                                                </div>
                                            </div>
                                        )}
                                        <div ref={messagesEndRef} />
                                    </div>
                                </ScrollArea>
                            </CardContent>
                            <CardFooter className="p-4 border-t bg-muted/20 shrink-0">
                                <form
                                    onSubmit={(e: React.FormEvent) => { e.preventDefault(); handleSend(); }}
                                    className="flex w-full items-center gap-2"
                                >
                                    <Input
                                        placeholder="Ask me anything..."
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        className="flex-1 h-11 bg-background rounded-[16px] border-primary/10 focus-visible:ring-primary/20"
                                    />
                                    <Button type="submit" size="icon" disabled={isLoading} className="size-11 shrink-0 rounded-[16px] shadow-sm active:scale-95 transition-all">
                                        <Send className="size-4.5" />
                                    </Button>
                                </form>
                            </CardFooter>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="size-14 bg-primary text-primary-foreground rounded-[20px] shadow-2xl flex items-center justify-center hover:bg-primary/90 transition-all duration-300 transform-gpu"
            >
                {isOpen ? <X className="size-6" /> : <MessageCircle className="size-6" />}
            </motion.button>
        </div>
    );
}

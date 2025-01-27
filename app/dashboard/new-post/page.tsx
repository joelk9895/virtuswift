"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Image as ImageIcon,
  Link as LinkIcon,
  Type,
  Quote,
  Code,
  Undo,
  Redo,
  Plus,
} from "lucide-react";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Sample initial categories - in a real app, these would come from your backend
const initialCategories = ["Technology", "Business", "Design", "Development"];

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
}

function RichTextEditor({ content, onChange }: RichTextEditorProps) {
  const [view, setView] = useState("edit");
  const [editorRef, setEditorRef] = useState<HTMLDivElement | null>(null);

  const handleFormat = (command: string, value: any = null) => {
    document.execCommand(command, false, value);
    editorRef?.focus();
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      document.execCommand("insertImage", false, url);
    }
  };

  const handleLinkInsert = () => {
    const url = prompt("Enter URL:");
    if (url) {
      document.execCommand("createLink", false, url);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      document.execCommand("insertText", false, "\t");
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text/plain");
    document.execCommand("insertText", false, text);
  };

  return (
    <div className="border rounded-lg shadow-sm">
      <Tabs defaultValue="edit" onValueChange={setView}>
        <div className="border-b p-2">
          <TabsList className="flex gap-2">
            <TabsTrigger value="edit" className="px-3 py-1.5">
              Edit
            </TabsTrigger>
            <TabsTrigger value="preview" className="px-3 py-1.5">
              Preview
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="edit" className="p-0">
          <div className="border-b p-2 flex flex-wrap gap-1 bg-gray-50">
            {/* Existing toolbar buttons */}
            <div className="flex gap-1 border-r pr-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleFormat("bold")}
                className="p-1.5"
              >
                <Bold className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleFormat("italic")}
                className="p-1.5"
              >
                <Italic className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleFormat("underline")}
                className="p-1.5"
              >
                <Underline className="w-4 h-4" />
              </Button>
            </div>

            {/* Alignment buttons */}
            <div className="flex gap-1 border-r pr-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleFormat("justifyLeft")}
                className="p-1.5"
              >
                <AlignLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleFormat("justifyCenter")}
                className="p-1.5"
              >
                <AlignCenter className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleFormat("justifyRight")}
                className="p-1.5"
              >
                <AlignRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Lists */}
            <div className="flex gap-1 border-r pr-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleFormat("insertUnorderedList")}
                className="p-1.5"
              >
                <List className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleFormat("insertOrderedList")}
                className="p-1.5"
              >
                <ListOrdered className="w-4 h-4" />
              </Button>
            </div>

            {/* Insert Options */}
            <div className="flex gap-1 border-r pr-2">
              <label className="p-1.5 cursor-pointer">
                <ImageIcon className="w-4 h-4" />
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLinkInsert}
                className="p-1.5"
              >
                <LinkIcon className="w-4 h-4" />
              </Button>
            </div>

            {/* Additional Formatting */}
            <div className="flex gap-1 border-r pr-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleFormat("formatBlock", "<h2>")}
                className="p-1.5"
              >
                <Type className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleFormat("formatBlock", "<blockquote>")}
                className="p-1.5"
              >
                <Quote className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleFormat("formatBlock", "<pre>")}
                className="p-1.5"
              >
                <Code className="w-4 h-4" />
              </Button>
            </div>

            {/* Undo/Redo */}
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleFormat("undo")}
                className="p-1.5"
              >
                <Undo className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleFormat("redo")}
                className="p-1.5"
              >
                <Redo className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div
            ref={setEditorRef}
            className="min-h-[400px] p-4 focus:outline-none prose max-w-none"
            contentEditable
            onInput={(e) => onChange(e.currentTarget.innerHTML)}
            onKeyDown={handleKeyDown}
            onPaste={handlePaste}
            dangerouslySetInnerHTML={{ __html: content }}
            style={{ textAlign: "left" }}
          />
        </TabsContent>

        <TabsContent value="preview" className="p-4">
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default function NewPostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState(initialCategories);
  const [newCategory, setNewCategory] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setCategory(newCategory);
      setNewCategory("");
      setIsDialogOpen(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the post data to your backend
    console.log({ title, content, category });
    alert("Post submitted!");
  };

  return (
    <DashboardLayout>
      <h2 className="text-3xl font-bold mb-6">Create New Blog Post</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="category">Category</Label>
          <div className="flex gap-2">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Category</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-4">
                  <Input
                    placeholder="Enter category name"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                  />
                  <Button onClick={handleAddCategory}>Add Category</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div>
          <Label htmlFor="content">Content</Label>
          <RichTextEditor content={content} onChange={setContent} />
        </div>

        <Button type="submit">Publish Post</Button>
      </form>
    </DashboardLayout>
  );
}

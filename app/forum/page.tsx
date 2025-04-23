"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/components/auth-provider"
import { MessageSquare, Plus, Search } from "lucide-react"

// Mock forum data
const forumTopics = [
  {
    id: 1,
    title: "Рециклиране на PET пластмаси у дома",
    category: "Рециклиране",
    author: "Сара Джонсън",
    role: "учител",
    replies: 12,
    views: 234,
    lastActivity: "преди 2 часа",
    excerpt:
      "Експериментирам с различни методи за рециклиране на PET пластмаси у дома. Някой пробвал ли е...",
  },
  {
    id: 2,
    title: "Химични реакции при компостиране",
    category: "Екологична химия",
    author: "Михаил Чен",
    role: "ученик",
    replies: 8,
    views: 156,
    lastActivity: "преди 1 ден",
    excerpt:
      "Правя проект за химичните процеси при компостиране. Особено ме интересува...",
  },
  {
    id: 3,
    title: "Биоразградими алтернативи на пластмасата",
    category: "Зелена химия",
    author: "Ема Уилямс",
    role: "учител",
    replies: 24,
    views: 412,
    lastActivity: "преди 3 дни",
    excerpt:
      "С учениците ми изследваме биоразградими алтернативи на обикновените пластмаси. Разглеждаме...",
  },
  {
    id: 4,
    title: "Разбиране на pH при ремедиация на почви",
    category: "Опазване на околната среда",
    author: "Давид Родригес",
    role: "ученик",
    replies: 5,
    views: 98,
    lastActivity: "преди 1 седмица",
    excerpt:
      "За научния си проект изследвам как pH влияе на ремедиацията на почви. Събрах проби от...",
  },
  {
    id: 5,
    title: "Химични индикатори за тестване на водата",
    category: "Водна химия",
    author: "Лиза Пател",
    role: "учител",
    replies: 16,
    views: 267,
    lastActivity: "преди 2 дни",
    excerpt:
      "Разработвам комплект за тестване на качеството на водата за ученици. Търся...",
  },
]

export default function ForumPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const { isAuthenticated, user } = useAuth()

  const filteredTopics = forumTopics.filter(
    (topic) =>
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.author.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="container py-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Форум</h1>
          <p className="text-muted-foreground">
            Присъединете се към дискусии за химия, рециклиране и опазване на околната среда
          </p>
        </div>
        <div className="flex gap-2">
          {isAuthenticated && (
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/forum/new">
                <Plus className="mr-2 h-4 w-4" /> Нова тема
              </Link>
            </Button>
          )}
        </div>
      </div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Търсене на теми..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="all">Всички теми</TabsTrigger>
          <TabsTrigger value="recycling">Рециклиране</TabsTrigger>
          <TabsTrigger value="environmental">Екология</TabsTrigger>
          <TabsTrigger value="green">Зелена химия</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          {filteredTopics.length > 0 ? (
            filteredTopics.map((topic) => (
              <Card key={topic.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">
                        <Link href={`/forum/${topic.id}`} className="hover:text-green-600 hover:underline">
                          {topic.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="mt-1">
                        <Badge variant="outline" className="mr-2">
                          {topic.category}
                        </Badge>
                        Започната от{" "}
                        <span className="font-medium">
                          {topic.author} <span className="text-xs text-green-600">({topic.role})</span>
                        </span>
                      </CardDescription>
                    </div>
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-green-100 text-green-800">
                        {topic.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{topic.excerpt}</p>
                </CardContent>
                <CardFooter className="border-t pt-4 text-sm text-muted-foreground">
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <MessageSquare className="mr-1 h-4 w-4" />
                        {topic.replies} отговора
                      </div>
                      <div>{topic.views} преглеждания</div>
                    </div>
                    <div>Последна активност: {topic.lastActivity}</div>
                  </div>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="flex h-40 flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
              <h3 className="mb-2 text-lg font-medium">Няма намерени теми</h3>
              <p className="text-sm text-muted-foreground">Опитайте да промените търсенето или филтрите</p>
            </div>
          )}
        </TabsContent>
        <TabsContent value="recycling" className="space-y-4">
          {filteredTopics
            .filter((topic) => topic.category.toLowerCase().includes("recycling"))
            .map((topic) => (
              <Card key={topic.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">
                        <Link href={`/forum/${topic.id}`} className="hover:text-green-600 hover:underline">
                          {topic.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="mt-1">
                        <Badge variant="outline" className="mr-2">
                          {topic.category}
                        </Badge>
                        Започната от{" "}
                        <span className="font-medium">
                          {topic.author} <span className="text-xs text-green-600">({topic.role})</span>
                        </span>
                      </CardDescription>
                    </div>
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-green-100 text-green-800">
                        {topic.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{topic.excerpt}</p>
                </CardContent>
                <CardFooter className="border-t pt-4 text-sm text-muted-foreground">
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <MessageSquare className="mr-1 h-4 w-4" />
                        {topic.replies} отговора
                      </div>
                      <div>{topic.views} преглеждания</div>
                    </div>
                    <div>Последна активност: {topic.lastActivity}</div>
                  </div>
                </CardFooter>
              </Card>
            ))}
        </TabsContent>
        <TabsContent value="environmental" className="space-y-4">
          {filteredTopics
            .filter((topic) => topic.category.toLowerCase().includes("environmental"))
            .map((topic) => (
              <Card key={topic.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">
                        <Link href={`/forum/${topic.id}`} className="hover:text-green-600 hover:underline">
                          {topic.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="mt-1">
                        <Badge variant="outline" className="mr-2">
                          {topic.category}
                        </Badge>
                        Започната от{" "}
                        <span className="font-medium">
                          {topic.author} <span className="text-xs text-green-600">({topic.role})</span>
                        </span>
                      </CardDescription>
                    </div>
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-green-100 text-green-800">
                        {topic.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{topic.excerpt}</p>
                </CardContent>
                <CardFooter className="border-t pt-4 text-sm text-muted-foreground">
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <MessageSquare className="mr-1 h-4 w-4" />
                        {topic.replies} отговора
                      </div>
                      <div>{topic.views} преглеждания</div>
                    </div>
                    <div>Последна активност: {topic.lastActivity}</div>
                  </div>
                </CardFooter>
              </Card>
            ))}
        </TabsContent>
        <TabsContent value="green" className="space-y-4">
          {filteredTopics
            .filter((topic) => topic.category.toLowerCase().includes("green"))
            .map((topic) => (
              <Card key={topic.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">
                        <Link href={`/forum/${topic.id}`} className="hover:text-green-600 hover:underline">
                          {topic.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="mt-1">
                        <Badge variant="outline" className="mr-2">
                          {topic.category}
                        </Badge>
                        Започната от{" "}
                        <span className="font-medium">
                          {topic.author} <span className="text-xs text-green-600">({topic.role})</span>
                        </span>
                      </CardDescription>
                    </div>
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-green-100 text-green-800">
                        {topic.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{topic.excerpt}</p>
                </CardContent>
                <CardFooter className="border-t pt-4 text-sm text-muted-foreground">
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <MessageSquare className="mr-1 h-4 w-4" />
                        {topic.replies} отговора
                      </div>
                      <div>{topic.views} преглеждания</div>
                    </div>
                    <div>Последна активност: {topic.lastActivity}</div>
                  </div>
                </CardFooter>
              </Card>
            ))}
        </TabsContent>
      </Tabs>

      {!isAuthenticated && (
        <div className="mt-8 rounded-lg bg-green-50 p-6 text-center">
          <h3 className="text-lg font-medium text-green-800">Присъединете се към разговора</h3>
          <p className="mt-2 text-green-600">Регистрирайте се или влезте, за да участвате в дискусии и да създавате нови теми</p>
          <div className="mt-4 flex justify-center gap-4">
            <Button asChild variant="outline">
              <Link href="/login">Вход</Link>
            </Button>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/signup">Регистрация</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

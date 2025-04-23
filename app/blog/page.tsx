import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays } from "lucide-react"

// Mock blog data
const blogPosts = [
  {
    id: 0,
    title: "Топ 5 съвета за рециклиране за по-зелена планета",
    excerpt: "Лесни и ефективни начини да рециклирате по-добре и да помогнете на околната среда.",
    author: "Екипът на ChemCycle",
    date: "21 април 2025",
    category: "Съвети за рециклиране",
    readTime: "3 мин четене",
    image: "/placeholder.svg?height=400&width=600",
    link: "/blog/recycling-tips"
  },
  {
    id: 1,
    title: "Химията зад рециклирането на пластмаси",
    excerpt: "Разгледайте химичните процеси при разграждането и повторната употреба на различни видове пластмаси.",
    author: "Д-р Емили Чен",
    date: "15 април 2023",
    category: "Рециклиране",
    readTime: "8 мин четене",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Зелена химия: Принципи за устойчиви иновации",
    excerpt: "Научете за 12-те принципа на зелената химия и как те насочват устойчивото развитие на продукти.",
    author: "Проф. Джеймс Уилсън",
    date: "22 март 2023",
    category: "Зелена химия",
    readTime: "10 мин четене",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Пречистване на вода: Химични методи за чиста питейна вода",
    excerpt: "Открийте химичните техники за пречистване на водата и правенето й безопасна за консумация.",
    author: "Д-р Сара Джонсън",
    date: "8 февруари 2023",
    category: "Водна химия",
    readTime: "7 мин четене",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Биоразградими полимери: Бъдещето на устойчивите опаковки",
    excerpt: "Обзор на биоразградимите полимери и потенциала им да заменят обикновените пластмаси.",
    author: "Д-р Майкъл Браун",
    date: "30 януари 2023",
    category: "Материалознание",
    readTime: "9 мин четене",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "Ролята на химията в борбата с климатичните промени",
    excerpt: "Как химичните иновации помагат за намаляване на парниковите газове и смекчаване на климатичните промени.",
    author: "Проф. Лиза Мартинес",
    date: "12 декември 2022",
    category: "Екологична химия",
    readTime: "12 мин четене",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    title: "Химия на компостирането: Разбиране на процеса на разграждане",
    excerpt:
      "Подробен поглед върху химичните реакции при компостиране и ползите им за околната среда.",
    author: "Д-р Робърт Тейлър",
    date: "5 ноември 2022",
    category: "Органична химия",
    readTime: "6 мин четене",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function BlogPage() {
  const featuredPost = blogPosts[0]
  const regularPosts = blogPosts.slice(1)

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Блог</h1>
        <p className="text-muted-foreground">
          Статии и новини за химията, околната среда и съвети за рециклиране
        </p>
      </div>

      {/* Featured Post */}
      <div className="mb-12">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <Image
                src={featuredPost.image || "/placeholder.svg"}
                alt={featuredPost.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col justify-center p-6">
              <Badge className="mb-2 w-fit bg-green-100 text-green-800 hover:bg-green-200">
                {featuredPost.category}
              </Badge>
              <CardTitle className="mb-2 text-2xl">
                <Link href={`/blog/${featuredPost.id}`} className="hover:text-green-600 hover:underline">
                  {featuredPost.title}
                </Link>
              </CardTitle>
              <CardDescription className="mb-4 text-base">{featuredPost.excerpt}</CardDescription>
              <div className="mb-4 flex items-center text-sm text-muted-foreground">
                <CalendarDays className="mr-1 h-4 w-4" />
                {featuredPost.date} • {featuredPost.readTime}
              </div>
              <CardFooter className="flex items-center justify-between p-0">
                <div className="text-sm font-medium">By {featuredPost.author}</div>
                <Button asChild variant="outline" size="sm">
                  <Link href={`/blog/${featuredPost.id}`}>Read More</Link>
                </Button>
              </CardFooter>
            </div>
          </div>
        </Card>
      </div>

      {/* Regular Posts */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {regularPosts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <Image src={post.image} alt={post.title} width={600} height={400} className="rounded-md" />
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.excerpt}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Badge>{post.category}</Badge>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="link" className="p-0 text-green-600">
                <Link href={post.link || "#"}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button variant="outline">Load More Articles</Button>
      </div>
    </div>
  )
}

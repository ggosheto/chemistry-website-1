import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Recycle, BookOpen, Calculator, Leaf } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-16 md:py-24">
        <div className="container flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tight text-green-800 sm:text-5xl md:text-6xl">
            Рециклиране за <span className="text-green-600">по-зелена планета</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Открийте как рециклирането и химията работят заедно за опазване на околната среда. Присъединете се към нашата общност, за да учите, споделяте и допринасяте за устойчиво бъдеще.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/signup">Присъединете се към нашия екип</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/forum">Споделете идеи</Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">Разгледайте ресурсите за рециклиране</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="space-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Recycle className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Информация за рециклиране</CardTitle>
                <CardDescription>
                  Научете за процесите на рециклиране и тяхното въздействие върху околната среда.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/blog" className="text-sm font-medium text-green-600 hover:underline">
                  Прочетете нашите статии 
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="space-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Съвети за рециклиране</CardTitle>
                <CardDescription>
                  Практични съвети за намаляване, повторна употреба и рециклиране в ежедневието.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/blog" className="text-sm font-medium text-green-600 hover:underline">
                  Вземете съвети 
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="space-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Calculator className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Калкулатор за въздействие</CardTitle>
                <CardDescription>
                  Вижте как вашите навици за рециклиране помагат на планетата.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/calculator" className="text-sm font-medium text-green-600 hover:underline">
                  Пробвайте калкулатора 
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

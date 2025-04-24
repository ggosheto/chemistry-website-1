"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutUsPage() {
  return (
    <div className="container py-8">
      <Card>
        <CardHeader>
          <CardTitle>За нас</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-muted-foreground">
            {/* Тук добавете информация за екипа, мисията и историята на сайта. */}
            <p>Тази страница ще съдържа информация за нашия екип, мисия и история. Можете да редактирате този текст и да добавите подробности по-късно.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

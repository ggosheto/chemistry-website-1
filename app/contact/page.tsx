"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <div className="container py-8">
      <Card>
        <CardHeader>
          <CardTitle>Контакт</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-muted-foreground">
            {/* Тук добавете информация за контакт: имейл, телефон, адрес, форма за контакт и др. */}
            <p>Тази страница ще съдържа информация за връзка с нас. Можете да добавите имейл, телефон, адрес или форма за контакт по-късно.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

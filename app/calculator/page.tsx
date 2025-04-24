"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Recycle } from "lucide-react"

const MATERIALS = [
  { label: "Хартия", value: "paper", co2: 1.5 }, // kg CO2 saved per kg recycled
  { label: "Пластмаса", value: "plastic", co2: 1.8 },
  { label: "Алуминий", value: "aluminum", co2: 9.0 },
]

export default function RecyclingImpactCalculator() {
  const [material, setMaterial] = useState("paper")
  const [amount, setAmount] = useState(0)
  const [result, setResult] = useState<number | null>(null)

  function calculateImpact() {
    const mat = MATERIALS.find((m) => m.value === material)
    if (!mat) return
    setResult(Number(amount) * mat.co2)
  }

  // Add state and function for bauxite water usage calculator
  const [bauxiteAmount, setBauxiteAmount] = useState(0)
  const [waterResult, setWaterResult] = useState<number | null>(null)
  function calculateWaterUsage() {
    // Typical value: 3 m³ water per ton of bauxite processed
    setWaterResult(Number(bauxiteAmount) * 3)
  }

  // Add state and function for aluminum production resource calculator
  const [aluminumAmount, setAluminumAmount] = useState(0)
  const [aluminumResult, setAluminumResult] = useState<null | {bauxite: number, water: number, electricity: number}>(null)
  function calculateAluminumResources() {
    const amt = Number(aluminumAmount)
    setAluminumResult({
      bauxite: amt * 4,
      water: amt * 15,
      electricity: amt * 15000
    })
  }

  return (
    <div className="max-w-xl mx-auto my-12">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Recycle className="h-6 w-6 text-green-600" />
            <CardTitle>Калкулатор за въздействие от рециклиране</CardTitle>
          </div>
          <CardDescription>
            Изчислете колко CO2 емисии спестявате чрез рециклиране на хартия, пластмаса или алуминий.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="material">Материал</Label>
              <select
                id="material"
                className="w-full border rounded px-3 py-2 mt-1"
                value={material}
                onChange={(e) => setMaterial(e.target.value)}
              >
                {MATERIALS.map((m) => (
                  <option key={m.value} value={m.value}>{m.label}</option>
                ))}
              </select>
            </div>
            <div>
              <Label htmlFor="amount">Количество за рециклиране (кг)</Label>
              <Input
                id="amount"
                type="number"
                min="0"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                placeholder="Въведете количество в килограми"
              />
            </div>
            <Button className="bg-green-600 hover:bg-green-700 w-full" onClick={calculateImpact}>
              Изчисли спестения CO2
            </Button>
            {result !== null && (
              <Alert className="mt-4 border-green-600">
                <AlertTitle>Резултат</AlertTitle>
                <AlertDescription>
                  Спестявате приблизително <span className="font-bold">{result.toFixed(2)} кг</span> CO2 емисии!
                </AlertDescription>
              </Alert>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <span className="text-xs text-muted-foreground">Оценките са базирани на данни от EPA. <Link href="/blog/recycling-tips" className="text-green-600 hover:underline">Научете повече</Link></span>
        </CardFooter>
      </Card>

      {/* Bauxite Water Usage Calculator */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Калкулатор за водна консумация при боксит</CardTitle>
          <CardDescription>
            Изчислете колко вода се използва за обработка на боксит. (Типично: ~3 м³ вода на тон боксит)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="bauxite-amount">Количество боксит (тона)</Label>
              <Input
                id="bauxite-amount"
                type="number"
                min="0"
                step="any"
                value={bauxiteAmount}
                onChange={e => setBauxiteAmount(Number(e.target.value))}
                placeholder="Въведете количество в тонове"
              />
            </div>
            <Button onClick={calculateWaterUsage} type="button">Изчисли водната консумация</Button>
            {waterResult !== null && (
              <Alert className="mt-4">
                <AlertTitle>Оценена водна консумация</AlertTitle>
                <AlertDescription>
                  {bauxiteAmount || 0} тон(а) боксит ≈ <b>{waterResult}</b> м³ вода
                </AlertDescription>
              </Alert>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Aluminum Production Resource Calculator */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Калкулатор за ресурси при производство на алуминий</CardTitle>
          <CardDescription>
            Въведете количеството алуминий, което искате да произведете, за да изчислите необходимите боксит, вода и електроенергия.
            <br />Типични стойности: 4 тона боксит, 15 м³ вода, 15 000 kWh електроенергия на тон алуминий.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="aluminum-amount">Количество алуминий (тона)</Label>
              <Input
                id="aluminum-amount"
                type="number"
                min="0"
                step="any"
                value={aluminumAmount}
                onChange={e => setAluminumAmount(Number(e.target.value))}
                placeholder="Въведете количество в тонове"
              />
            </div>
            <Button onClick={calculateAluminumResources} type="button">Изчисли ресурсите</Button>
            {aluminumResult && (
              <Alert className="mt-4">
                <AlertTitle>Оценени необходими ресурси</AlertTitle>
                <AlertDescription>
                  <ul className="list-disc ml-6">
                    <li><b>{aluminumAmount || 0}</b> тон(а) алуминий</li>
                    <li><b>{aluminumResult.bauxite}</b> тон(а) боксит</li>
                    <li><b>{aluminumResult.water}</b> м³ вода</li>
                    <li><b>{aluminumResult.electricity}</b> kWh електроенергия</li>
                  </ul>
                </AlertDescription>
              </Alert>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

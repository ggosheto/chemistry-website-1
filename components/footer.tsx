import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-green-600">ChemCycle</h3>
            <p className="text-sm text-muted-foreground">
              Насърчаваме рециклирането, образованието по химия и екологичната осведоменост за устойчиво бъдеще.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Ресурси</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-green-600">
                  Блог за рециклиране
                </Link>
              </li>
              <li>
                <Link href="/forum" className="text-muted-foreground hover:text-green-600">
                  Форум
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="text-muted-foreground hover:text-green-600">
                  Калкулатор за въздействие
                </Link>
              </li>
              <li>
                <Link href="/periodic-table" className="text-muted-foreground hover:text-green-600">
                  Периодична таблица
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Общност</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-green-600">
                  За нас
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-green-600">
                  Контакт
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-green-600">
                  Често задавани въпроси
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Правна информация</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-green-600">
                  Политика за поверителност
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-green-600">
                  Общи условия
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ChemCycle. Всички права запазени.</p>
        </div>
      </div>
    </footer>
  )
}
